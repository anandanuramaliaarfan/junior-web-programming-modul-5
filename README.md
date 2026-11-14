# Ruang Niaga – Order Calculator

## Deskripsi Proyek

Ruang Niaga merupakan aplikasi kalkulator pesanan sederhana berbasis web yang dibuat untuk membantu menghitung subtotal, diskon, pajak, dan total pembayaran produk kedai kopi fiktif.

Proyek ini dikembangkan sebagai bagian dari tugas Modul 5 Junior Web Programming dengan menerapkan prinsip Clean Code dan Best Practices melalui proses refaktor kode JavaScript.

## Fitur Aplikasi

- Memilih produk yang tersedia.
- Memasukkan jumlah pesanan.
- Menghitung subtotal pembayaran.
- Menghitung diskon berdasarkan nilai pesanan.
- Menghitung pajak sebesar 11%.
- Menampilkan total pembayaran.
- Memvalidasi jumlah pesanan.

## Teknologi yang Digunakan

- HTML5
- CSS3
- JavaScript
- Visual Studio Code
- Prettier
- Git dan GitHub

## Penerapan Clean Code

Refaktor dilakukan dengan menerapkan beberapa prinsip berikut:

### 1. Descriptive Naming

Menggunakan nama variabel dan fungsi yang menjelaskan tujuan penggunaannya.

Contoh:

| Sebelum | Sesudah |
|---------|---------|
| `p` | `hargaProduk` |
| `j` | `jumlahPesanan` |
| `s` | `subtotal` |
| `d` | `diskon` |
| `pj` | `pajak` |
| `t` | `total` |
| `hitung()` | `hitungPesanan()` |

### 2. Single Responsibility Principle

Memecah fungsi yang sebelumnya mengerjakan banyak tugas menjadi beberapa fungsi kecil dengan tanggung jawab yang lebih spesifik.

Fungsi yang diterapkan:
- `hitungSubtotal()`
- `hitungDiskon()`
- `hitungPajak()`
- `hitungTotalPembayaran()`
- `formatRupiah()`
- `tampilkanHasil()`
- `hitungPesanan()`

### 3. DRY (Don't Repeat Yourself)

Memisahkan proses pemformatan mata uang ke dalam fungsi `formatRupiah()` agar dapat digunakan kembali tanpa menulis ulang logika pemformatan.

### 4. Named Constants

Mengganti angka yang sebelumnya ditulis langsung dalam logika dengan konstanta bernama.

Contoh:
- `BATAS_DISKON_BESAR`
- `BATAS_DISKON_KECIL`
- `PERSENTASE_DISKON_BESAR`
- `PERSENTASE_DISKON_KECIL`
- `PERSENTASE_PAJAK`

### 5. Code Formatting

Menggunakan Prettier untuk menjaga konsistensi indentasi, spasi, dan format penulisan kode.

### 6. Meaningful Comments

Menambahkan komentar pada bagian kode yang membutuhkan penjelasan mengenai fungsi atau logikanya.

## Perbandingan Sebelum dan Sesudah Refaktor

| Metrik | Sebelum | Sesudah |
|--------|--------:|--------:|
| Jumlah fungsi | 1 | 7 |
| Baris fungsi terpanjang | 21 | 17 |
| Parameter maksimum | 0 | 3 |
| Konstanta bernama | 0 | 5 |
| Validasi input | Belum ada | Ada |
| Penamaan variabel | Tidak deskriptif | Deskriptif |

*Keterangan: Perhitungan baris fungsi menggunakan jumlah baris fisik termasuk baris kosong, berdasarkan kode yang didokumentasikan.*

## Hasil Refaktor

Refaktor menghasilkan struktur kode yang lebih terorganisasi, mudah dibaca, dan lebih mudah dipelihara tanpa mengubah hasil perhitungan utama aplikasi.

## Struktur Folder

```text
junior-web-programming-modul-5/
├── screenshot/
├── screenshots/
│   ├── kode-sebelum.png
│   └── kode-sesudah.png
├── index.html
├── style.css
├── script.js
└── README.md
```

## Branch Git

Proyek menggunakan dua branch untuk membandingkan kode:

- `sebelum-refaktor`: Menyimpan implementasi kode awal sebelum refaktor.
- `sesudah-refaktor`: Menyimpan implementasi kode setelah refaktor.

## Cara Menjalankan Aplikasi

1. Clone repository GitHub.
2. Buka folder proyek menggunakan Visual Studio Code.
3. Jalankan file `index.html` menggunakan Live Server.
4. Pilih produk dan masukkan jumlah pesanan.
5. Klik tombol Hitung Pesanan untuk melihat hasil perhitungan.

## Repository

GitHub: https://github.com/anandanuramaliaarfan/junior-web-programming-modul-5

## Penulis

Ananda Nur Amalia Arfan

Junior Web Programming – Modul 5