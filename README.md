# RC72 V6.3.0 — PDF Library Fixed

Perbaikan utama:
- IndexedDB dinaikkan ke versi 6 agar object store `documents` benar-benar dibuat ulang/ditambahkan saat database lama v4 bermasalah.
- Tombol impor di Library Bacaan menerima PDF dari iPad Files, termasuk MIME kosong/octet-stream jika signature `%PDF-` valid.
- PDF hasil impor tampil di Koleksi PDF dalam Library Bacaan.
- `YASINAN.pdf` dan `WIRIDAN(1).pdf` dibundel dan otomatis dimasukkan ke Library Bacaan pada penggunaan pertama.
- Galeri tetap bernama Galeri Media.
- Service worker menyimpan index dan dua PDF untuk penggunaan offline setelah instalasi/cache pertama.
