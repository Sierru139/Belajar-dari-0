Python 3.11.7 (tags/v3.11.7:fa7a6f2, Dec  4 2023, 19:24:49) [MSC v.1937 64 bit (AMD64)] on win32
Type "help", "copyright", "credits" or "license()" for more information.
>>> from collections import Counter
... 
... # Teks yang diberikan
... text = """
... """
... 
... # Membagi teks menjadi baris-baris dan membersihkannya dari karakter non-alfanumerik
... lines = [line.strip().lower() for line in text.split('\n') if line.strip()]
... 
... # Menghitung kemunculan masing-masing string
... counter = Counter(lines)
... 
... # Memfilter hanya yang memiliki lebih dari satu kemunculan
... duplicates = {item: count for item, count in counter.items() if count > 1}
... 
... print("Jumlah duplikat yang ditemukan:", len(duplicates))
... print("Duplikat yang ditemukan:")
... for item, count in duplicates.items():
