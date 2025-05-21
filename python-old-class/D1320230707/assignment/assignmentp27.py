my_keychains = 0
def add_keychain(keychains):
    no = int(input("Enter The Number of Keychain to be added"))
    keychains+=no
    print(f"Yes Now Here is {keychains} are there")

def remove_keychain(keychains):
    no = int(input("Enter The Number of Keychain to be added"))
    keychains-=no
    print(f"Yes Now Here is {keychains} are there")

for i in range(50):
    userChoice = int(input("Enter Your Choice"))

    if userChoice == 1:
        add_keychain(my_keychains)
    elif userChoice == 2:
        remove_keychain(my_keychains)
    else:
        print("None")





