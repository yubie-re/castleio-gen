import math

def is_var_numerical(n):
    """Check if the variable 'n' is of type int or float."""
    return isinstance(n, (int, float))

# Maximum value for a 16-bit unsigned integer
MAX_UINT16 = 65535

class CustomFloat:
    """
    A class to represent a custom floating-point encoding with specified
    numbers of exponent and mantissa bits.
    """
    def __init__(self, exp_bits, man_bits):
        """
        Initialize the CustomFloat with a given number of exponent and mantissa bits.
        """
        self.exp = exp_bits  # Number of bits for exponent
        self.man = man_bits  # Number of bits for mantissa
        self.a = (1 << exp_bits) - 1  # Maximum value for exponent bits
        self.b = (1 << man_bits) - 1  # Maximum value for mantissa bits

    def e(self, n):
        """
        Encode a numerical value 'n' into the custom floating-point representation.
        """
        def decompose(n):
            """
            Decompose the number into sign, mantissa, and exponent components.
            """
            base = 2
            sign = 0  # 0 for positive, 1 for negative
            exponent = 0
            if n == 0:
                return {'s': 0, 'm': 0, 'e': 0}
            if n < 0:
                sign = 1
                n = -n
            # Normalize the number to be in [1, 2)
            while base <= n:
                n /= base
                exponent += 1
            while n < 1:
                n *= base
                exponent -= 1
            return {'s': sign, 'm': n, 'e': exponent}

        components = decompose(n)
        exponent = components['e']
        # Limit exponent to maximum value allowed
        exponent = min(exponent, (1 << self.exp) - 1)
        mantissa = components['m']

        def get_mantissa_bits(mantissa, man_bits):
            """
            Convert the fractional part of the mantissa into binary bits.
            """
            fractional_part = mantissa - math.floor(mantissa)
            mantissa_bits = 0
            if fractional_part > 0:
                position = 1
                temp = fractional_part
                while temp != 0 and position <= man_bits:
                    temp *= 2
                    bit = math.floor(temp)
                    mantissa_bits |= int(bit) << (man_bits - position)
                    temp -= bit
                    position += 1
            return mantissa_bits

        mantissa_bits = get_mantissa_bits(mantissa, self.man)
        # Combine exponent and mantissa bits into one integer
        encoded_value = (exponent << self.man) | mantissa_bits
        return encoded_value

    def d(self, n):
        """
        Decode the custom floating-point representation back into a numerical value.
        """
        # Extract exponent bits
        exponent = (n >> self.man) & self.a
        # Extract mantissa bits
        mantissa_bits = n & self.b
        # Calculate the original value
        value = (mantissa_bits / (2 ** self.man) + 1) * (2 ** exponent)
        return value