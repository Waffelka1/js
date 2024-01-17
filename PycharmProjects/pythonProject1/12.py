def xy(n):
    l= []
    x = 0
    y = 0
    while x**2<= n:
        while y**2 <= n:
            if x**2 + y**2 == n:
                l.append((x,y))
            y += 1
        x += 1
        y = 0
    return (l)

print(xy(int(input("Введите N "))))