# bmi=("lessthan 18.5\n18.5 to 24.9\n25.0 to 29.9\n30.0 or more")
# category=("underweight\nnormalweight\noverweight\nobese")
height=float(input("yourheight: "))
weight=float(input("yournweight: "))
bmi=weight/(height**2)
print("your bmi is : ",bmi)
if bmi>=25.0 > 29.9:
    print("Bmi catagory : you are overweight")
elif bmi<=18.5:
    print("Bmi catagory : you are underweight")
elif bmi>=18.5 < 24.9:
    print("Bmi catagory : you are in normal weight")
elif bmi>=30:
    print("Bmi catagory : you are in obese")            
   



