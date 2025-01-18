from .CastleEncoding import *
import random
import datetime
FP3_PLATFORM_ENUM  = 0, #Requires dwWorker, not sending
FP3_PLATFORM_VERSION = 1 #Requires dwWorker, not sending
FP3_BROWSER_TYPE_ENUM = 2 #Requires dwWorker, not sending
FP3_TIME_SINCE_WINDOW_OPEN = 3
FP3_CASTLE_INIT_TIME_MINUTES = 4



FP3_INFO_SIZES = {
}

def time_since_window_open(init_time) -> bytes:
    time_since_castle = datetime.datetime.now().timestamp() - init_time / 1000
    return process_fp_value(FP3_TIME_SINCE_WINDOW_OPEN, B2H_WITH_CHECKS, random.randint(1,10)) 

def time_since_castle_init_minutes(init_time : int) -> bytes:
    return process_fp_value(FP3_CASTLE_INIT_TIME_MINUTES, B2H_WITH_CHECKS, int(datetime.datetime.now().timestamp() / 60 - init_time / 60000))

def get_fp_three(init_time : int):
    data_list = [time_since_window_open(init_time), time_since_castle_init_minutes(init_time)]
    fp_data = b''.join(data_list)
    size_and_index = ((7 & 7) << 5) | (31 & len(data_list))
    return bytes([size_and_index]) + fp_data
