import base64
import binascii

from castleio.CastleEventLog import *
from castleio.TEA import xxtea_decrypt
from .CastleEncoding import *
from .CastleCustomFloat import CustomFloat
from .CastleFPOne import FP_INFO_SIZES
from .CastleFPTwo import FP2_INFO_SIZES
from .CastleFPThree import FP3_INFO_SIZES



def unpack_fp_part_size(y):
    n = (y >> 5) & 0b111
    t = y & 0b11111
    return n, t


def index_and_type_unpack(value):
    extracted_type = value & 7
    extracted_n = (value >> 3) & 31
    return extracted_n, extracted_type


def decode_version_bytes(encoded_bytes):
    encoded = int.from_bytes(encoded_bytes, byteorder='big')
    verPatch = encoded & 0b111111
    verMinor = (encoded >> 6) & 0b11111
    verMajor = (encoded >> 11) & 0b11
    n = (encoded >> 13)
    verMajor += 1
    return n, verMajor, verMinor, verPatch

TIME_BASED_KEY_OFF = 0
TIME_BASED_KEY_END = TIME_BASED_KEY_OFF + 6
VERSION_OFF = TIME_BASED_KEY_END
VERSION_END = VERSION_OFF + 2
PK_OFF = VERSION_END
PK_END = VERSION_END + 32
UUID_OFF = PK_END
UUID_END = UUID_OFF + 16
VALUES_OFF = UUID_END

TEA_KEY = [1164413191, 3891440048, 185273099, 2746598870]

def analyze_castle_fingerprint_buf(size, buf, type_sizes, is_part_one, prefix, init_time):
    cursor = 0
    for _ in range(0, size):
        info_ind, info_type = index_and_type_unpack(buf[cursor])
        if info_type == UNK or info_type == UNK2:
            cursor += 1
            print(f"{prefix} Info {info_ind} has no data {info_type}")
        elif info_type == B2H:
            print(f"{prefix} Info {info_ind} data B2H: {buf[cursor + 1]}")
            cursor += 2
        elif info_type == SERIALIZED_BYTE_ARRAY:
            data_len = buf[cursor + 1]
            decrypted_bytes = xxtea_decrypt(buf[cursor + 2 : cursor + 2 + data_len], [info_ind, int(init_time), 16373134, 643144773, 1762804430, 1186572681, 1164413191])
            print(
                f"{prefix} Info {info_ind} data SBA: {decrypted_bytes}")
            cursor += data_len + 2
        elif info_type == B2H_WITH_CHECKS:
            if buf[cursor + 1] <= 127:
                print(f"{prefix} Info {info_ind} data B2H1: {buf[cursor+1]}")
                cursor += 2
            else:
                val = ((buf[cursor + 1] & 0x7F) << 8) | buf[cursor + 2]
                print(f"{prefix} Info {info_ind}  data B2H2: {val}")
                cursor += 3
        elif info_type == B2H_ROUNDED:
            print(f"{prefix} Info {info_ind} data B2HR: {buf[cursor + 1]}")
            cursor += 2
        elif info_type == JUST_APPEND:
            if is_part_one and info_ind == 12:
                data_len_size = buf[cursor + 1]
                data_len = int.from_bytes(
                    buf[cursor+2:cursor + 2 + data_len_size], 'big')
                data = buf[cursor+2+data_len_size: cursor +
                           2+data_len_size+data_len]
                print(f"{prefix} Info {info_ind} data: {xxtea_decrypt(data, [info_ind, int(init_time), 16373134, 643144773, 1762804430, 1186572681, 1164413191])}")
                cursor += 2 + data_len_size + data_len
            elif info_ind in type_sizes:
                print(
                    f"{prefix} Info {info_ind} data JA: {get_hex(buf[cursor + 1:cursor+type_sizes[info_ind]])}")
                cursor += type_sizes[info_ind]
            else:
                print("Unknown fp value", info_ind)
                break
        else:
            print(f"Unknown info type {info_type}")
            break
    return cursor


def decode_fp_part_one(len, buf, init_time):
    global info_sizes
    return analyze_castle_fingerprint_buf(
        len, buf, FP_INFO_SIZES, True, "P1", init_time)


def decode_fp_part_two(len, buf, init_time):
    global info_sizes
    return analyze_castle_fingerprint_buf(
        len, buf, FP2_INFO_SIZES, False, "P2", init_time)

def decode_fp_part_three(len, buf, init_time):
    global info_sizes
    return analyze_castle_fingerprint_buf(
        len, buf, FP3_INFO_SIZES, False, "P3", init_time)


def decode_float_data_byte(byte, r=4, n=3):
    cf1 = CustomFloat(r, n)
    cf2 = CustomFloat(r - 2, n + 1)

    if byte & 128:  # Check if the 7th bit is set
        value = cf1.d(byte & 0x3F)  # Use the lower 6 bits
        return value + 14  # Add 14 to reverse encoding
    elif byte & 64:  # Check if the 6th bit is set
        value = cf2.d(byte & 0x3F)  # Use the lower 6 bits
        return value - 1  # Subtract 1 to reverse encoding
    else:
        return 0

def decode_flag_array(hex_bytes):
    if len(hex_bytes) != 2:
        raise ValueError("Input must be a list of two hexadecimal bytes.")
    data = (hex_bytes[0] << 8) | hex_bytes[1]
    binary_converted_num = data & 0x0FFF
    N = binary_converted_num >> 4
    binary_str = format(N, '08b')
    boolean_array = [bit == '1' for bit in binary_str]
    return binary_converted_num, boolean_array

def decode_floats(buf):
        for i in range(0, 53):
            print(f"EventData Float {i}",
                decode_float_data_byte(buf[i]))

def parse_token_header(token):
    decoded_token = base64.urlsafe_b64decode(token)
    decrypted_token = xor_bytes(decoded_token[1:-1], decoded_token[0:1])
    padding = decrypted_token[1]
    print("Token version:", decrypted_token[0])
    print("Padding:", decrypted_token[1])
    decrypted_token = xxtea_decrypt(decrypted_token[2:], TEA_KEY)
    version = decode_version_bytes(decrypted_token[VERSION_OFF:VERSION_END])
    pk = decrypted_token[PK_OFF:PK_END]
    uuid = binascii.hexlify(decrypted_token[UUID_OFF:UUID_END]).decode('utf-8')
    rest = decrypted_token[VALUES_OFF:]
    return version, pk, uuid, rest, decode_timestamp(decrypted_token[TIME_BASED_KEY_OFF:TIME_BASED_KEY_END])



def decode_new_event_log(buf, count):
    cursor = 0
    for i in range(0, count):
        event_info = buf[cursor]
        cursor += 1
        has_callback = event_info & 64
        has_target = event_info & 128
        event_id = event_info & 0b00111111
        has_input_type = None
        has_hash = None
        node_hash = None
        input_type = None
        element_type = None
        #print(eventId, hasCallback, hasTarget)
        if(has_target):
            event_info = buf[cursor]
            cursor += 1
            has_hash = event_info & 128
            has_input_type = event_info & 64
            element_type = event_info & 0b00111111
            if(has_input_type):
                input_type = buf[cursor]
                cursor += 1
        if(has_callback):
            if event_id == EVENT_AFK:
                afk_data = buf[cursor]
                cursor += 1
                print("EVENT_AFK:", afk_data)
            elif event_id == EVENT_KEYDOWN:
                keydown_modifier_bitfield = buf[cursor:cursor+2]
                cursor += 2
                print("EVENT_MODIFIERDOWN:", bin(int.from_bytes(keydown_modifier_bitfield)))
            else:
                print("Invalid modifier found")
                break
        if(has_hash):
            node_hash = buf[cursor]
            cursor += 1
        input_type_name = EVENTLOG_INPUT_TYPES[input_type]  if input_type and input_type != 63 else "Unknown" if input_type else "None"
        element_type_name = EVENTLOG_INPUT_TYPES[element_type]  if element_type and element_type != 63 else "Unknown" if element_type else "None"
        print(EVENT_NAMES[event_id], node_hash, input_type_name, element_type_name)





def decode_token(token):
    version, pk, uuid, rest, init_time = parse_token_header(token)
    print("Version:", version)
    print("PK:", pk)
    print("CUID:", uuid)
    print("InitTime:", init_time)
    decryption_round_one = derive_key_and_xor_bytes(
        uuid, 8, uuid[9], rest)
    print("SendTime:", decode_timestamp(decryption_round_one[:6]))
    time_based_key = binascii.hexlify(decryption_round_one[:6]).decode('utf-8')
    decryption_round_two = derive_key_and_xor_bytes(
    time_based_key, 4, time_based_key[3], decryption_round_one[6:])
    ind, size = unpack_fp_part_size(decryption_round_two[0])
    if(ind != 0):
        print("Decoding failed (invalid part index 0).")
        exit(0)
    cursor = 1
    cursor += decode_fp_part_one(size, decryption_round_two[cursor:], init_time)
    ind, size = unpack_fp_part_size(decryption_round_two[cursor])
    if(ind != 4):
        print("Decoding failed (invalid part index 4).")
        exit(0)
    cursor += 1
    cursor += decode_fp_part_two(
        size, decryption_round_two[cursor:], init_time)
    ind, size = unpack_fp_part_size(decryption_round_two[cursor])
    if(ind != 7):
        print("Decoding failed (invalid part index 7).")
        exit(0)
    cursor += 1
    cursor += decode_fp_part_three(size, decryption_round_two[cursor:], init_time)
    event_log_size = int.from_bytes(decryption_round_two[cursor:cursor+2]) - 3
    cursor += 2

    if(decryption_round_two[cursor] != 0):
        print("Something went wrong, this should be 0 ")
        exit(0)
    cursor += 1
    event_log_count = int.from_bytes(decryption_round_two[cursor:cursor+2])
    print(event_log_count)
    cursor += 2
    decode_new_event_log(decryption_round_two[cursor:cursor+event_log_size], event_log_count)
    cursor += event_log_size
    data_point_data = decryption_round_two[cursor:]

    print(decode_flag_array(data_point_data[0:2]))
    #print("Event Flags:", bin(int.from_bytes(data_point_data[0:2], 'big')))
    decode_floats(data_point_data[2:])
    i = 0
    for byte in data_point_data[55:]:
        print(f"EventData Int {i} {byte}")
        i += 1