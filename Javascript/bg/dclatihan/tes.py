def hitung_nama(daftar_nama):
    jumlah_nama = {}
    for nama in daftar_nama:
        jumlah_nama[nama] = jumlah_nama.get(nama, 0) + 1
    return jumlah_nama

daftar_nama = """
UTHMJ 7NIA2 AYANH YPGKN UTHMJ 9Haz4 referal 9Haz4 L4uL5 9Haz4
UTHMJ jH4m2 9Haz4 9Haz4 DiL4h DiL4h dilla1998 9hAz4 dilla1998 9Haz4
9Haz4 DiL4h 9Haz4 jH4m2 9Haz4 9Haz4 UTHMJ 9Haz4 9Haz4 9Haz4 9Haz4
9hAz4 DiL4h 9Haz4 DiL4h DiL4h DiL4h DiL4h DiL4h DiL4h DiL4h DiL4h
DiL4h L4ul5 LKMAN jH4m2 LKMAN L4ul5 LKMAN jH4m2 L4ul5 L4ul5 LKMAN
L4Ul5 L4Ul5 jH4m2 jH4m2 jH4m2 jH4m2 jH4m2 jH4m2 jH4m2 JH4M2 jH4m2
jH4m2 jH4m2 jH4m2 jH4m2 JH4M2 010108 jH4m2 JH4m2 jH4m2 jH4m2 JH4MZ
jH4m2 LVAEE JH4m2 jH4m2 jH4m2 LVAE LVAEE jH4m2 jH4m2 jH4m2 jH4m2
jH4m2 jH4m2 jH4m2 jH4m2 jH4m2 jH4m2 jH4m2 LVAEE JH4m2 jH4M2 LVAEE
jH4m2 LVAEE jH4M2 9Haz4 JH4M2 jH4n2 jH4m2 LVAEE jH4m2 jHAm2 jHm42
L4ul5 jH4m2 jH4m2 jH4m2 jH4m2 jH4m2 L4lu5 L4ul5 012345 9Haz4 L4ul5
LVAEE LVAEE LVAEE LVAEE LVAEE LVAEE LVAEE LVAEE LVAEE 9Haz4 L4ul5
9Haz4 9Haz4 hendra14 9Haz4 LVAEE 9Haz4 9Haz4 9Haz4 9Haz4 9Haz4 9Haz4
9Haz4 9Haz4 SKXKV SKXKV SKXKV ADRIF BLRCF BLRCF
""".split()

hasil_hitung = hitung_nama(daftar_nama)
for nama, jumlah in hasil_hitung.items():
    print(f"{nama}' disebutkan  {jumlah} kali.")
