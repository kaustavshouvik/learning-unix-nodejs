#include <stdio.h>
#include <stdlib.h>

int main(int argc, char* argv[]) {
  // Opening a file.
  FILE *outputFile = fopen(argv[1], "w");

  char *digits = (char*)malloc(10 * sizeof(char));
  int i = 0;

  int c = 0;
  while ((c = fgetc(stdin)) != EOF) {
    if (c != ' ') {
      digits[i++] = c;
    }

    if (c == ' ') {
      if (i > 0) {
        // TODO: Do something with the number.
        // I'll just add a '%' at the end.

        digits[i++] = '%';
        digits[i] = '\0';
      
        fprintf(outputFile, "%s ", digits);

        digits[i] = ' ';
      }

      i = 0;
    }
  }

  free(digits);
  fclose(outputFile);

  return 0;
}