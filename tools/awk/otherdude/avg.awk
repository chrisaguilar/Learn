#!/usr/bin/awk -f

BEGIN {
    print "grades report"
    print "============="
}

NR == 1 { next }

{
    lines++;
    fullname = $1 " " $2
    print fullname, ($3 + $4 + $5 + $6) / 4
    sum1 += $3;
    sum2 += $4;
    sum3 += $5;
    sum4 += $6
}

END {
    print ""
    print "Totals"
    print "======"
    print sum1 / lines, sum2 / lines, sum3 / lines, sum4 / lines
}
