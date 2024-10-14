#include <stdio.h>
#include <stdlib.h>

// Reads from standard input and outputs to file.

int main(int argc, char* argv[]) {
  // Opening a file.
  FILE *outputFile = fopen(argv[1], "w");

  int c = 0;
  while ((c = fgetc(stdin)) != EOF) {
    // Only does the write, if it reaches a specific threshold.
    fprintf(outputFile, "%c", c);
    // fflush(outputFile); // <- To flush manually
  }

  return 0;
}