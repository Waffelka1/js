def numerator(n,v):
    s = str(n)
    d = str(v)
    if len(s) > len(d):
        print("Больше цифр в числе: ",n)
    else:
        print("Больше  цифр в числе: ",v)

chislo = int(input("Введите первое число: "))
chislo2 = int(input("Введите второе число: "))
numerator(chislo,chislo2)
