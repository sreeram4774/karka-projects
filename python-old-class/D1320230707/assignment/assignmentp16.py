gender=(input("what is your gender (m or f): answer: "))
firstname=(input("firstname  : "))
lastname=(input("lastname : "))
age=int(input("age : "))
if  gender == "f" :
    if   age >= 20:
        married=(input(f"are you married,{gender} (yes or no)? : "))    #(<1st method)
        if married==yes:
            print(f"Then i shall call you Ms.{firstname}.")
        elif age==20:
            print(f"Then i shall call you {firstname,lastname}")

gender=(input("what is your gender (m or f): answer: "))
firstname=(input("first name  : "))
lastname=(input("last name : "))
age=int(input("age : "))
if gender == "m":
    if age>20:
        print(f"then i shall call you Mr.{firstname,lastname}")
    else:
        print(f"Then i shall call you {firstname,lastname}")


#  gender=(input("what is your gender (m or f): answer: "))
# firstname=(input("firstname  : "))
# lastname=(input("lastname : "))
# age=int(input("age : "))
# if  gender == "f":
#     if   age > 20:
#         married=(input(f"are you married,{gender} (yes or no)? : "))
#         if married=="yes":
#             print(f"Then i shall call you Ms.{firstname}")
#     elif age==20:
#         print(f"Then i shall call you {firstname+lastname}")       #(<-2nd method)
# else:
#     print("Thanks for your choosing")
# gender=(input("what is your gender (m or f): answer: "))
# firstname=(input("first name  : "))
# lastname=(input("last name : "))
# age=int(input("age : "))
# if gender == "m":
#     if age>20:
#         print(f"then i shall call you Mr.{firstname+lastname}")
#     else:
#         print(f"Then i shall call you {firstname+lastname}")
# else:
#     print("thanks for your choosing")
               


# gender=(input("what is your gender (m or f): answer: "))
# firstname=(input("first name  : "))
# lastname=(input("last name : "))
# if age=="<20":
    # age=int(input("age : "))
    # print(firstname,lastname)
# if maleage=="20>":
    # age=int(input("age : "))
    # print(f"Then i shall call you Mr.{firstname}")              #(<-3rd method)
 
# gender = input("Enter your gender (M/F): ")
# first_name = input("Enter your first name: ")
# last_name = input("Enter your last name: ")
# age = int(input("Enter your age: "))

# if gender == 'F':
#     if age >= 20:
#         married = input("Are you married? (Y/N): ")
#         if married == 'Y':
#             print("Mrs. " + last_name)
#         else:
#             print("Ms. " + last_name)
#     else:
#         print(first_name + " " + last_name)
# elif gender == 'M':
#     if age >= 20:
#         print("Mr. " + last_name)
#     else:
#         print(first_name + " " + last_name)
# else:
#     print("Invalid gender entered.")




