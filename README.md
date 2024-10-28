# castleio-gen

## General description
This project contains a reversal and reimplementation of castle.io's fingerprinting capabilities.
With this project, you can generate a castle.io `X-Castle-Request-Token` and `__cuid`.

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