const Cpeak = require('cpeak');

const server = new Cpeak();

process.on('message', (data) => {
  console.log(`In child: Got message from parent -> "${data}"`);
});

process.send('Message from child');

server.route('get', '/', (req, res) => {
  res.json({ message: 'This is some text.' });
});

server.route('get', '/heavy', (req, res) => {
  for (let i = 0; i < 10000000000; i++) {}
  res.json({ message: 'The operation is now done.' });
});

const PORT = 8080;

server.listen(PORT, () => {
  console.log(`Server has started on port ${PORT}`);
});
