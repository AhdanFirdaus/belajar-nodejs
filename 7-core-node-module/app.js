// Core module
const fs = require('node:fs');

// menuliskan string ke file (synchronous)
try {
  fs.writeFileSync('data/test.txt', 'hello world secara synchronous')
} catch (e) {
  console.log(e);
}