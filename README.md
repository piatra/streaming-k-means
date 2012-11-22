# About
***
An attempt at a streaming k means algorithm in nodejs
* Ported algorithm from octave to javascript
* parser.c parses an input file with coordinates (from x,y,z to just x,y) into a javascript array; you can generate more files for tests by compiling parser.c and using the files in /tests/;  these are some old input files from a homework :)
* read.js reads that array and passes it to the clustering function
* output.txt is actually the array that will get passed to the kmeans algorithm
* the output (output.html) is then drawn to the page with canvas using the points and the generated cluster centers (things are hardcoded here just just to see it's working)
