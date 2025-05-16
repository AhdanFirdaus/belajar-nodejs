// Core module
const fs = require("node:fs");

// menuliskan string ke file (synchronous)
// try {
//   fs.writeFileSync('data/test.txt', 'hello world secara synchronous')
// } catch (e) {
//   console.log(e);
// }

// menuliskan string ke file (asynchronous)
// fs.writeFile('data/test.txt', 'hello world secara Asynchronous', (e) => {
//   console.log(e)
// })

// membaca isi file (synchronous)
// const data = fs.readFileSync('data/test.txt', 'utf-8');
// console.log(data.toString());

// membaca isi file (asynchronous)
// fs.readFile('data/test.txt', 'utf-8', (err, data) => {
//   if (err) throw err;
//   console.log(data.toString());
// });

// Readline
const readline = require("node:readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Masukan nama anda : ", (nama) => {
  rl.question('Masukkan no HP anda : ', (noHP) => {
    const contact = {nama, noHP}
    const file = fs.readFileSync('data/contacts.json', 'utf-8');
    const contacts = JSON.parse(file);

    contacts.push(contact);

    fs.writeFileSync('data/contacts.json', JSON.stringify(contacts));

    console.log("Terimakasih sudah memsukkan data.");

    rl.close();
  });
});
