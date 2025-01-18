def xxtea_decrypt(data, key):
    def mx(z, y, sum, p, e, k):
        return (((z >> 5) ^ (y << 2)) + ((y >> 3) ^ (z << 4))) ^ ((sum ^ y) + (k[(p & 3) ^ e] ^ z))
    if len(data) < 4:
        return data  # No decryption needed for single-element arrays

    n = len(data) // 4 - 1
    v = [int.from_bytes(data[i:i + 4], 'little') for i in range(0, len(data), 4)]
    y = v[0]
    q = 6 + 52 // (n + 1)
    sum = (q * 0x9E3779B9) & 0xFFFFFFFF
    delta = 0x9E3779B9

    while sum != 0:
        e = (sum >> 2) & 3
        for p in range(n, 0, -1):
            z = v[p - 1]
            v[p] = (v[p] - mx(z, y, sum, p, e, key)) & 0xFFFFFFFF
            y = v[p]
        z = v[n]
        v[0] = (v[0] - mx(z, y, sum, 0, e, key)) & 0xFFFFFFFF
        y = v[0]
        sum = (sum - delta) & 0xFFFFFFFF

    decrypted_data = b"".join(x.to_bytes(4, 'little') for x in v)
    return decrypted_data.rstrip(b"\x00")

Ke = [2650800128, 3633152, 2489]
def xxtea_encrypt(data, key):
    def nc(n):
        return (n[0] >> const0) + (n[1] >> const0) + (n[2] >> const0)

    def to_blocks(data):
        n = (len(data) + 3) // 4
        padded_data = data.ljust(n * 4, b'\x00')
        return [int.from_bytes(padded_data[i:i + 4], 'little') for i in range(0, len(padded_data), 4)]

    r = to_blocks(data)
    u = len(r) - 1
    if u < 1:
        return data 

    const0 = 0
    i = 0
    o = r[u]
    a = r[0]
    f = 6 + 52 // (u + 1)

    while f > 0:
        f -= 1
        i = (i + nc(Ke)) & 0xFFFFFFFF
        e = (i >> 2) & 3
        for c in range(u):
            a = r[c + 1]
            o = r[c] = (r[c] + ((((o >> 5) ^ (a << 2)) + ((a >> 3) ^ (o << 4))) ^ ((i ^ a) + (key[(c & 3) ^ e] ^ o)))) & 0xFFFFFFFF
        a = r[0]
        o = r[u] = (r[u] + ((((o >> 5) ^ (a << 2)) + ((a >> 3) ^ (o << 4))) ^ ((i ^ a) + (key[(u & 3) ^ e] ^ o)))) & 0xFFFFFFFF

    encrypted_data = b"".join(block.to_bytes(4, 'little') for block in r)
    return encrypted_data