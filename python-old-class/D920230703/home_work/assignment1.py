value1=int(input("value1-"))
value2=int(input("value2-"))
operation=input("enter your input- ")
def value(v1,v2):
    if operation=="+":
        v=(value1+value2)
        return v
    elif operation=="-":
        v=(value1-value2)
        return v
answer=value(value1,value2)
print(answer)

