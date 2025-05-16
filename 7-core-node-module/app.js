// Core module
const fs = require('node:fs');

// menuliskan string ke file (synchronous)
fs.writeFileSync('test.txt', 'hello world secara synchronous')