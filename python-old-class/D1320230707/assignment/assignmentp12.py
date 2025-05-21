quiz=(input("Are you ready for quiz? "))
if quiz =="yes":
    print("okay,here it comes !")
    Q1=(input(f"what is the capital of alaska ? \n\t 1, Melbourne, \n\t 2, Anchorage, \n\t 3, juneau \n answer :"))
    if  Q1=="3":
        print("That's right !")
    else:
        print("wrong answer") 

    Q2=(input(f"can you store the value 'cat' ? \n\t 1, yes, \n\t 2, no,  \n answer :"))
    if  Q2=="1":
        print("sorry, 'cat' is a String ints can only store number.")
    else:
        print("That's right !") 

    
    Q3=(input(f"what is the result of 9+6/3 ? \n\t 1, 5, \n\t 2,3, \n\t 3, 5/3 \n answer :"))
    if  Q3=="2":
        print("That's correct !")
    else:
        print("wrong answer")
    print("overall.you 2 out of 3 correct \nThanks for playing")     

else:
    print("no you are not ready")    

# # Q1=what is the capital of alaska
# if Q1==3:
#     # Q1=(f"what is the capital of alaska")
    # value[1, Melbourne, 2, Anchorage, 3, juneau]
#     print([3],"\n Thats right")            
