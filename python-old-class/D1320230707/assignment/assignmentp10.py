name=(input("hey,whats your name?(sorry,i keep forgetting.{name}"))
age=int(input(f"ok,{name},how old are you? "))
if age<=16:
    print("you cant drive")
elif 16<=age>=17:
    print(f"you can drive but you can't vote,{name}")
elif 18<age>24:
    print("you can vote but not rent a car")
else:
    print("you can do pretty much anything")



