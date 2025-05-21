# a=int(input("enter your number"))
# for i in range(1,a+1):
#     if i%2==0:
#         print(i)



L = [4, 5, 1, 2, 9, 7, 10, 8]

count = 0

for i in L:
	count += i


avg = count/len(L)

print("sum = ", count)
print("average = ", avg)

