import math
import time
import random
import base64
import binascii
from .CastleFPEventValues import get_fp_event_values
from .CastleFPOne import get_fp_one
from .CastleFPTwo import get_fp_two
from .CastleEncoding import *


def encode_timestamp_to_bytes(n):
    vt = 1535e6
    t = math.floor(n / 1e3 - vt)
    t = max(min(t, 268435455), 0)
    bytes_array = bytes([(t >> 24) & 0xFF, (t >> 16) &
                        0xFF, (t >> 8) & 0xFF, t & 0xFF])
    return bytes_array


def get_fp_data_key():
    timestamp = time.time() * 1e3
    hex_timestamp = encode_timestamp_to_bytes(timestamp)
    time_slice = int(str(math.floor(timestamp))[-3:])
    time_slice_bytes = time_slice.to_bytes(2, 'big')
    xor_key = random.randint(0, 15)
    return xor_and_append_key(hex_timestamp, xor_key) + xor_and_append_key(time_slice_bytes, xor_key)


def get_header(uuid: str, pk: str):
    out = bytes([9])
    out += pk.encode('utf-8')
    version = (2 << 13) | ((3 & 1) << 11) | ((31 & 4) << 6) | (63 & 1)
    out += version.to_bytes(2, 'big')
    out += binascii.unhexlify(uuid)
    return out


def gen_token(
        pk: str,
        user_agent: str,
        language: str,
        locale: str,
        time_zone_name: str,
        screen_dimensions_px: tuple[int, int],
        screen_avail_dimensions_px: tuple[int, int],
        gpu: str):
    """Generates a castle.io token & CUID

    :return: castle token, cuid
    :rtype: tuple[str, str]
    """

    screen_dimensions_px_x = screen_dimensions_px[0]
    screen_dimensions_px_y = screen_dimensions_px[1]

    browser_window_dimensions_px_x = screen_avail_dimensions_px[0]
    browser_window_dimensions_px_y = screen_avail_dimensions_px[1]

    fp_one = get_fp_one(user_agent, language, screen_dimensions_px_x, screen_dimensions_px_y,
                        browser_window_dimensions_px_x, browser_window_dimensions_px_y, gpu, time_zone_name)
    fp_two = get_fp_two(time_zone_name, locale, language)
    fp_events = get_fp_event_values()

    fp_data = fp_one + fp_two + fp_events + b'\xFF'
    fp_data_key = get_fp_data_key()
    encrypted_fp_data = derive_key_and_xor_bytes(
        fp_data_key, 4, fp_data_key[3], fp_data)

    token_uuid = uuid_generator()

    encrypted_fp_data_two = derive_key_and_xor_bytes(
        token_uuid, 8, token_uuid[9], binascii.unhexlify(fp_data_key) + encrypted_fp_data)

    random_byte = random.randint(0, 255)
    header = get_header(token_uuid, pk)

    fingerprint = header + encrypted_fp_data_two
    fingerprint += bytes([len(binascii.hexlify(fingerprint)) & 0xFF])

    final = bytes([random_byte]) + xor_bytes(fingerprint, bytes([random_byte]))

    return base64.urlsafe_b64encode(final).rstrip(b'=').decode('utf-8'), token_uuid


if __name__ == '__main__':
    print(gen_token())
