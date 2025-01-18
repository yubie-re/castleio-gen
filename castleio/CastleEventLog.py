import binascii
import random


EVENT_CLICK = 0
EVENT_COPY = 1
EVENT_CUT = 2
EVENT_PASTE = 3
EVENT_COMPOSITIONEND = 4
EVENT_FOCUS = 5
EVENT_BLUR = 6
EVENT_FOCUSIN = 7
EVENT_FULLSCREEN = 8
EVENT_SELECT = 9
EVENT_PLAY = 10
EVENT_SEEKED = 11
EVENT_VOLUMECHANGE = 12
EVENT_CONTEXTMENU = 13
EVENT_DBLCLICK = 14
EVENT_OFFLINE = 15
EVENT_ONLINE = 16
EVENT_AFTERPRINT = 17
EVENT_ANIMATIONSTART = 18
EVENT_KEYDOWN = 19
EVENT_TOUCH = 20
EVENT_MOUSEMOVE = 21
EVENT_AFK = 22
EVENT_KEYDOWN3 = 23
EVENT_VISIBILITYCHANGE = 24
EVENT_MOUSELEAVE = 25
EVENT_MOUSEENTER = 26
EVENT_RESIZE = 27

# Event Translation Map
EVENT_NAMES = {
    EVENT_CLICK: "EVENT_CLICK",
    EVENT_COPY: "EVENT_COPY",
    EVENT_CUT: "EVENT_CUT",
    EVENT_PASTE: "EVENT_PASTE",
    EVENT_COMPOSITIONEND: "EVENT_COMPOSITIONEND",
    EVENT_FOCUS: "EVENT_FOCUS",
    EVENT_BLUR: "EVENT_BLUR",
    EVENT_FOCUSIN: "EVENT_FOCUSIN",
    EVENT_FULLSCREEN: "EVENT_FULLSCREEN",
    EVENT_SELECT: "EVENT_SELECT",
    EVENT_PLAY: "EVENT_PLAY",
    EVENT_SEEKED: "EVENT_SEEKED",
    EVENT_VOLUMECHANGE: "EVENT_VOLUMECHANGE",
    EVENT_CONTEXTMENU: "EVENT_CONTEXTMENU",
    EVENT_DBLCLICK: "EVENT_DBLCLICK",
    EVENT_OFFLINE: "EVENT_OFFLINE",
    EVENT_ONLINE: "EVENT_ONLINE",
    EVENT_AFTERPRINT: "EVENT_AFTERPRINT",
    EVENT_ANIMATIONSTART: "EVENT_ANIMATIONSTART",
    EVENT_KEYDOWN: "EVENT_KEYDOWN",
    EVENT_TOUCH: "EVENT_TOUCH",
    EVENT_MOUSEMOVE: "EVENT_MOUSEMOVE",
    EVENT_AFK: "EVENT_AFK",
    EVENT_KEYDOWN3: "EVENT_KEYDOWN3",
    EVENT_VISIBILITYCHANGE: "EVENT_VISIBILITYCHANGE",
    EVENT_MOUSELEAVE: "EVENT_MOUSELEAVE",
    EVENT_MOUSEENTER: "EVENT_MOUSEENTER",
    EVENT_RESIZE: "EVENT_RESIZE",
}

EVENTLOG_INPUT_TYPES = [
    "text", "password", "email", "number", "tel", "url", "search", 
    "date", "time", "datetime-local", "month", "week", "color", "file", 
    "range", "checkbox", "radio", "submit", "reset", "button", "hidden", 
    "select-one", "select-multiple", "multiple", "textarea", "select"
]

# Python list for element names
EVENTLOG_ELEMENT_TYPES = [
    "div", "span", "p", "a", "img", "button", "input", "form", "label", 
    "select", "textarea", "ul", "ol", "li", "h1", "h2", "h3", "table", 
    "tr", "td", "th", "header", "footer", "nav", "main", "section", 
    "article", "aside", "canvas", "video", "audio", "iframe", "script", "style"
]


def generate_event_log():
    """simple_events = [EVENT_MOUSEMOVE, EVENT_ANIMATIONSTART, EVENT_MOUSELEAVE, EVENT_MOUSEENTER, EVENT_RESIZE]
    target_events = [EVENT_CLICK, EVENT_BLUR, EVENT_FOCUS]
    all_events = simple_events + target_events
    count = random.randint(30,70)
    result_arr = bytes()
    for i in range(count):
        event_id = all_events[random.randint(0, len(all_events) - 1)]
        if event_id in target_events:
            result_arr += bytes([event_id | 128])
            result_arr += bytes([63])
        else:
            result_arr += bytes([event_id])"""
    count = 37
    result_arr = binascii.unhexlify("853f56021587451380451387c6004115195601863f1915853f87c600788007c33f01191587c6007d80c60079d3c600010079c3c60001791519863f15853f87c6007387c6017e80c60178d3c60101007815d3c601010078c3c601007815874511804511")
    result_arr = b'\0' + count.to_bytes(2) + result_arr
    result_arr = len(result_arr).to_bytes(2) + result_arr
    return result_arr

