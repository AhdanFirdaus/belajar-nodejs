// Core module
const fs = require('node:fs');

// menuliskan string ke file (synchronous)
// try {
  //   fs.writeFileSync('data/test.txt', 'hello world secara synchronous')
  // } catch (e) {
    //   console.log(e);
    // }
    
    
// menuliskan string ke file (asynchronous)
fs.writeFile('data/test.txt', 'hello world secara Asynchronous', (e) => {
  console.log(e)
})