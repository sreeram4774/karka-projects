# input("which year you passed out from college")
passed_out_yr=input("which year you passed out from college")
print(passed_out_yr)
type_of_passed_out_yr=type(passed_out_yr)
print(type_of_passed_out_yr)
int_passed_out_yr=int(passed_out_yr)
lasttype=type(int_passed_out_yr)
print(lasttype)
# print("pass out year", int_passed_out_yr)
if int_passed_out_yr>2020 :
    print("you are elegible")
else:
    print("you are not elegible")     
print("the program is done")



