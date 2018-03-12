#!/usr/bin/awk -f
BEGIN       { print "Header" }

/[0-9]+/    { print "Found Number" }
/[A-Za-z]+/ { print "Found Word" }
/^$/        { print "Found Blank Line" }

END         { print "Footer" }
