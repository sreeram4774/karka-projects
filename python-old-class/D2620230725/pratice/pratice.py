# from datetime import datetime
# # curr_datetime=datetime(2023,7,23,11,12,13)
# # print(curr_datetime)
# curr_date=datetime(2023,7,23,11,12,13)
# now=datetime.now()
# print(now.strftime("%y"))
# print(now.strfdate("%D"))
# print(now.strftime("m"))
# print(now.strfdate("%d"))
from datetime import datetime
# datetime=a_datetime(2023,7,26,12,35,56)
# b=type(datetime.strftime("%Y"))
date_str="24 december 2023"
print(type(date_str))
a=datetime.strptime(date_str,"%d %B %Y")
print(type(a))
print(a)
# print(now.strftime("%Y"))
date=datetime.strptime(date_str,"%d %B %Y")
end_date=date+timedelta(days=5)
print(end.date)



