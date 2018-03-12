#!/usr/bin/awk -f
# Year : Month : Day : Recipient : D / W : Amount

BEGIN { FS = ":" }

# skip lines starting with a '#'
/^[#]/ { next }

# simple conditions
$5 == "W" { withdrawals[$4] += $6 }
$5 == "D" { deposits[$4] += $6 }

END {
    print "Deposit Totals:"

    for (i in deposits)
        printf("\t%s: $%g\n", i, deposits[i])

    print ""

    print "Withdrawal Totals:"
    for (i in withdrawals)
        if (withdrawals[i] > 15)
            printf("\t%s: $%g\n", i, withdrawals[i])
}
