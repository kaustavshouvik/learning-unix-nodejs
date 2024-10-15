const cluster = require('node:cluster');
const os = require('node:os');

console.log(`${process.ppid} --> ${process.pid}`);

const cores = os.availableParallelism();

if (cluster.isPrimary) {
  for (let i = 0; i < cores; i++) {
    const worker = cluster.fork();

    // To send some data to the child process.
    worker.send('Message from parent');
  }

  cluster.on('message', (worker, message) => {
    console.log(`In parent: Got message -> "${message}"`);
  });
}

if (cluster.isWorker) {
  require('./app');
}
