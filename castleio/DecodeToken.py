import base64
import binascii
from .CastleEncoding import *
from .CastleCustomFloat import CustomFloat
from .CastleFPOne import FP_INFO_SIZES
from .CastleFPTwo import FP2_INFO_SIZES


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


UNK_PREFIX_LENGTH = 1
UNK_PREFIX_OFF = 0
PK_LENGTH = 25
PK_OFF = UNK_PREFIX_LENGTH
VERSION_LENGTH = 2
VERSION_OFF = PK_OFF + PK_LENGTH
UUID_LENGTH = 16
UUID_OFF = VERSION_OFF + VERSION_LENGTH
VALUES_OFF = UUID_OFF + UUID_LENGTH


def parse_token(token):
    decoded_token = base64.urlsafe_b64decode(token)
    decrypted_token = xor_bytes(decoded_token[1:], decoded_token[0:1])
    unk_prefix = decrypted_token[UNK_PREFIX_OFF]
    data_pk = decrypted_token[PK_OFF:PK_OFF + PK_LENGTH]
    version_bytes = decrypted_token[VERSION_OFF:VERSION_OFF+VERSION_LENGTH]
    version_info = decode_version_bytes(version_bytes)
    uuid = decrypted_token[UUID_OFF:UUID_OFF+UUID_LENGTH]
    values = decrypted_token[VALUES_OFF:-1]
    fp_size = decrypted_token[-1]
    return unk_prefix, data_pk, version_info, uuid, values, fp_size


def analyze_castle_fingerprint_buf(size, buf, type_sizes, is_part_one, prefix):
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
            print(
                f"{prefix} Info {info_ind} data SBA: {buf[cursor + 2:cursor + 2 + data_len]}")
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
                print(f"{prefix} Info {info_ind} data: {data}")
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


def decode_fp_part_one(len, buf):
    global info_sizes
    return analyze_castle_fingerprint_buf(
        len, buf, FP_INFO_SIZES, True, "P1")


def decode_fp_part_two(len, buf):
    global info_sizes
    return analyze_castle_fingerprint_buf(
        len, buf, FP2_INFO_SIZES, False, "P2")

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

def decode_token(token):
    unk_prefix, data_pk, version_info, uuid, values, fp_len = parse_token(
        token)
    print(unk_prefix, data_pk, version_info, uuid, values, fp_len)
    uuid_hex = binascii.hexlify(uuid).decode('utf-8')
    print(uuid_hex)
    decryption_round_one = derive_key_and_xor_bytes(
        uuid_hex, 8, uuid_hex[9], values)
    time_based_key = binascii.hexlify(decryption_round_one[:6]).decode('utf-8')
    print(time_based_key)
    decryption_round_two = derive_key_and_xor_bytes(
    time_based_key, 4, time_based_key[3], decryption_round_one[6:])
    ind, size = unpack_fp_part_size(decryption_round_two[0])
    cursor = 1
    cursor += decode_fp_part_one(size, decryption_round_two[cursor:])
    ind, size = unpack_fp_part_size(decryption_round_two[cursor])
    cursor += 1
    cursor += decode_fp_part_two(
        size, decryption_round_two[cursor:])


    data_point_data = decryption_round_two[cursor:]

    print(decode_flag_array(data_point_data[0:2]))
    print("Event Flags:", bin(int.from_bytes(data_point_data[0:2], 'big')))
    decode_floats(data_point_data[2:])
    i = 0
    for byte in data_point_data[55:]:
        print(f"EventData Int {i} {byte}")
        i += 1