#!/usr/bin/awk -f

{ print; numfiles=numfiles + 1; numbytes=numbytes + $5 }

END { print numfiles, "files,", numbytes, "bytes" }
