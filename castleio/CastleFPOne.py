from datetime import datetime
import math
import pytz
from .CastleEncoding import *

FP_PLATFORM_ENUM = 0
FP_VENDOR_ENUM = 1
FP_LANGUAGE = 2
FP_DEVICE_MEMORY = 3
FP_SCREEN_DIMS = 4
FP_SCREEN_DEPTH = 5
FP_HARDWARE_CONCURRENCY = 6
FP_SCREEN_PIXEL_RATIO = 7
FP_TIMEZONE_VS_DST = 8
FP_MIME_TYPES_HASH = 9
FP_PLUGINS_HASH = 10
FP_BROWSER_FEATURES_BITFIELD = 11
FP_USER_AGENT = 12
FP_FONT_RENDER_HASH = 13
FP_MEDIA_INPUT_AVAILABLE_BITFIELD = 14
FP_DO_NOT_TRACK_PREFERENCE = 15
FP_JAVA_ENABLED = 16
FP_PRODUCT_SUB_ENUM = 17
FP_CIRCLE_RENDER_HASH = 18
FP_GRAPHICS_CARD = 19
FP_EPOCH_LOCALE_STR = 20
FP_WEBDRIVER_DETECTION_FLAGS = 21
FP_EVAL_TO_STRING_LENGTH = 22
FP_NAVIGATOR_BUILD_ID = 23
FP_MAX_RECURSION_LIMIT = 24
FP_MAX_RECURSION_LIMIT_ERROR_MESSAGE_ENUM = 25
FP_MAX_RECURSION_LIMIT_ERROR_NAME_ENUM = 26
FP_RECURSION_STACK_TRACE_STRLEN = 27
FP_TOUCH_METRIC_DATA = 28
FP_UNDEFINED_CALL_ERR_ENUM = 29
FP_NAVIGATOR_PROPERTIES_HASH = 30
FP_CODEC_PLAYABILITY_BITFIELD = 31

FP_INFO_SIZES = {
    FP_PLATFORM_ENUM: 2,
    FP_VENDOR_ENUM: 2,
    FP_LANGUAGE: 7,
    FP_SCREEN_DIMS: 7,
    FP_SCREEN_DEPTH: 2,
    FP_HARDWARE_CONCURRENCY: 2,
    FP_SCREEN_PIXEL_RATIO: 2,
    FP_TIMEZONE_VS_DST: 3,
    FP_MIME_TYPES_HASH: 6,
    FP_PLUGINS_HASH: 6,
    FP_BROWSER_FEATURES_BITFIELD: 4,
    FP_USER_AGENT: 83,
    FP_FONT_RENDER_HASH: 10,
    FP_MEDIA_INPUT_AVAILABLE_BITFIELD: 3,
    FP_DO_NOT_TRACK_PREFERENCE: 1,
    FP_PRODUCT_SUB_ENUM: 2,
    FP_CIRCLE_RENDER_HASH: 10,
    FP_GRAPHICS_CARD: 77,
    FP_EPOCH_LOCALE_STR: 24,
    FP_WEBDRIVER_DETECTION_FLAGS: 3,
    FP_EVAL_TO_STRING_LENGTH: 2,
    FP_NAVIGATOR_BUILD_ID: 2,
    FP_MAX_RECURSION_LIMIT: 3,
    FP_MAX_RECURSION_LIMIT_ERROR_MESSAGE_ENUM: 2,
    FP_MAX_RECURSION_LIMIT_ERROR_NAME_ENUM: 2,
    FP_RECURSION_STACK_TRACE_STRLEN: 3,
    FP_TOUCH_METRIC_DATA: 2,
    FP_UNDEFINED_CALL_ERR_ENUM: 2,
    FP_NAVIGATOR_PROPERTIES_HASH: 6,
    FP_CODEC_PLAYABILITY_BITFIELD: 3
}

def get_platform_id() -> bytes:
    return process_fp_value(FP_PLATFORM_ENUM, B2H, 1)  # Win32

def get_vendor_id() -> bytes:
    return process_fp_value(FP_VENDOR_ENUM, B2H, 0)  # Google, Inc

def get_language(language: str) -> bytes:
    return process_fp_value(FP_LANGUAGE, SERIALIZED_BYTE_ARRAY, language.encode())

def get_device_memory() -> bytes:
    return process_fp_value(FP_DEVICE_MEMORY, B2H_ROUNDED, 80)

def get_screen_dims(screen_dimensions_px_x: int, screen_dimensions_px_y: int, browser_window_dimensions_px_x: int, browser_window_dimensions_px_y: int) -> bytes:
    return process_fp_value(FP_SCREEN_DIMS, JUST_APPEND, values_to_bytes(screen_dimensions_px_x, browser_window_dimensions_px_x) + values_to_bytes(screen_dimensions_px_y, browser_window_dimensions_px_y))

def get_screen_depth() -> bytes:
    return process_fp_value(FP_SCREEN_DEPTH, B2H_WITH_CHECKS, 24)

def get_hardware_concurrency() -> bytes:
    return process_fp_value(FP_HARDWARE_CONCURRENCY, B2H_WITH_CHECKS, 24)

def get_screen_pixel_ratio() -> bytes:
    return process_fp_value(FP_SCREEN_PIXEL_RATIO, B2H_ROUNDED, 10)

def get_time_zone_diff(timezone) -> bytes:
    tz = pytz.timezone(timezone)
    current_time = datetime.now()
    naive_current_time = current_time.replace(tzinfo=None)
    current_offset_minutes = -tz.utcoffset(naive_current_time).total_seconds() / 60
    jan_1 = datetime(current_time.year, 1, 1)
    naive_jan_1 = jan_1.replace(tzinfo=None)
    jan_offset = -tz.utcoffset(naive_jan_1).total_seconds() / 60
    jul_1 = datetime(current_time.year, 7, 1)
    naive_jul_1 = jul_1.replace(tzinfo=None)
    jul_offset = -tz.utcoffset(naive_jul_1).total_seconds() / 60
    abs_diff = abs(jan_offset - jul_offset)
    e = bytes([math.floor(current_offset_minutes / 15), math.floor(abs_diff / 15)])
    return process_fp_value(FP_TIMEZONE_VS_DST, JUST_APPEND, e)

def get_mime_types_hash() -> bytes:
    return process_fp_value(FP_MIME_TYPES_HASH, JUST_APPEND, bytes([0x02, 0x7d, 0x5f, 0xc9, 0xa7]))

def get_plugins_hash() -> bytes:
    return process_fp_value(FP_PLUGINS_HASH, JUST_APPEND, bytes([0x05, 0x72, 0x93, 0x02, 0x08]))

def get_browser_features() -> bytes:
    bitfield_size = bytes([12])
    bitfield = encode_bits_to_bytes([0, 1, 2, 3, 4, 5, 6], 16)
    return process_fp_value(FP_BROWSER_FEATURES_BITFIELD, JUST_APPEND, bitfield_size + bitfield)

def get_user_agent(user_agent: str) -> bytes:
    user_agent = user_agent.encode()
    out = bytes([1])  # Data Length Size
    out += bytes([len(user_agent)])  # Data Length
    out += user_agent
    return process_fp_value(FP_USER_AGENT, JUST_APPEND, out)

def get_font_render_hash() -> bytes:
    return process_fp_value(FP_FONT_RENDER_HASH, SERIALIZED_BYTE_ARRAY, b'54b4b5cf')

def get_media_input_bitfield() -> bytes:
    bitfield_size = bytes([3])
    bitfield = encode_bits_to_bytes([0, 1, 2], 8)
    return process_fp_value(FP_MEDIA_INPUT_AVAILABLE_BITFIELD, JUST_APPEND, bitfield_size + bitfield)

def get_do_not_track_preference() -> bytes:
    return process_fp_value(FP_DO_NOT_TRACK_PREFERENCE, EMPTY_VALUE, 0)

def get_java_enabled() -> bytes:
    return process_fp_value(FP_JAVA_ENABLED, EMPTY_VALUE, 0)

def get_product_sum() -> bytes:
    return process_fp_value(FP_PRODUCT_SUB_ENUM, B2H, 0)

def get_circle_hash() -> bytes:
    return process_fp_value(FP_CIRCLE_RENDER_HASH, SERIALIZED_BYTE_ARRAY, b'c6749e76')

def get_gpu(gpu_name: str) -> bytes:
    return process_fp_value(FP_GRAPHICS_CARD, SERIALIZED_BYTE_ARRAY, gpu_name.encode())

def get_epoch_str() -> bytes:
    epoch = b'12/31/1969, 7:00:00 PM'
    return process_fp_value(FP_EPOCH_LOCALE_STR, SERIALIZED_BYTE_ARRAY, epoch)

def get_driver_detection_flags() -> bytes:
    bitfield_size = bytes([8])
    bitfield = encode_bits_to_bytes([], 8)
    return process_fp_value(FP_WEBDRIVER_DETECTION_FLAGS, JUST_APPEND, bitfield_size + bitfield)

def get_eval_string_length() -> bytes:
    return process_fp_value(FP_EVAL_TO_STRING_LENGTH, B2H_WITH_CHECKS, 33)

def get_navigator_build_id() -> bytes:
    return process_fp_value(FP_NAVIGATOR_BUILD_ID, B2H, 0)

def get_recursion_limit() -> bytes:
    return process_fp_value(FP_MAX_RECURSION_LIMIT, B2H_WITH_CHECKS, 12549)

def get_max_recursion_limit_error_message() -> bytes:
    return process_fp_value(FP_MAX_RECURSION_LIMIT_ERROR_MESSAGE_ENUM, B2H, 0)

def get_max_recursion_limit_error_name() -> bytes:
    return process_fp_value(FP_MAX_RECURSION_LIMIT_ERROR_NAME_ENUM, B2H, 1)

def get_recursion_limit_stack_trace_strlen() -> bytes:
    return process_fp_value(FP_RECURSION_STACK_TRACE_STRLEN, B2H_WITH_CHECKS, 4644)

def get_touch_metric_data() -> bytes:
    return process_fp_value(FP_TOUCH_METRIC_DATA, JUST_APPEND, b'\x00')

def get_undefined_call_err() -> bytes:
    return process_fp_value(FP_UNDEFINED_CALL_ERR_ENUM, B2H, 3)

def get_navigator_properties_hash() -> bytes:
    return process_fp_value(FP_NAVIGATOR_PROPERTIES_HASH, JUST_APPEND, bytes([0x5d, 0xc5, 0xab, 0xb5, 0x88]))

CODEC_NOT_PLAYABLE = 0
CODEC_PARTIALLY_PLAYABLE = 1
CODEC_PLAYABLE = 2
CODEC_UNK = 3

def encode_playability(webm, mp4, ogg, aac, xm4a, wav, mpeg, ogg2):
    codec_results = [webm, mp4, ogg, aac, xm4a, wav, mpeg, ogg2]
    binary_segments = [format(result, '02b') for result in codec_results]
    binary_string = ''.join(binary_segments)
    playability_integer = int(binary_string, 2)
    return playability_integer.to_bytes(2, 'big')

def get_codec_playability() -> bytes:
    out = encode_playability(CODEC_PLAYABLE, CODEC_PLAYABLE, CODEC_NOT_PLAYABLE, CODEC_PLAYABLE,
                             CODEC_PARTIALLY_PLAYABLE, CODEC_PLAYABLE, CODEC_PLAYABLE, CODEC_PLAYABLE)
    return process_fp_value(FP_CODEC_PLAYABILITY_BITFIELD, JUST_APPEND, out)

def get_fp_one(
        user_agent: str,
        language: str,
        screen_dimensions_px_x: int,
        screen_dimensions_px_y: int,
        screen_avail_dimensions_px_x: int,
        screen_avail_dimensions_px_y: int,
        gpu_name: str,
        timezone: str):
    fp = [
        get_platform_id(),
        get_vendor_id(),
        get_language(language),
        get_device_memory(),
        get_screen_dims(screen_dimensions_px_x, screen_dimensions_px_y,
                        screen_avail_dimensions_px_x, screen_avail_dimensions_px_y),
        get_screen_depth(),
        get_hardware_concurrency(),
        get_screen_pixel_ratio(),
        get_time_zone_diff(timezone),
        get_mime_types_hash(),
        get_plugins_hash(),
        get_browser_features(),
        get_user_agent(user_agent),
        get_font_render_hash(),
        get_media_input_bitfield(),
        get_product_sum(),
        get_circle_hash(),
        get_gpu(gpu_name),
        get_epoch_str(),
        get_driver_detection_flags(),
        get_eval_string_length(),
        get_recursion_limit(),
        get_max_recursion_limit_error_message(),
        get_max_recursion_limit_error_name(),
        get_recursion_limit_stack_trace_strlen(),
        get_touch_metric_data(),
        get_undefined_call_err(),
        get_navigator_properties_hash(),
        get_codec_playability()
    ]
    fp_data = b''.join(fp)
    size_and_index = ((7 & 0) << 5) | (31 & len(fp))
    return bytes([size_and_index]) + fp_data