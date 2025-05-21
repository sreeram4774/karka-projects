total=0
for i in range(10):
    a=int(input("enter your number "))
    if a!=0:
        total=total+a
    elif a==0:
        break
print(total)