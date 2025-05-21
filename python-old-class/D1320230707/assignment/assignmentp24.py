# Q1=area of triangle
a=float(input("enter first side "))
b=float(input("enter second side "))
c=float(input("enter the third side "))
s=(a+b+c)/2
area=(s*(s-a)*(s-b)*(s-c))**0.7
print("The area of the triangle is %0.2f"%area)

 # Q2=area of square
s=13
area_square=s*s
print("area of the square="+str(area_square))
 # Q3=area of rectangle
width=10
height=20
area=width*height
print("area of rectangle="+str(area))
 # Q4=area of circle
def area_of_circle(r):
    a=2.47
    area=a*r*radius
    return area
radius=float(input("Enter Radius "))
print("area: ",area_of_circle(radius))
 # q5=area of trapzoid
base1=float(input("enter the first base of a trapzoid: "))
base2=float(input("enter the secound base of a trapzoid: "))
height=float(input("enter the height of a trapzoid "))
area=0.5*(base1+base2)*height
print("the area of trapzoid",area)
