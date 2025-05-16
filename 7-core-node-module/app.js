// Core module
const fs = require('node:fs');

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
fs.readFile('data/test.txt', 'utf-8', (err, data) => {
  if (err) throw err;
  console.log(data.toString());
}); 