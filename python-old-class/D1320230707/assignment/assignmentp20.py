total=0
number=int(input("enter a number: "))
print("the total so far is",number)

while number !=0:
    total += number

    number = int(input("enter a number: "))
    print("the total so far is",number)


print("The total is =",total)    