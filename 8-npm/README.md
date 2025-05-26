# 📦 Node.js Project Setup
## 🛠️ Inisialisasi Project

```sh
npm init
```
Perintah ini digunakan untuk menginisialisasi project Node.js. Ini akan membuat file `package.json` yang berisi informasi tentang project, seperti nama, versi, deskripsi, entry point, dan dependencies.

## 📥 Instalasi Package
**Instalasi versi terbaru**
```sh
npm install <package>
```
Atau singkatnya:
```sh
npm i <package>
```
Perintah ini akan menginstal versi terbaru yang stabil dari package dan menyimpannya ke dalam folder `node_modules`, serta mencatatnya di file `package.json`.
Contoh:
```sh
npm i validator
```
**Instalasi versi tertentu**
```sh
npm install <package>@<versi>
```
Digunakan saat kamu ingin menginstal **versi tertentu** dari suatu package.
Contoh:
```sh
npm i validator@13.5.2
```
Artinya kamu akan menginstal package `validator` versi **13.5.2** — cocok untuk menjaga konsistensi proyek dan menghindari bug akibat perubahan versi di masa depan.

## ❌ Uninstall Package
```sh
npm uninstall <package>
```
Digunakan untuk menghapus package yang sudah terinstal dan juga menghapusnya dari daftar dependensi di `package.json`.
Contoh:
```sh
npm uninstall validator
```

## 📜 Menjalankan Script
Script di `package.json`
```json
{
  "scripts": {
    "start": "node app",
    "test": "echo \"Error: no test specified\" && exit 1",
    "dev": "ls"
  }
}
```
Kenapa `start` dan `test` tidak perlu `run`?
```sh
npm start     # ✅ langsung jalan
npm test      # ✅ langsung jalan
npm run dev   # ✅ harus pakai "run"
```
- `start` dan `test` adalah **script bawaan (default)** di NPM, sehingga bisa langsung dijalankan tanpa mengetik `run`.

- Sedangkan script lain seperti `dev`, `lint`, `build`, dll adalah custom script, jadi harus menggunakan:
```sh
npm run <nama-script>
```
Contoh:
```sh
npm run dev
```