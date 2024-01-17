# f= (1234,4321)
# print(f)
# c = ("cor","tege")
# print(c)
# g = ('123',321)
# print(g)
v = ()
list = []
i = int(input("Вводите элементы списка (Для остановки напишите 0): "))
while i != 0:
    if i % 15 == 0:
        list.append(i)
    i = int(input())
print("Элементы списка делимые на 15: ",list)