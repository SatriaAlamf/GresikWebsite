# 📸 Panduan Menambahkan Gambar Makanan

## 📁 Struktur Folder

Letakkan gambar makanan di folder ini:
```
public/
└── images/
    └── makanan/
        ├── pudak.jpg
        ├── legen.jpg
        ├── nasi-krawu.jpg
        ├── sego-menir.jpg
        ├── otak-otak-bandeng.jpg
        ├── pecel-semanggi.jpg
        ├── bonggolan.jpg
        ├── sego-roomo.jpg
        └── soto-gresik.jpg
```

## 🎯 Nama File yang Sesuai dengan ID

Setiap gambar harus diberi nama sesuai dengan `id` makanan di `data/makanan.ts`:

| ID Makanan | Nama File | Nama Makanan |
|------------|-----------|--------------|
| pudak | pudak.jpg | Pudak |
| legen | legen.jpg | Legen |
| nasi-krawu | nasi-krawu.jpg | Nasi Krawu |
| sego-menir | sego-menir.jpg | Sego Menir |
| otak-otak-bandeng | otak-otak-bandeng.jpg | Otak-Otak Bandeng |
| pecel-semanggi | pecel-semanggi.jpg | Pecel Semanggi |
| bonggolan | bonggolan.jpg | Bonggolan |
| sego-roomo | sego-roomo.jpg | Sego Roomo |
| soto-gresik | soto-gresik.jpg | Soto Gresik |

## 📐 Spesifikasi Gambar

### Resolusi & Format
- **Format:** JPG, PNG, atau WebP
- **Resolusi:** Minimum 800x800 px (Square/Kotak)
- **Aspect Ratio:** 1:1 (persegi) - PENTING!
- **File Size:** Maksimal 500 KB per gambar

### Kualitas
- **Pencahayaan:** Terang dan jelas
- **Background:** Bersih, preferably solid color atau blur
- **Focus:** Makanan harus jadi fokus utama
- **Angle:** Top-down (dari atas) atau 45 derajat

## 🔧 Cara Menggunakan Gambar di Code

### 1. Update Data Makanan

Edit file `data/makanan.ts` dan tambahkan property `image`:

```typescript
{
  id: "pudak",
  name: "Pudak",
  image: "/images/makanan/pudak.jpg",  // ← Tambahkan ini
  description: "...",
  // ... data lainnya
}
```

### 2. Contoh Data Lengkap

```typescript
export const makananData: MakananItem[] = [
  {
    id: "pudak",
    name: "Pudak",
    image: "/images/makanan/pudak.jpg",
    description: "Kue tradisional khas Gresik...",
    origin: "Gresik Kota",
    category: "Manis",
    popularity: 95,
    story: "Pudak telah menjadi ikon kuliner...",
    ingredients: ["Kelapa muda", "Gula merah", "Tepung beras", "Garam"],
    servingStyle: "Dibungkus daun kelapa atau plastik...",
  },
  {
    id: "legen",
    name: "Legen",
    image: "/images/makanan/legen.jpg",
    description: "Minuman tradisional dari nira...",
    // ... data lainnya
  },
  // ... makanan lainnya
];
```

### 3. Gambar Otomatis Muncul

Setelah menambahkan property `image` di data, gambar akan otomatis muncul di halaman makanan menggantikan icon ChefHat.

## 🎨 Tips Mengambil/Edit Gambar

### Sumber Gambar
1. **Foto Sendiri** - Paling autentik! Foto langsung makanan asli Gresik
2. **Unsplash** - https://unsplash.com (Free, high quality)
3. **Pexels** - https://pexels.com (Free stock photos)
4. **Google Images** - Filter "Usage Rights" > "Creative Commons"

### Editing
- **Crop to Square:** Gunakan tool online seperti:
  - https://www.iloveimg.com/crop-image
  - https://www.canva.com (Free account)
- **Compress:** Kurangi file size tanpa hilang kualitas:
  - https://tinypng.com
  - https://squoosh.app

### Contoh Good vs Bad

✅ **GOOD:**
- Gambar makanan penuh frame
- Background bersih/blur
- Pencahayaan bagus
- Square 1:1 ratio
- File size < 500 KB

❌ **BAD:**
- Makanan kecil di gambar
- Background berantakan
- Gelap/underexposed
- Rectangular/portrait
- File size > 1 MB

## 🍽️ Deskripsi Makanan untuk Pencarian Gambar

Gunakan keywords ini saat mencari gambar:

1. **Pudak** - "kue pudak gresik", "traditional coconut cake"
2. **Legen** - "legen drink", "palm wine fresh", "nira kelapa"
3. **Nasi Krawu** - "nasi krawu gresik", "indonesian rice beef"
4. **Sego Menir** - "nasi menir", "broken rice indonesia", "simple indonesian rice"
5. **Otak-Otak Bandeng** - "otak otak bandeng", "stuffed milkfish"
6. **Pecel Semanggi** - "pecel semanggi", "clover salad indonesia"
7. **Bonggolan** - "bonggolan snack", "fried rice ball indonesia"
8. **Sego Roomo** - "nasi ikan tongkol", "indonesian rice tuna"
9. **Soto Gresik** - "soto gresik", "clear chicken soup indonesia"

## 🚀 Testing

Setelah menambahkan gambar:

1. Refresh browser (Ctrl + Shift + R)
2. Cek apakah gambar muncul di tempat icon ChefHat
3. Hover gambar untuk lihat animasi scale
4. Pastikan tidak ada broken image

## 📝 Checklist

- [ ] Semua gambar format square (1:1)
- [ ] Resolusi minimum 800x800px
- [ ] File size < 500 KB
- [ ] Nama file sesuai ID makanan
- [ ] Update `data/makanan.ts` dengan property `image`
- [ ] Test di browser

## 🎭 Fallback System

Jika gambar belum tersedia, system akan otomatis menampilkan icon ChefHat sebagai fallback! Jadi tidak perlu khawatir jika belum semua gambar siap.

```tsx
{item.image ? (
  <img src={item.image} alt={item.name} />
) : (
  <ChefHat /> // Fallback icon
)}
```

---

**Status Gambar Saat Ini:**
- ✅ pudak.jpg - Tersedia
- ⏳ Makanan lainnya - Menunggu upload

**Note:** Prioritaskan foto makanan yang paling populer terlebih dahulu (Pudak, Legen, Nasi Krawu, Sego Menir)! �

