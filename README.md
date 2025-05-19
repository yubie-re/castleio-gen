# castleio-gen

## Archival Notice
Due to the widespread use of this repository among account crackers and other such malicious actors, I've decided to archive this repository. Support for V12 (2.6.2 and above) tokens will not be implemented. This project was originally intended to access castle locked APIs for research purposes, and with a little updating this can work again if you know a thing or two.

## General description
This project contains a reversal and reimplementation of castle.io's fingerprinting capabilities.
With this project, you can generate a castle.io `X-Castle-Request-Token` and `__cuid`.
This only works for sites using version 11 castle-io tokens (v2.6.0).

## Blog post
View my [writeup](https://blog.yubie.dev/blog/castleio) for some context!

Decoding a token:
```
from castleio import Castle
from castleio import DecodeToken

DecodeToken.decode_token("...") # token
```

Encoding a token:
```
from castleio import Castle
environment = Castle.Config("Insert site PK here")
castle = Castle.Build(environment)
token = castle.create_token()
```
