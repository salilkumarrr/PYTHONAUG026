# list

# fruits =["Apple","Orange",'fruit1',"fruit2","fruit3"]
# for i,fruit in enumerate(fruits):
#     print(i+1,"->",fruit)

# # set
# fruits = {"Apple","orange","fruit1","fruit2","fruit3"}
# for fruit in fruits:
#     print(fruits)

# # Dict
# student = {
#     "name": "Rahul",
#     "age": 21,
#     "city": "BBSR"
# }

# for key in student:
#     print(key)

# for key, val in student.items():
#     print(key, 'is', val)

# function

#  def welcome():
#     print("Welcome to Python")
#  welcome()

# Argument
# Positional Argumet

# def welcome_with_name(name = "Default name",city="Default City",age=0):
#     print("welcome ",name)
#     print("City ",city)
#     print("Age ",age)

# welcome_with_name("Salil","Berhampur",20)

# Keyword Argument

# welcome_with_name(age=20,name="Salil",City="Berhampur")

# Default Argument
# welcome_with_name()

# Variable Length Argument

# def showArgs(*numbers):
#     for i in numbers:
#         print(i)

# showArgs(10,20,30,40)

# Local scope

# def welcomeMsg():
#     msg = "Welcome to"
#     print(msg)
#     welcomeMsg()

#Return
# def welcome():
#     return "Welcome to Python"

# res = welcome()
# print(res)

#write function with a arg, that return a number is even or odd

def check_number(num):
    if num % 2 == 0:
        return "Even"
    else:
        return "Odd"

result = check_number(2)
print(result)

# write a function that take a list of numbers and return latgest number

# def our_largest(numbers):
#     largest = numbers[0]

#     for num in numbers:
#         if num > largest:
#             largest = num

#     return largest

# result = our_largest([10, 20, 500, 300, 1111])
# print(result)

#print the write a function that list of numbers and return largest and smallest

def our_numbers(numbers):
    largest = numbers[0]
    smallest = numbers[0]

    for num in numbers:
        if num > largest:
            largest = num

        if num < smallest:
            smallest = num

    return largest, smallest

result = our_numbers([10, 20, 500, 300, 1111])
print(result)





#voting eligibilty

# def voting_eligibility(age):
#     if age >= 18:
#         return "Eligible for voting"
#     else:
#         return "Not eligible for voting"

# result = voting_eligibility(17)
# print(result)

# def voting_eligibility(age):
#     if age >= 18:
#         return "Eligible for voting"
#     else:
#         return "Not eligible for voting"

# result = voting_eligibility(19)
# print(result)

def voting_eligibility(age):
    if age >= 18:
        return "Just 18"
    else:
        return "Not eligible for voting"

result = voting_eligibility(18)
print(result)


#Grade

def your_grade(mark):
    if mark >= 90 and mark <= 100:
        return "A Grade"
    elif mark >= 80 and mark <= 89:
        return "B Grade"
    elif mark >= 70 and mark <= 79:
        return "C Grade"
    elif mark >= 60 and mark <= 69:
        return "D Grade"
    elif mark >= 50 and mark <= 59:
        return "E Grade"
    else:
        return "Fail"

result = your_grade(1)
print(result)

#6. write a function that takes a number list and show the numbers are even or odd 
# numbers = [10, 20, 500, 300, 1111]

def our_even_odd(numbers):
    for num in numbers:
        if num % 2 == 0:
            print(num, "is Even")
        else:
            print(num, "is Odd")

numbers = [10, 20, 500, 300, 1111]

our_even_odd(numbers)

# 7. write a function that takes a number list and show how many even and odds are there
# numbers = []10,11,530,320,112,30,10]

def our_even_odd(numbers):
    even = 0
    odd = 0

    for num in numbers:
        if num % 2 == 0:
            even += 1
        else:
            odd += 1

    print("Even numbers:", even)
    print("Odd numbers:", odd)


numbers = [10, 11, 530, 320, 111, 30, 10]

our_even_odd(numbers)

#8 write a function with n as arg, that show the multiple table


def _5ja(n):
    for i in range(1, 11):
        print(n, "x", i, "=", n * i)

_5ja(5)
