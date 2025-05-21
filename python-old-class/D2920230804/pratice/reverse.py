# j=6
# n=6
# for i in range(n):
#     for j in range(j):
#         print(j,end=" ")
#     print("")    


# j=5
# n=5
# for i in range(n):
#     for j in range(j):          #This is oder number method:1
#         print("*",end=" ")
#     print("")   

# n=int(input("first-"))
# for i in range(1,(n*n)+1):
#     print(i,end=" ")
#     if 1%n==0:
#         print("\n")

# j=6
# n=5
# for i in range(n):
#     for j in range(1,(j)):  
#         print(j,end=" ")
#     print("")    


for i in range(5,0,-1):
    for j in range(i,0,-1):
            print(j,end=" ")          #This is reverse number method:2
    print("")    


# for i in range(1,6):
#     for j in range(0,i):
#         print("*" ,end=" ")
#     print("")   

# def print_star_pattern(rows):
# for i in range(1, rows + 1):
#     print("* " * i)                    #This is 1st method and it is used function method
# for i in range(rows - 1, 0, -1):
#     print("* " * i)
# rows = 5
# print_star_pattern(rows)

user=int(input("enter the number : "))
rows=user
for i in range(1, rows + 1):
    print("* " * i)
for i in range(rows - 1, 0, -1):     #This is 2nd and easy non function method
    print("* " * i)

