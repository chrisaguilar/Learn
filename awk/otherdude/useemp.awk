#!/usr/bin/awk -f

BEGIN { FS="," }
{ print $3,$2 }

