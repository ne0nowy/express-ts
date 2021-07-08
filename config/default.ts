/**
 * This is a sample file with the completed environment variables.
 * Remember to change the RSA key (accessTokenPrivateKey) before using this code in production.
 */

export default {
    port: 2137,
    host: 'localhost',

    // MongoDB
    dbUri: 'mongodb://localhost:27017/express-ts',

    // Bcrypt Password
    passwordSalt: 10,

    // JsonWebToken
    accessTokenExpirationTime: '15m',
    refreshTokenExpirationTime: '1y',
    accessTokenPrivateKey: `-----BEGIN RSA PRIVATE KEY-----
    Proc-Type: 4,ENCRYPTED
    DEK-Info: AES-128-CBC,1CA5BD673D103DBE1D9CF276C8FAE3D1

    wQlI+TuM5ShIGHFTqnbouhuf+apYUzS267zrrxLAeW24HZMbZWZiYRXOfgSKUs2s
    rbGIPXSe91PpfqqIks5og7gZgQESjW6DRY79lEbQH+qWYoytRVLlTat/Ra7USuaP
    nYNowX/heaTtqevTR6MsLjKMyvaLepDQCymb1TIgiBt33RakcSXoCsooskx6ijXL
    lOGqHyDn/CCE6iLhbV1dbsWNRCkloTBsR/L1kGbNkTmdZWAaxwlfdy018daQlgwf
    ZkzEGTYVYJ59rn+QWf5T4ywNfI8F61wjZB92ljXByw8WUzAgkOmk9tE1C3AwTEEl
    zErpZ/OPxYvQMjGdbFI3Mul3lqAEsb3rvuAbD4PWQoW/NaLOGO1ZTMVUrm3t3N7x
    eQnaQGt46JbJy14TVjY28dHOuSUBEQNwv8B8Nx+3lWM8GtsdPQ9fZoDDzG/iB4kU
    0Va2tyzmARHHKk8n8GHk1U7Vewc98Z5DBffRg+wIejnuhfl1q70RCn0m4uWJjeMl
    rQzT6S8oImzuhH7Dj8S54K4XomChnjBWwU9aRX7kNJjFYh1DUF3xsNIQ1lt/UF+F
    QS2NaaPeC96lzry4iYnepv8+fzSRTbfoloLguP7YVxECn3ws0DZQVnVl0QutT/zD
    qrw9NoXzjAyAcKZsib52OSwdNm+LzTsng1Q0E8ReEAGJzkNdZz7CeStFtN/yn6F/
    gPmPFs3BZvrO20b7A0qxilZbD8DSKaljwrhrL9PidtVdMiNf4HeoJatkcN5nJ/ee
    GkWRjvqz50Kk0/RVZ5tGqQlTi44wHOtKNsdzjCpgt5x8oczZ5phu/4Tfv099T9CI
    aOtjYJBFVP4VHcKOoTjgrI2ceaFHN1iZLl8+ecwbgPHeFJg5PMDCVd6TAEa+EF78
    wIc/cZP/Ax9tWAWKxR4pYqkIyNksx7AIMVXx2YjXsCrf23/DmmS5ODa+IaqqOVxn
    rA90GUnmYwHEpOU4cbwaWdg7TAZkebdh1I375gb0kJhkY+Wbr20pSSGTP3T5xr+h
    U1dluaAGpIy/A4ubmeTG+VTH/B8SZTCvOwUjUu+uYJ8GgdTzTc5pNPvqQzAbavq4
    amANbS0bVaOh/t2NMFeHm83pJ3hFXN0x/MmqTROT68WKQtzMhTp2bJfuGwnIJ0S8
    LDoXhtU7dg8kNajfyemq59KhYGQUxt3+Yf6zNPlQs6gIsJN6JTdZ/TeY3QnfRuUa
    cLwljRfDBDpbWObyAMfexbb1F2xbHh8r02bcqI5sKOEjQo6HeTGVmjF+aIvflBAE
    8eyIS+ksOJEIoG7eiyvbBP2xIS75foT4T/FKDSX5jb5o2lhqUbRKcC2L/vDMphXs
    EorFCU4FQh09KV809PPVg2xxC3PJZHiCDduwAah3qGKpbBu4v7gXsVkF87odvyqK
    yo7w+zyaaiwkdJRH3S3mod11PKHw1iAL12CZjCAcnORZyDD3mudVQ0NCwW0ozCHu
    QTAPwa7+t+/MC64HHLFkMDrSadvP8NAHrE2Irr+4KGNGRVS3/KCeahFWhRgfV6Z/
    SbBH7+y3aYuVd4gfPozt1/VxyRv4DhGJhCdV0vyXZjn6UkwwiS1QOzzBkb0vuQtu
    -----END RSA PRIVATE KEY-----
    `,
}