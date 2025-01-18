import math
import time
import random
import base64
import binascii

from castleio.CastleEventLog import generate_event_log
from castleio.CastleFPThree import get_fp_three
from castleio.TEA import xxtea_encrypt
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


def encode_timestamp_encrypted(timestamp):
    hex_timestamp = encode_timestamp_to_bytes(timestamp)
    time_slice = int(str(math.floor(timestamp))[-3:])
    time_slice_bytes = time_slice.to_bytes(2, 'big')
    xor_key = random.randint(0, 15)
    return xor_and_append_key(hex_timestamp, xor_key) + xor_and_append_key(time_slice_bytes, xor_key)


def get_header(uuid: str, pk: str, init_time : int):
    out = bytes()
    out += binascii.unhexlify(encode_timestamp_encrypted(init_time))
    version = (3 << 13) | ((3 & 1) << 11) | ((31 & 6) << 6) | (63 & 0)
    out += version.to_bytes(2, 'big')
    out += pk.encode('utf-8')
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
        gpu: str,
        init_time : int):
    """Generates a castle.io token & CUID

    :return: castle token, cuid
    :rtype: tuple[str, str]
    """

    screen_dimensions_px_x = screen_dimensions_px[0]
    screen_dimensions_px_y = screen_dimensions_px[1]

    browser_window_dimensions_px_x = screen_avail_dimensions_px[0]
    browser_window_dimensions_px_y = screen_avail_dimensions_px[1]

    fp_one = get_fp_one(init_time, user_agent, language, screen_dimensions_px_x, screen_dimensions_px_y,
                        browser_window_dimensions_px_x, browser_window_dimensions_px_y, gpu, time_zone_name)
    fp_two = get_fp_two(time_zone_name, locale, language, init_time)
    fp_three = get_fp_three(init_time)
    fp_event_log = generate_event_log()
    fp_events = get_fp_event_values()

    fp_data = fp_one + fp_two + fp_three + fp_event_log + fp_events + b'\xFF'
    fp_data_key = encode_timestamp_encrypted(time.time() * 1e3)
    
    encrypted_fp_data = derive_key_and_xor_bytes(
        fp_data_key, 4, fp_data_key[3], fp_data)

    token_uuid = uuid_generator()

    encrypted_fp_data_two = derive_key_and_xor_bytes(
        token_uuid, 8, token_uuid[9], binascii.unhexlify(fp_data_key) + encrypted_fp_data)

    random_byte = random.randint(0, 255)
    header = get_header(token_uuid, pk, init_time)

    fingerprint =  header + encrypted_fp_data_two
    encrypted_fp = xxtea_encrypt(fingerprint, [1164413191, 3891440048, 185273099, 2746598870])
    encrypted_fp = b'\x0b' + (len(encrypted_fp) - len(fingerprint)).to_bytes(1) + encrypted_fp
    final = bytes([random_byte]) + xor_bytes(encrypted_fp, bytes([random_byte])) + bytes([random_byte])
    return base64.urlsafe_b64encode(final).rstrip(b"=").decode('utf-8'), token_uuid


if __name__ == '__main__':
    print(gen_token())
