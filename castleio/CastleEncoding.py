import binascii
from itertools import cycle
import os

def byte_to_bytes(byte_val):
    return bytes([byte_val])

def int_to_fixed_size_bytes_be(value : int, size):
    return value.to_bytes(size, 'big')

def serialize_byte_array_to_bytes(byte_array):
    return bytes(byte_array)

UNK = 1
UNK2 = 2
B2H = 3
SERIALIZED_BYTE_ARRAY = 4
B2H_WITH_CHECKS = 5
B2H_ROUNDED = 6
JUST_APPEND = 7
EMPTY_VALUE = -1

def values_to_bytes(n, t) -> bytes:
    r = 32767 & n
    e = 65535 & t
    if r == e:
        return int_to_fixed_size_bytes_be(32768 | r, 2)
    else:
        return int_to_fixed_size_bytes_be(r, 2) + int_to_fixed_size_bytes_be(e, 2)

def process_fp_value(index, valueType, val):
    e = bytes([((31 & index) << 3) | (7 & valueType)])
    if valueType == B2H_ROUNDED:
        e += byte_to_bytes(round(val))
    elif valueType == B2H:
        e += byte_to_bytes(val)
    elif valueType == B2H_WITH_CHECKS:
        if val <= 127:
            e += byte_to_bytes(val)
        else:
            e += int_to_fixed_size_bytes_be((1 << 15) | (32767 & val), 2)
    elif valueType == SERIALIZED_BYTE_ARRAY:
        e += bytes([len(val)])
        e += val
    elif valueType == JUST_APPEND:
        e += val if isinstance(val, bytes) else bytes([val])
    return e

def encode_bits_to_bytes(bit_array, byte_size=8):
    num_bytes = byte_size // 8
    byte_array = [0] * num_bytes

    for bit in bit_array:
        byte_index = (num_bytes - 1) - (bit // 8)
        bit_position = bit % 8

        if 0 <= byte_index < num_bytes:
            byte_array[byte_index] |= (1 << bit_position)

    return bytes(byte_array)


def bool_array_to_binary(n, t=None):
    """
    Converts a list of boolean values into a binary number.

    Parameters:
    - n (list of bool): The list of boolean values to convert.
    - t (int, optional): The maximum number of elements to consider from the list `n`.
                         Also defines the desired bit length of the resulting binary number.

    Returns:
    - int: The resulting binary number as an integer.
    """
    r = 0

    # Slice the list if t is provided and n has more than t elements
    e = n[:t] if t is not None and len(n) > t else n
    c = len(e)
    i = c - 1

    # Convert the boolean list to a binary number
    while i >= 0:
        bit = 1 if e[i] else 0
        shift_amount = c - i - 1
        r |= bit << shift_amount
        i -= 1

    # If t is provided and the current length is less than t, pad with zeros by shifting left
    if t is not None and c < t:
        r <<= (t - c)

    return r

def derive_key_and_xor_bytes(key: str, slice_len: int, rotation_key: str, data: bytes) -> bytes:
    real_key = key
    substring = real_key[:slice_len]
    try:
        rotation_number = int(rotation_key, 16)
    except ValueError:
        raise ValueError(f"Invalid hexadecimal string: '{rotation_key}'")
    chars = list(substring)
    total_length = len(chars)
    if total_length == 0:
        return substring
    rotation_index = rotation_number % total_length
    rotated_chars = chars[rotation_index:] + chars[:rotation_index]
    rotated_string = ''.join(rotated_chars)
    return xor_bytes(data, binascii.unhexlify(rotated_string))

def get_hex(data: bytes) -> str:
    return binascii.hexlify(data).decode('utf-8')

def xor_bytes(data: bytes, key: bytes) -> bytes:
    cycled_t = cycle(key)
    xor_result = bytes([byte_n ^ byte_t for byte_n,
                       byte_t in zip(data, cycled_t)])
    return xor_result


def xor_hex_strings(n, t):
    r = []  # Result list
    e = 0   # Index for 't'
    for u in n:
        xor_result = int(u, 16) ^ int(t[e], 16)
        r.append(format(xor_result, 'x'))
        e = (e + 1) % len(t)
    return ''.join(r)


def uuid_generator():
    return os.urandom(16).hex()

def xor_and_append_key(buf, key) -> str:
    buff = get_hex(buf)
    key_hex = get_hex(bytes([key]))
    xor_result = xor_hex_strings(buff[1:], key_hex[1])
    out = xor_result + key_hex[1] 
    return out
