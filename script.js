// ==========================================
// RUANG NIAGA - ORDER CALCULATOR
// Modul 5: Clean Code & Best Practices
// ==========================================

// Konstanta untuk aturan perhitungan
const BATAS_DISKON_BESAR = 100000;
const BATAS_DISKON_KECIL = 50000;
const PERSENTASE_DISKON_BESAR = 0.1;
const PERSENTASE_DISKON_KECIL = 0.05;
const PERSENTASE_PAJAK = 0.11;

// Mengambil elemen HTML
const elemenProduk = document.getElementById("produk");
const elemenJumlah = document.getElementById("jumlah");
const elemenSubtotal = document.getElementById("subtotal");
const elemenDiskon = document.getElementById("diskon");
const elemenPajak = document.getElementById("pajak");
const elemenTotal = document.getElementById("total");

// Menghitung subtotal pesanan
function hitungSubtotal(hargaProduk, jumlahPesanan) {
  return hargaProduk * jumlahPesanan;
}

// Menentukan diskon berdasarkan subtotal
function hitungDiskon(subtotal) {
  if (subtotal >= BATAS_DISKON_BESAR) {
    return subtotal * PERSENTASE_DISKON_BESAR;
  }

  if (subtotal >= BATAS_DISKON_KECIL) {
    return subtotal * PERSENTASE_DISKON_KECIL;
  }

  return 0;
}

// Menghitung pajak setelah diskon
function hitungPajak(subtotalSetelahDiskon) {
  return subtotalSetelahDiskon * PERSENTASE_PAJAK;
}

// Menghitung total pembayaran
function hitungTotalPembayaran(subtotal, diskon, pajak) {
  return subtotal - diskon + pajak;
}

// Memformat angka menjadi mata uang Rupiah
function formatRupiah(nominal) {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    maximumFractionDigits: 0,
  }).format(nominal);
}

// Menampilkan hasil perhitungan ke halaman
function tampilkanHasil(subtotal, diskon, pajak, total) {
  elemenSubtotal.textContent = formatRupiah(subtotal);
  elemenDiskon.textContent = formatRupiah(diskon);
  elemenPajak.textContent = formatRupiah(pajak);
  elemenTotal.textContent = formatRupiah(total);
}

// Mengelola proses perhitungan pesanan
function hitungPesanan() {
  const hargaProduk = Number(elemenProduk.value);
  const jumlahPesanan = Number(elemenJumlah.value);

  if (!Number.isInteger(jumlahPesanan) || jumlahPesanan < 1) {
    alert("Jumlah pesanan harus berupa bilangan bulat minimal 1.");
    return;
  }

  const subtotal = hitungSubtotal(hargaProduk, jumlahPesanan);
  const diskon = hitungDiskon(subtotal);
  const subtotalSetelahDiskon = subtotal - diskon;
  const pajak = hitungPajak(subtotalSetelahDiskon);
  const total = hitungTotalPembayaran(subtotal, diskon, pajak);

  tampilkanHasil(subtotal, diskon, pajak, total);
}

// Menjalankan perhitungan ketika tombol diklik
document.querySelector("button").addEventListener("click", hitungPesanan);
