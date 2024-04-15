from collections import Counter

# Teks yang diberikan
text = """
"""

# Membagi teks menjadi baris-baris dan membersihkannya dari karakter non-alfanumerik
lines = [line.strip().lower() for line in text.split('\n') if line.strip()]

# Menghitung kemunculan masing-masing string
counter = Counter(lines)

# Memfilter hanya yang memiliki lebih dari satu kemunculan
duplicates = {item: count for item, count in counter.items() if count > 1}

print("Jumlah duplikat yang ditemukan:", len(duplicates))
print("Duplikat yang ditemukan:")
for item, count in duplicates.items():
    print(f"{item}: {count} kali")
