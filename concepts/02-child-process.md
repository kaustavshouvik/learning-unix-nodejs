1. The kernel is a process with process id 0.
2. Every other process is _some_ descendant of the kernel process.
3. Opening a terminal, creates a shell process.
   - Let's say that shell's process id is 336.
4. Then using the `node` command in that shell, we create a node process.
   - That node process is a _child process_ of the shell process.
   - Node process id can be seen using `process.pid` -> 20478.
   - The parent id can be seen using `process.ppid` -> 336 (the id of shell process).
