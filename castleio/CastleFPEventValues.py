import random
from .CastleCustomFloat import CustomFloat
from .CastleEncoding import bool_array_to_binary

def encode_value(value):
    n  = max(value, 0)
    if n <= 15:
        encoded_byte = 64 | CustomFloat(2, 4).e(n + 1)
    else:
        encoded_byte = 128 | CustomFloat(4, 3).e(n - 14)
    return encoded_byte

def get_float_values():
    random.seed()
    float_list = [
        random.uniform(40, 50), # DataPoint_Mouse_AngleVector_500 (index 0)
        -1, # DataPoint_Touch_AngleVector (index 1)
        random.uniform(70, 80), # DataPoint_Key_KeysSameTimeDiff_1000 (index 2)
        -1, # DataPoint_Key_TimeDiff_SpecialKey_Up (index 3)
        random.uniform(60, 70), # DataPoint_Mouse_TimeDiff_MouseDownUp (index 4)
        -1, # DataPoint_Mouse_TimeDifference_Threshold500 (index 5)
        0, # DataPoint_Mouse_Click_TimeDiff (median) (index 6)
        0, # DataPoint_Mouse_Click_TimeDiff (deviation) (index 7)
        random.uniform(60, 80), # DataPoint_Mouse_TimeDiff_MouseDownUp (median) (index 8)
        random.uniform(5, 10), # DataPoint_Mouse_TimeDiff_MouseDownUp (deviation) (index 9)
        random.uniform(30, 40), # DataPoint_Key_TimmeDiff_ClickDown (median) (index 10)
        random.uniform(2, 5), # DataPoint_Key_TimmeDiff_ClickDown (deviation) (index 11)
        -1, # DataPoint_Key_TimeDiff_SpecialKey_Down (index 12)
        -1, # DataPoint_Key_TimeDiff_SpecialKey_Down (index 13)
        -1, # DataPoint_Key_TimeDiff_SpecialKey_Up (index 14)
        -1, # DataPoint_Key_TimeDiff_SpecialKey_Up (index 15)
        -1, # DataPoint_Key_TimeDiff_SpecialKey_DownUp (index 16)
        -1, # DataPoint_Key_TimeDiff_SpecialKey_DownUp (index 17)
        -1, # DataPoint_Key_TimeDiff_SpecialKey_UpDown (index 18)
        -1, # DataPoint_Key_TimeDiff_SpecialKey_UpDown (index 19)
        random.uniform(150, 180), # DataPoint_Mouse_VectorAngle (index 20)
        random.uniform(3, 6),  # DataPoint_Mouse_VectorAngle (index 21)
        random.uniform(150, 180), # DataPoint_Mouse_VectorAngle_500 (index 22)
        random.uniform(3, 6), # DataPoint_Mouse_VectorAngle_500 (index 23)
        random.uniform(0, 2),  # DataPoint_Mouse_Deviation (index 24)
        random.uniform(0, 2), # DataPoint_Mouse_Deviation (index 25)
        0, # DataPoint_Mouse_Deviation (index 26)
        0, # DataPoint_Mouse_Deviation (index 27)
        -1, # DataPoint_Touch_Sequential_TimeDiff (index 28)
        -1, # DataPoint_Touch_Sequential_TimeDiff (index 29)
        -1, # DataPoint_Touch_TimeDiff_StartEndCancel (index 30)
        -1, # DataPoint_Touch_TimeDiff_StartEndCancel (index 31)
        0, # DataPoint_KeyTimeDiff_LetterDigit (index 32)
        0, # DataPoint_KeyTimeDiff_LetterDigit (index 33)
        0, # DataPoint_KeyTimeDiff_DigitInvalid (index 34)
        0, # DataPoint_KeyTimeDiff_DigitInvalid (index 35)
        0, # DataPoint_KeyTimeDiff_DoubleInvalid (index 36)
        0, # DataPoint_KeyTimeDiff_DoubleInvalid (index 37)
        1.0, # DataPointMouseVectorDiffMedian (index 38)
        0, # DataPointMouseVectorDiffDeviation (index 39)
        1.0, # DataPoint_mouse_VectorDiff_Median (index 40)
        0, # DataPoint_mouse_VectorDiff_Deviation (index 41)
        random.uniform(0, 4), # DataPoint_Mouse_VectorDiff_Threshold500 (index 42)
        random.uniform(0, 3), # DataPoint_Mouse_VectorDiff_Threshold500 (index 43)
        random.uniform(25, 50), # DataPoint_mouse_TimeDiff_Rounded (index 44)
        random.uniform(25, 50), # DataPoint_mouse_TimeDiff_Rounded (index 45)
        random.uniform(25, 50), # DataPoint_mouse_VectorDiff_Rounded (index 46)
        random.uniform(25, 30), # DataPoint_mouse_VectorDiff_Rounded (index 47)
        random.uniform(0, 2), # DataPoint_mouse_ChangeSpeed (index 48)
        random.uniform(0, 1), # DataPoint_mouse_ChangeSpeed (index 49)
        random.uniform(0, 1), # DataPoint_Mouse_VectorDiff_Threshold500(index 50)
        1, # DataPoint_Universal (index 51)
        0, # DataPoint_Universal (index 52)
    ]

    out_fp = bytes()

    for value in float_list:
        # Use the CustomFloat class to encode the value
        if value != -1:
            encoded_value = encode_value(value)
            out_fp += bytes([encoded_value])
        else:
            out_fp += bytes([0])
    return out_fp

def get_event_ints() -> bytes:
    int_values = [
        random.randrange(100,200), # EVENT_MMOUSEMOVE 0
        random.randrange(1, 5), # EVENT_KEYUP 1 
        random.randrange(1, 5), # EVENT_CLICK 2
        0, # EVENT_TOUCHSTART 3 
        random.randrange(0, 5), # EVENT_KEYDOWN 4
        0, # EVENT_TOUCHMOVE 5
        0, # EVENT_MOUSEDOWN - EVENT_MOUSEUP 6 
        0, # DataPoint_mouse_VectorDiff_Rounded 7
        random.randrange(0, 5), # WheelDataPointCounter 8
        random.randrange(0, 11), # unk1
        random.randrange(0, 1), # unk2
    ]
    return bytes(int_values) + len(int_values).to_bytes()

def get_bitfield() -> bytes:
    # bit 0 = 0 < DataPoint_Mouse_TimeDiff_KeyDownUp_1000.G.p
    # bit 1 = IsTouchDevice
    # bit 2= EVENT_CLICK > 0
    # bit 3= KeyDownCount > 0
    # bit 4 = device motion stuff
    # bit 5 = BackspaceCount
    # bit 6 = NotTouchCount
    # bit 7 = unk
    bit_array = [False] * 12  # Create a 16-bit array initialized to False
    bit_array[2] = True
    bit_array[5] = True
    binary_num = bool_array_to_binary(bit_array, 12)
    encoded_num = ((4 << 12) | (4095 & binary_num))
    return bytes([encoded_num >> 8, encoded_num & 0xFF, 0])

def get_fp_event_values():
    return get_bitfield() + get_float_values() + get_event_ints()