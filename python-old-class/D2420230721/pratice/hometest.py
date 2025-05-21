# val1=int(input("value1 : "))
# val2=int(input("value2 : "))
# val3=int(input("value3 : "))
# val4=int(input("value4 : "))
# val5=int(input("value5 : "))
   
# value=(val1+val2+val3)*val4*val5
# print(value)
# total=value
# if total >100:
#     print("This is a biggest number > 100")
# else:
#     print("This is a smallest number < 100")    

# val1=int(input("value1 : "))
# val2=int(input("value2 : "))
# val3=int(input("value3 : "))
# val4=int(input("value4 : "))
# val5=int(input("value5 : "))

# value=(val1+val2+val3)*val4*val5
# print(value)
# total=value
# if total%2==0:
#     print("this is even number")
# else:
#     print("this is odd number")   

# values=[100,227,350,477,500]
# for value in values:
#     if  value%2==0:
#         print("this is even number",value) 
#     elif not value%2==0:                      #->not equal mention and simple method (!) -->it is simple method of not defination symbol

#         print("this is odd number",value)


   
# def value(a,b,c,d,e):
#     if operation=="add":
#         v=(value_a+value_b+value_c)
#         return v
# total=(value_a)        
# operator=(value_a,value_b,value_c)
# div=(value_d,value_e)
# def value(value1,value2,value3):
#     value=(value1+value2+value3)*div

#     print(value)
#     return v
# total=value(value1,value2,value3)
# print(total) 
         

# name=("appa")
# print(name[::])  # this is called reverse letter to first program
# name=("son")
# print(name[::])  # this is called palindrome program  

# import math
# print(math.pi)
# radius=int(input("enter your input : "))
# print(math.pi*radius*radius)
# area=(math.pi*radius*radius)
# print("area of circle : ",area)         # area of circle =full lenght number result output
# print("area of circle : ",round(area))   # area of circle = round means lenght value short panni output varum
# print("area of circle : ",round(area,2))  # area of circle= round 2 means length value short .23 output varum
# print("area of circle : ",round(area,3))  # area of circle= round 3 means length value short .234 output varum

# from math import math.pi
# radius=int(input("enter your input : "))
# print(pi*radius*radius)
# area=(pi*radius*radius) # from math import math.pi (direct pi mention used )

# expression=input("enter your expression : ")
# print(expression)             #This expression used to result expression given no total output given input and same value output.
# expression=eval(expression)   #This expression used to full expression give total answer output.
# print(expression)             #This expression used to full expression give total answer output.


# num1=int(input("enter your number : "))

# num2=int(input("enter your number : "))

# num3=int(input("enter your number : "))

# num4=int(input("enter your number : "))

# num5=int(input("enter your number : "))


# numbers=[num1,num2,num3,num4,num5]


# for value in numbers:

#     if  value%2==0:
#         print("this is even number",value) 

#     elif not value%2==0:                      #->not equal mention and simple method (!) -->it is simple method of not defination symbol

#         print("this is odd number",value)

        
# if num1>num3 and num1>num2:
#     print("num-1 is greater")

#     if num1>=100:
#         print("num-1 is biggest number of set")


# elif num2>num3 and num2>num1:
#     print("num-2 is greater")

#     if num2>=200:
#         print("num-2 is biggest number of set")


# elif num3>num5 and num3>num4:
#     print("num-3 is greater")

#     if num3>=300:
#         print("num-3 is biggest number of set")


# elif num4>num5:
#     print("num-4 is greater")

#     if num4>=400:
#         print("num-4 is biggest number of set")



# elif num5>num3 and num5>num4:
#     print("num-5 is greater")

#     if num5>=500:
#         print("num-5 is biggest number of set")        






 
    
# num1=int(input("enter your number : "))
# num2=int(input("enter your number : "))
# num3=int(input("enter your number : "))
# num4=int(input("enter your number : "))
# num5=int(input("enter your number : "))
# if num1>num3 and num1>num2:
#     print("num1 is greater")
# elif num2>num3 and num2>num1:
#     print("num2 is greater")
# elif num3>1 and num3>num2:
#     print("num3 is greater")


# list=[1,2,3,4,5]
# value=5
# list=list+[value]
# print(list)

# value1=[1,2,3,4,1]
# duplicate=[]
# for i in value1:
#     if i not in duplicate:
#         duplicate.append(i)
#         print(duplicate)

# lis=[1,2,3,4,1]
# duplicate=[]
# for i in lis:
#     if i not in duplicate:
#         duplicate.append(i)   
#         print(duplicate)


# lis = [1, 2, 1, 2, 3, 4, 5, 1, 1, 2, 5, 6, 7, 8, 9, 9]
# uniqueList = []
# duplicateList = []
# for i in lis:
# 	if i not in uniqueList:
# 		uniqueList.append(i)
# 	elif i not in duplicateList:
# 		duplicateList.append(i)
# print(duplicateList)


# l=[1,0,3,0,9,13]
# duplicate=[]
# for i in l:
# 	if i not in duplicate:
# 		duplicate.append(i)
# 		print(i)

# l=[1,0,3,0,9,13]
# revalue=[]
# l.remove(0)
# print(l)


# mind game program

mind=4
while True:
    user1=int(input("enter the 1st number-1 to 10 : "))
    user2=int(input("enter the 2nd number-1 to 10 : "))
    if user1 > mind and user2 > mind:
        print("both answer is too big")
    elif user1 < mind and user2 < mind:
        print("both answer is too small")
    elif user1 > mind and user2 < mind:
        print("user1 answer is too big\nuser1 answer is too small")      
    elif user1 < mind and user2 >  mind:
        print("user1 answer is too small\nuser2 answer is too big")  
    elif user1 == mind and user2 > mind:
        print("user1 answer is correct. but user2 answer is too big")
    elif user1 == mind and user2 < mind:
        print("user1 answer is correct. but user2 answer is too small")
    elif user2 == mind and user1 > mind:
        print("user2 answer is correct. but user1 answer is too big")
    elif user2 == mind and user1 < mind:
        print("user2 answer is correct. but user1 answer is too small")   
    elif user1 == mind:
        print("user1 answer is correct")
        if user2 == mind:
            print("user2 answer is correct")
            break
            
       
   
    

