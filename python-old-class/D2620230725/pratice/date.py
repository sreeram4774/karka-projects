# curr_date=date(2023.07.25)
# print(curr_date)
# curr_year=date.today().year.month.day
# curr_time=
# from datetime import date
# curr_date=date(2023,7,25)
# curr_time=time(11,12,13)
# curr_date=today().year.month.day
# print(curr_date)
# print(curr_time)
# print(curr_date)
# print(curr_date)
# Python program to

# from datetime import date
# today = date.today()
# print(today)
# from datetime import datetime
# today=datetime.now()
# print(today)
# days=str(input("enter days: ")) 1
# from datetime import datetime , timedelta
# time_for_now=datetime.now()
# toda=time_for_now+timedelta(days)
# print(timedelta)
# Timedelta function demonstration

from datetime import datetime, timedelta


# Using current time
ini_time_for_now = datetime.now()

# printing initial_date
print ("initial_date", str(ini_time_for_now))

# Calculating future dates
# for two years
future_date_after_2yrs = ini_time_for_now + \
						timedelta(days = 730)

future_date_after_2days = ini_time_for_now + \
						timedelta(days = 2)

# printing calculated future_dates
print('future_date_after_2yrs:', str(future_date_after_2yrs))
print('future_date_after_2days:', str(future_date_after_2days))


