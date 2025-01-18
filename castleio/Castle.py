from .GenerateToken import *
import time
import random

class UserAgentType:
    WIN_DESKTOP_GENERIC_CHROME = "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/130.0.0.0 Safari/537.36"

# full list: https://deviceandbrowserinfo.com/data/fingerprints/attribute/webGLRenderer
class GPUType():
    NVIDIA_3090 = "ANGLE (NVIDIA, NVIDIA GeForce RTX 3090 (0x00002204) Direct3D11 vs_5_0 ps_5_0, D3D11)"
    NVIDIA_3060 = "ANGLE (NVIDIA, NVIDIA GeForce RTX 3060 (0x00002504) Direct3D11 vs_5_0 ps_5_0, D3D11)"

def current_milli_time():
    return round(time.time() * 1000)

class Config:
    """
    Creates an emulated environment config for Castle.
    """

    def __init__(
            self,
            public_key: str,
            user_agent: str = UserAgentType.WIN_DESKTOP_GENERIC_CHROME,
            language_iso_639_2: str = "en",
            language_iso_639_1: str = "en-US",
            time_zone_name: str = "America/New_York",
            screen_dimensions_px: tuple[int, int] = (1920, 1080),
            screen_avail_dimensions_px: tuple[int, int] = (1920, 1032),
            gpu: str = GPUType.NVIDIA_3060,
            init_time = current_milli_time() - random.uniform(2 * 60 * 1000, 30 * 60 * 1000)):
        self.public_key = public_key
        self.user_agent = user_agent
        self.language_iso_639_2 = language_iso_639_2
        self.language_iso_639_1 = language_iso_639_1
        self.time_zone_name = time_zone_name
        self.screen_dimensions_px = screen_dimensions_px
        self.screen_avail_dimensions_px = screen_avail_dimensions_px
        self.gpu = gpu
        self.init_time = init_time


class Build:
    def __init__(self, environment_config: Config):
        self.environment = environment_config

    def create_token(self):
        return gen_token(
            self.environment.public_key,
            self.environment.user_agent,
            self.environment.language_iso_639_2,
            self.environment.language_iso_639_1,
            self.environment.time_zone_name,
            self.environment.screen_dimensions_px,
            self.environment.screen_avail_dimensions_px,
            self.environment.gpu,
            self.environment.init_time)
