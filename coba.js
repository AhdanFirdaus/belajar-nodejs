function cetakNama(nama) {
  return `halo, nama saya ${nama}`;
}

const PI = 3.14;

const mahasiswa = {
  nama: 'dadan',
  umur: 17,
  cetakMhs() {
    return `Halo, nama saya ${this.nama}, dan saya ${this.umur} tahun`
  }
}

module.exports.cetakNama = cetakNama;
module.exports.PI = PI;
module.exports.mahasiswa = mahasiswa;