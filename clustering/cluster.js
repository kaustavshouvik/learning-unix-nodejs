import cluster from 'node:cluster';
import os from 'node:os';

console.log(`${process.ppid} --> ${process.pid}`);

const cores = os.availableParallelism();

(async () => {
  if (cluster.isPrimary) {
    for (let i = 0; i < cores; i++) {
      cluster.fork();
    }
  } else {
    await import('./app.js');
  }
})();
