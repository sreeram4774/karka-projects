# a=[1,2,3,4,5,6]
# for i in a:
#     print(i)

# a=[1,2,3,45,5,5,7,8,0,4,7]
# for i in range(0,len(a),2):
#     print(a[i])


# a=[1,2,3,45,5,5,7,8,0,4,7]
# for i in range(0,len(a),3):
#     print(a[i])


# a=[1,2,3,45,5,5,7,8,0,4,7]
# for i in range(len(a)):
#     print(i)


a=[1,2,3,4,5,6,7,8,9,47,45,67,44]
even=[]
odd=[]
for i in a:
    if i%2==0:
        even.append(i)
    else:
        odd.append(i)

print(odd,"this is odd numbers")
print(even,"this is even numbers")


