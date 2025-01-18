import random
from .CastleEncoding import *

FP2_CONSTANT_ONE = 0
FP2_TIME_ZONE = 1
FP2_LANGUAGE_ARRAY = 2
FP2_PRIVACY_BLOCKER_STRING = 5  # don't send
FP2_EXPECTED_PROPERTY_STRINGS_FOUND_COUNT = 6
FP2_CASTLE_DATA_BITFIELD = 10
FP2_BRAVE_DETECTOR_2 = 11  # don't send
FP2_NEGATIVE_ERROR_LENGTH = 12
FP2_DRIVER_CHECK_2 = 13
FP2_IS_PLATFORM_EMPTY = 14  # don't send
FP2_NOTIFICATION_PERMISSION = 15  # don't send
FP2_JS_CHECK_FOR_WORKER_DIFFERENCES = 16  # don't send
FP2_CHROME_FEATURE_SET = 17
FP2_DEVICE_LOGIC_EXPECTED = 18
FP2_ADBLOCKER_HASH = 19  # don't send
FP2_LISTENER_INPUT_BOX_TYPE_BITFIELD = 20  # don't send
FP2_CLASS_PROPERTIES_COUNT = 21
FP2_USER_LOCALE_2 = 22
FP2_WORKER_BITSET = 23
FP2_INNER_OUTER_DIMS_DIFF = 24
FP2_UNK_25_DWURL_WORKER = 25
FP2_ARCHITECTURE_ENUM = 28

FP2_INFO_SIZES = {
    FP2_CONSTANT_ONE: 2,
    FP2_TIME_ZONE: 18,
    FP2_LANGUAGE_ARRAY: 10,
    FP2_EXPECTED_PROPERTY_STRINGS_FOUND_COUNT: 2,
    FP2_CASTLE_DATA_BITFIELD: 3,
    FP2_NEGATIVE_ERROR_LENGTH: 2,
    FP2_DRIVER_CHECK_2: 4,
    FP2_JS_CHECK_FOR_WORKER_DIFFERENCES: 4,
    FP2_CHROME_FEATURE_SET: 4,
    FP2_DEVICE_LOGIC_EXPECTED: 1,
    FP2_CLASS_PROPERTIES_COUNT: 5,
    FP2_USER_LOCALE_2: 7,
    FP2_ADBLOCKER_HASH: 6,
    FP2_LISTENER_INPUT_BOX_TYPE_BITFIELD : 3,
    FP2_WORKER_BITSET: 3,
    FP2_INNER_OUTER_DIMS_DIFF: 5,
    FP2_UNK_25_DWURL_WORKER: 1,
    FP2_ARCHITECTURE_ENUM: 2,
}


def get_const_one() -> bytes:
    return process_fp_value(FP2_CONSTANT_ONE, B2H, 0)


time_zone_enum = {
    "America/New_York" : 0,
    "America/Sao_Paulo" : 1,
    "America/Chicago" : 2,
    "America/Los_Angeles" : 3,
    "America/Mexico_City" : 4,
    "Asia/Shanghai" : 5,
}

def get_time_zone(time_zone: str, init_time : int) -> bytes:
    if time_zone in time_zone_enum:
        return process_fp_value(FP2_TIME_ZONE, B2H, time_zone_enum[time_zone])

    return process_fp_value(FP2_TIME_ZONE, SERIALIZED_BYTE_ARRAY, time_zone.encode(), init_time)


def get_language_array(locale: str, language: str, init_time : int) -> bytes:
    return process_fp_value(FP2_LANGUAGE_ARRAY, SERIALIZED_BYTE_ARRAY, f"{locale},{language}".encode(), init_time)


def expected_property_strings_found() -> bytes:
    return process_fp_value(FP2_EXPECTED_PROPERTY_STRINGS_FOUND_COUNT, B2H_WITH_CHECKS, 0)


def castle_data_bitfield() -> bytes:
    # throttling = 0
    # avoidCookies = 1
    # localStorage = 2
    # ctstCookieGenerated = 3
    size = bytes([4])
    bitfield = encode_bits_to_bytes([1, 2, 3])
    return process_fp_value(FP2_CASTLE_DATA_BITFIELD, JUST_APPEND, size + bitfield)


def negative_error_len() -> bytes:
    return process_fp_value(FP2_NEGATIVE_ERROR_LENGTH, B2H_WITH_CHECKS, 80)


def driver_check() -> bytes:
    # the bits in here are too complicated to doc, but should be all off anyway
    return process_fp_value(FP2_DRIVER_CHECK_2, JUST_APPEND, bytes([9, 0, 0]))


def chrome_feature_set() -> bytes:
    bitfield_len = bytes([0xD])
    bitfield = encode_bits_to_bytes([1, 5, 8, 9, 10], 16)
    return process_fp_value(FP2_CHROME_FEATURE_SET, JUST_APPEND, bitfield_len + bitfield)


def get_device_logic_expected() -> bytes:
    return process_fp_value(FP2_DEVICE_LOGIC_EXPECTED, UNK, 0)


def get_class_properties_count() -> bytes:
    return process_fp_value(FP2_CLASS_PROPERTIES_COUNT, JUST_APPEND, bytes([0, 0, 0, 0]))


def listener_input_box_field_type(input_field_type: int) -> bytes:
    # email: !1, hidden: !1, password: !1, tel: !1, text: !1
    # 0 = email
    # 1 = hidden
    # 2 = password
    # 3 = tel
    # 4 = text
    # this actually doesn't have to be sent
    bitfield_len = bytes([input_field_type])
    bitfield = encode_bits_to_bytes([0])
    return process_fp_value(FP2_LISTENER_INPUT_BOX_TYPE_BITFIELD, JUST_APPEND, bitfield_len + bitfield)


def get_user_locale(locale: str, init_time : int) -> bytes:
    return process_fp_value(FP2_USER_LOCALE_2, SERIALIZED_BYTE_ARRAY, locale.encode(), init_time)

def get_worker_bitset() -> bytes:
    bitfield_len = bytes([2])
    bitfield = encode_bits_to_bytes([0], 8)
    return process_fp_value(FP2_WORKER_BITSET, JUST_APPEND, bitfield_len + bitfield)

def inner_outer_dims() -> bytes:
    width_diff = 0
    height_diff = random.randint(10,30)
    return process_fp_value(FP2_INNER_OUTER_DIMS_DIFF, JUST_APPEND, width_diff.to_bytes(2) + height_diff.to_bytes(2))

def get_fp_two(time_zone: str, locale: str, language: str, init_time : int):
    data_list = [
        get_const_one(),
        get_time_zone(time_zone, init_time),
        get_language_array(locale, language, init_time),
        expected_property_strings_found(),
        castle_data_bitfield(),
        negative_error_len(),
        driver_check(),
        chrome_feature_set(),
        get_device_logic_expected(),
        get_class_properties_count(),
        get_user_locale(locale, init_time),
        get_worker_bitset(),
        inner_outer_dims()
    ]
    fp_data = b''.join(data_list)
    size_and_index = ((7 & 4) << 5) | (31 & len(data_list))
    return bytes([size_and_index]) + fp_data
