consumerdata = {
    "consumer_name": "rahul",
    "eb_reading": [1100, 1200, 1350, 1650, 2050]
}

# def calculate_electricity_bill(consumer_data):
#     consumer_name = consumer_data["consumer_name"]
#     eb_reading = consumer_data["eb_reading"]

#     bill = ()
#     total_bill_amount = 0
# unit_counsumed=consumerdata["eb_reading"]    

# for unit in unit_counsumed:
#     if unit<=100:
#         bill.append=(0)
#     elif 100<unit<=200:
#         bill.append(units)*2     
#     elif 300<unit<=500:
#         bill.append(units)*5
#     elif 500<unit<=1000:
#         bill.append(units)*10
#     elif unit<=1000:
#         bill.append(units)*14
#     total_bill=sum("bill")
# print(total_bill)        

a=[]
for i in range(0,len(consumerdata["eb_reading"])-1):
    data=consumerdata["eb_reading"] [i+1]-consumerdata["eb_reading"][i]
    if data<=100:
        amount=0
    elif 100<data<=200:
        amount=(data)*2
    elif 200<data<=500:
        amount=(data)*5
    elif 500<data<=1000:
        amount=(data)*10
    elif data<=1000:
        amount=(data)*14
    month=(i+1)
    view={"month":month,
         "data":data,
         "amount":amount,}
    a.append(view)

print(a)   
# a_str=str(a)
# print(a)        



        

    

    
