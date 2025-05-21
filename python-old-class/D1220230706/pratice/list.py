sumlist=[100,200,100,100,200]
total=0
# sum=0
# for i in sumlist:
#      print("before",sum)
#      sum=sum+i
#      print("after",sum)
#     print(i)
# for i,sumlist in enumerate(sumlist):
#     print(sumlist) 
# total=sum
# avg=total/5
# print("avg",avg)
# sum=0
# for i in sumlist:
#     print("inr(sum),inr(sum),inr(sum),inr(sum)")
enum_marks=enumerate(sumlist)
print(type(enum_marks))
for i,mark in enum_marks:
    print("entering iteration process for item:"+str(i))
    print("before sum",total)
    total=total+mark
    print("after sum",total)
    print("exiting iteration process for item:"+str(i))
    print("\n")
