item1=int(input("item1-"))
item2=int(input("item2-"))
item3=int(input("item3-"))
item4=int(input("item4-"))
total=item1+item2+item3+item4

goldpass=total>1000<1400
silverpass=total<1000
platinumpass=total>1500

if goldpass:
    print("you woned a gold token")

if silverpass:
    print("you woned a silver token") 

if platinumpass:
    print("you woned a platinum token")       