with open('./p067_triangle.txt') as pyramid:
    rows = pyramid.read().strip().split('\n')
    rows = [row.strip().split(' ') for row in rows]
    rows = [[int(x) for x in row] for row in rows]
    rows = [max(row) for row in rows]
    print(rows)
