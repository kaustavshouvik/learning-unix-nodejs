import fs from 'node:fs';

const s = fs.createWriteStream('./src.txt');

let i = 0;
const n = 100000000;

// Creates a huge file containing sequential numbers.
// 100000000 -> 944mb.

function write() {
  while (i < n) {
    const res = s.write(` ${i} `);
    if (!res) {
      return;
    }

    i++;
  }
}

write();

s.on('drain', write);
