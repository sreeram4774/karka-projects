items = [
    {"name": "Apple", "category": "Fruits"},
    {"name": "Carrot", "category": "Vegetables"},
    {"name": "Banana", "category": "Fruits"},
    {"name": "Broccoli", "category": "Vegetables"},
]
Fruits=[]
Vegetables=[]
for i in items:
    if i["category"]=="Fruits":
        Fruits.append(i["name"])
    elif i["category"]=="Vegetables":
        Vegetables.append(i["name"])

a={"Fruits":Fruits,
   "Vegetables":Vegetables}                      
print(a)   
               


    
    



        