function hitung() {
    let p = document.getElementById("produk").value;
    let j = document.getElementById("jumlah").value;

    let s = p * j;
    let d = 0;

    if (s >= 100000) {
        d = s * 0.1;
    } else if (s >= 50000) {
        d = s * 0.05;
    }

    let pj = (s - d) * 0.11;
    let t = s - d + pj;

    document.getElementById("subtotal").innerText = "Rp" + s.toLocaleString("id-ID");
    document.getElementById("diskon").innerText = "Rp" + d.toLocaleString("id-ID");
    document.getElementById("pajak").innerText = "Rp" + pj.toLocaleString("id-ID");
    document.getElementById("total").innerText = "Rp" + t.toLocaleString("id-ID");
}