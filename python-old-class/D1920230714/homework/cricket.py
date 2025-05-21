players = [{'name': 'Virat Kohli', 'country': 'India', 'centuries': 70, 'half_centuries': 105, 'wickets_taken': 4, 'hat_tricks': 0, 'top5score': [254,150,200,180,260]},
           {'name': 'Steve Smith', 'country': 'Australia', 'centuries': 8, 'half_centuries': 43, 'wickets_taken': 17, 'hat_tricks': 1, 'top5score': [239,220,185,190,200]},
           {'name': 'Kane Williamson', 'country': 'New Zealand', 'centuries': 9, 'half_centuries': 54, 'wickets_taken': 9, 'hat_tricks': 6, 'top5score': [251,240,234,200,190]},
           {'name': 'Joe Root', 'country': 'England', 'centuries': 20, 'half_centuries': 49, 'wickets_taken': 18, 'hat_tricks': 0, 'top5score': [254,150,160,195,230]},
           {'name': 'Babar Azam', 'country': 'Pakistan', 'centuries': 18, 'half_centuries': 35, 'wickets_taken': 3, 'hat_tricks': 7, 'top5score':[185,200,220,230,160]}]


# for i,player in (players):
#     if more_than 10>centuries:
#         players=players("centuries")
for i in players:
    name=(i["name"])
    centuries=int(i["centuries"])
    if centuries>10:
        print(name,centuries)
    hat_tricks=int(i["hat_tricks"])
    if hat_tricks>5:
        print(name,hat_tricks)
    name=(i["name"])
    topsc=(i["top5score"])
    s=0        

