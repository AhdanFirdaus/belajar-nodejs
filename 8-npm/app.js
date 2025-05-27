const validator = require('validator');
const chalk = require('chalk');
// console.log(validator.isEmail('muhammadahdanf1@gmail.com'));
// console.log(validator.isMobilePhone('08113213213211', 'id-ID'));
// console.log(validator.isNumeric('34324324'));

// console.log(chalk.black.bgCyan('hello world!'));
const nama = 'Ahdan';
const pesan = chalk`Lorem ipsum dolor {bgRed.black sit amet}, consectetur adipiscing elit {bgGreen.italic.black vehicula}. Nama saya ${nama}`
console.log(chalk(pesan));