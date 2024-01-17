def xy (n):
    x = int(input("Введите x: "))
    y = int(input("Введите y: "))
    while x**2 + y**2 != n:
        print("Неверный подбор")
        x = int(input("Введите x: "))
        y = int(input("Введите y: "))
    return (x,y)


N = int(input("Введите число для подбора: "))
print("Правильный подбор:",xy(N))