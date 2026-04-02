# Data Kesimpulan - Panduan Penggunaan

File ini berisi semua data yang ditampilkan di halaman Kesimpulan (`/kesimpulan`).

## Struktur Data

### 1. **nilaiBudayaData** - Nilai-nilai Budaya Gresik
Array dari 6 nilai budaya utama dengan properti:
- `icon`: Emoji yang merepresentasikan nilai
- `title`: Nama nilai budaya
- `desc`: Deskripsi singkat
- `color`: Gradient Tailwind CSS

**Cara Edit:**
```typescript
{
  icon: "🙏",
  title: "Religius",
  desc: "Deskripsi nilai religius...",
  color: "from-teal/20 to-forest/20"
}
```

### 2. **konflikSejarahData** - Sejarah Konflik
Array dari 4 konflik penting dengan properti:
- `tahun`: Periode terjadinya
- `judul`: Nama konflik
- `icon`: Emoji
- `deskripsi`: Penjelasan detail
- `dampak`: Array string dampak-dampak
- `pembelajaran`: Pelajaran yang didapat

### 3. **solusiData** - Solusi Transformasi
Array dari 4 solusi dengan:
- `icon`: Emoji
- `label`: Label solusi

### 4. **pernyataanData** - Pernyataan Benar/Salah
Array pernyataan untuk edukasi dengan:
- `type`: "benar" atau "salah"
- `text`: Isi pernyataan

### 5. **transformasiMessage** - Pesan Transformasi
Object dengan:
- `icon`: Emoji
- `title`: Judul
- `content`: Konten pesan

### 6. **pesanIntiData** - Pesan Inti
Object dengan:
- `title`: Judul
- `content`: Konten lengkap
- `highlight`: Teks highlight
- `icon`: Emoji

### 7. **takeawaysData** - Pembelajaran Utama
Array dari 3 takeaway dengan:
- `icon`: String nama icon ("heart", "users", "trending-up")
- `title`: Judul
- `points`: Array string poin-poin

### 8. **finalMessageData** - Pesan Penutup
Object dengan:
- `title`: Judul
- `content`: Konten pesan
- `tags`: Array hashtag
- `icon`: Emoji

## Cara Mengedit

1. Buka file `/data/kesimpulan.ts`
2. Edit data yang diinginkan
3. Save file
4. Perubahan akan otomatis muncul di halaman

## Contoh: Menambah Nilai Budaya Baru

```typescript
export const nilaiBudayaData: NilaiBudaya[] = [
  // ... existing values
  {
    icon: "🌟",
    title: "Inovasi",
    desc: "Kreativitas dan semangat berinovasi untuk kemajuan",
    color: "from-orange/20 to-yellow/20"
  }
];
```

## Contoh: Menambah Konflik Sejarah

```typescript
export const konflikSejarahData: KonflikSejarah[] = [
  // ... existing conflicts
  {
    tahun: "2020-2021",
    judul: "Konflik Baru",
    icon: "⚡",
    deskripsi: "Deskripsi konflik...",
    dampak: [
      "Dampak 1",
      "Dampak 2"
    ],
    pembelajaran: "Pembelajaran yang didapat..."
  }
];
```

## Keuntungan Menggunakan File Data

✅ Mudah dikelola dan diupdate  
✅ Tidak perlu edit kode component  
✅ Struktur data yang jelas  
✅ Type-safe dengan TypeScript  
✅ Dapat di-reuse di halaman lain jika diperlukan
