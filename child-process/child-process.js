import { spawn, exec } from 'node:child_process';

// Some unix command goes here.
// Returns a stream.
const cmd = spawn('ls');

cmd.stdout.on('data', (data) => {
  console.log('---- SPWAN DATA ----');
  console.log(data.toString('utf8'));
});

// This works with exec -> `echo "a b" | tr ' ' '\n'`
// Doesn't work with spwan.

// 'exec' -> creates a shell process and runs that text in that shell.

// 'spawn' -> creates the process that was specified.
// spawn('ls') -> create a 'ls' process.

exec('ls -l', (err, stdout, stderr) => {
  console.log('---- EXEC DATA ----');

  if (err) {
    console.error(err);
    return;
  }

  console.log(`STDOUT:`);
  console.log(stdout);

  console.log(`STDERR:`);
  console.log(stderr);
});
