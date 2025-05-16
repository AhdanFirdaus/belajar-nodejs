// const nama = 'ahdan firdaus';
// const cetakNama = (nama) => `Hi, nama saya ${nama}`;
// console.log(cetakNama('ahdan firdaus'))

// const fs = require('fs'); // core module
// const cetakNama = require('./coba'); // local module
// const moment = require('moment'); // third party module / npm module / node_modules

// console.log('hello dadan')

// const cetakNama = require('./coba');
// const PI = require('./coba');
// console.log(PI);
const coba = require("./coba"); // object
// console.log(coba); // { cetakNama: [Function: cetakNama], PI: 3.14 }
console.log(
  coba.cetakNama("ahdan"),
  coba.PI,
  coba.mahasiswa.cetakMhs(),
  new coba.Orang()
);
