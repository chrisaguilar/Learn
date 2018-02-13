from time import time

def collatz(num):
    val = num
    steps = 0
    # seq = [val]
    while val != 1:
        if not val % 2: val //= 2
        else: val = val * 3 + 1
        # seq += [val]
        steps += 1
    # print(seq)
    return [num, steps + 1]

start = time()
sequences = [collatz(x) for x in range(1, 1000000)]
end = time()

# sequences = [collatz(x) for x in range(1, 14)]
print(max(sequences, key=lambda seq: seq[1]))

print(f'Seconds Elapsed: {end - start}')
