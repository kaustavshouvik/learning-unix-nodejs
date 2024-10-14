import { spawn } from 'node:child_process';
import fs from 'node:fs';

const numFmt = spawn('./number_formatter', ['./dest.txt']);

numFmt.stdout.on('data', (data) => {
  console.log(data.toString('utf8'));
});

numFmt.stderr.on('data', (data) => {
  console.error(data.toString('utf8'));
});

numFmt.on('close', (code) => {
  console.log(`Exit Code: ${code}`);
});

const fileStream = fs.createReadStream('./src.txt', 'utf8');

fileStream.pipe(numFmt.stdin);
