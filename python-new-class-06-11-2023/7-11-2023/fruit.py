items = [
    {"name": "Apple", "category": "Fruits"},
    {"name": "Carrot", "category": "Vegetables"},
    {"name": "Banana", "category": "Fruits"},
    {"name": "Broccoli", "category": "Vegetables"},
]
Fruits=[]
vegetables=[]
for i in items:
    if i["category"]=="Fruits":
        Fruits.append(i["name"])
    elif i["category"]=="Vegetables":
        vegetables.append(i["name"])
   
print( "fruits",Fruits)
print("vegetables",vegetables)