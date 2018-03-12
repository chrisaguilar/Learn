"""
Multiples of 3 and 5.

If we list all the natural numbers below 10 that are multiples of 3 or 5, we 
get 3, 5, 6 and 9. The sum of these multiples is 23.

Find the sum of all the multiples of 3 or 5 below 1000.
"""

def multiples(limit, *bases):
    """
    Sums all integers x if x % base == 0 for all x in [1, limit).

    Rationale:
    For every integer `x` in [1, limit), we must verify whether or
    not `x` is a multiple of each `base` in `bases`. This can be checked
    by evaluating `x % base`; if `x % base == 0`, this means `x` is a
    multiple of `base`. The value `0` has a truthiness of `False` in 
    Python, so we can replace `x % base == 0` with `not x % base`, and 
    it will give the same answer.
    """
    """
    mults = []
    for x in range(1, limit):
        for base in bases:
            if x % base == 0:
                mults.append(x)
                break
    return mults
    """
    return {x for x in range(1, limit) for base in bases if x % base == 0}

print(sum(multiples(1000, 3, 5)))
print(sum(multiples(100, 1)))

