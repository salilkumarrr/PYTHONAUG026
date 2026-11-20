# list

# 1.create a list of 10 numbers and print all numbers using for loop

MyNumbers = [1,2,3,4,5,6,7,8,9,10]

for n in range (1,11):
    print(n)
# 2.Write a program to print only even and odd numbers from a list.in python

YourNumbers = [10,20,13,11,24,23,18,17]

print("Even Numbers")
for num in YourNumbers:
    if num % 2 == 0:
        print(num)
print("Odd Numbers")
for num in YourNumbers:
    if num % 2 != 0:
        print(num)


# 3.find the largest & smallest numbers ina list using 

OurNumbers = [100,200,300,400,500,600,1,2,3,4]

largest = OurNumbers[0]
smallest = OurNumbers[0]

for num in OurNumbers:
    if num > largest:
        largest = num

    if num < smallest:
        smallest = num

print("Largest Number is : ", largest)
print('Smallest Number is :', smallest)

# 4.Count how many times a particular number appears in a list

numbers = [10, 20, 30, 20, 40, 10, 50,10]

count = 0
search = 10

for num in numbers:
    if num == search:
        count += 1

print("Number appears:", count, "times")

# 5.Write a function to calculate the sum of all elements in a list without using sum().

def calculate_sum(numbers):
    total = 0

    for num in numbers:
        total += num

    return total


numbers = [1, 2, 3, 4, 5]

result = calculate_sum(numbers)

print("Sum of all elements:", result)

# 6.Find the second-largest number in a list without using sort() or max().

numbers = [10, 25, 40, 15, 30, 31]

largest = numbers[0]
second_largest = numbers[0]

for num in numbers:
    if num > largest:
        second_largest = largest
        largest = num

    elif num > second_largest and num != largest:
        second_largest = num

print("Second largest number:", second_largest)

# 7.Remove duplicate elements from a list without using set().

numbers = [10, 20, 30, 20, 40, 10, 31]

new_list = []

for num in numbers:
    if num not in new_list:
        new_list.append(num)

print("Original list:", numbers)
print("New list:", new_list)

# 8.Separate positive, negative and zero values into three different lists.

numbers = [1, -2, 0, 20, -3, 0, 3, -4]

positive = []
negative = []
zero = []

for num in numbers:
    if num > 0:
        positive.append(num)

    elif num < 0:
        negative.append(num)

    else:
        zero.append(num)

print("Positive numbers:", positive)
print("Negative numbers:", negative)
print("Zero values:", zero)

# 9.Find the common elements between two lists without using intersection().

list1 = [10, 20, 30, 40, 50]
list2 = [20, 40, 1, 2, 3]

common = []

for num in list1:
    if num in list2:
        if num not in common:
            common.append(num)

print("Common elements:", common)

# 10.Write a function to check whether a list is a palindrome.

def check_palindrome(numbers):
    if numbers == numbers[::-1]:
        print("List is a Palindrome")
    else:
        print("List is not a Palindrome")


numbers = [1, 2, 3, 2, 1]

check_palindrome(numbers)

# Tuple

# 1.Create a tuple of 10 numbers and print all elements using a for loop.

numbers = (10, 20, 30, 40, 50, 60, 70, 80, 90, 100)

for num in numbers:
    print(num)

# 2.Print all elements along with their index using enumerate().

numbers = [10,20,30,40,50]

for index,num in enumerate (numbers):
    print(index,num)

# 3.. Find the largest and smallest numbers in a tuple using a loop.

numbers = (10, 20, 30, 40, 50, 60, 70, 80, 90, 100)

largest = numbers[0]
smallest = numbers[0]

for num in numbers:
    if largest < num:
        largest = num

    if smallest > num:
        smallest = num

print("The largest nummber is :",largest)
print("The smalllest number is :",smallest)

# 4.Count how many times a particular number appears using count().

numbers = (10, 20, 30, 40, 50, 60, 70, 80, 90, 10)

count = numbers.count(10)

print("The count is ",count,"times")

# 5.Calculate the sum of all tuple elements without using sum().

numbers = (10, 20, 30, 40, 50)

total = 0

for num in numbers:
    total = total + num

print("Total:", total)

# 6.Find the second-largest number in a tuple without using sort() or max().

numbers = (10,20,30,40,50,60)

largest = numbers[0]
second_largest = numbers[0]

for num in numbers:
    if num > largest:
        second_largest = largest
        largest = num

    elif num > second_largest and num != largest:
        second_largest = num

print("Second Larges ist:", second_largest)

# 7.Find all duplicate elements in a tuple.

numbers = (10, 20, 30, 20, 40, 10, 50)

duplicates = []

for num in numbers:
    if numbers.count(num) > 1 and num not in duplicates:
        duplicates.append(num)

print(duplicates)

# 8.. Check whether a tuple is a palindrome without using slicing.

numbers = (10, 20, 30, 20, 10)

reverse = ()

for num in numbers:
    reverse = (num,) + reverse

if numbers == reverse:
    print("Palindrome")
else:
    print("Not Palindrome")

# 9.Find the common elements between two tuples using loops.

tuple1 = (10, 20, 30, 40, 50)
tuple2 = (30, 40, 50, 60, 70)

common = []

for num in tuple1:
    if num in tuple2 and num not in common:
        common.append(num)

print(common)

# 10.Separate even and odd numbers from a tuple into two different lists.

numbers = (10, 15, 20, 25, 30, 35, 40)

even = []
odd = []

for num in numbers:
    if num % 2 == 0:
        even.append(num)
    else:
        odd.append(num)

print("Even numbers are :", even)
print("Odd numbers are :", odd)

# Set

# 1.Create a set of 10 numbers and print all elements using a for loop.

numbers = {10, 20, 30, 40, 50, 60, 70, 80, 90, 100}

for num in numbers:
    print(num)

# 2.Create two sets and find their union.

set1 = {10, 20, 30, 40}
set2 = {30, 40, 50, 60}

result = set1.union(set2)

print(result)

# 3.Find the common elements between two sets using intersection().

set1 = {10, 20, 30, 40}
set2 = {30, 40, 50, 60}

result = set1.intersection(set2)

print(result)

# 4.Find the difference between two sets using difference().
#from set1 to set2

set1 = {10, 20, 30, 40}
set2 = {30, 40, 50, 60}

result = set1.difference(set2)

print(result)

# from set2 to set1

set1 = {10, 20, 30, 40}
set2 = {30, 40, 50, 60}

result = set2.difference(set1)

print(result)

# 5.Find the largest and smallest numbers in a set using a loop.

numbers = {10, 50, 20, 80, 5, 40}

largest = None
smallest = None

for num in numbers:
    if largest is None or num > largest:
        largest = num

    if smallest is None or num < smallest:
        smallest = num

print("Largest:", largest)
print("Smallest:", smallest)

# 6.Find common elements between two sets without using intersection().

set1 = {10, 20, 30, 40}
set2 = {30, 40, 50, 60}

common = set()

for num in set1:
    if num in set2:
        common.add(num)

print(common)

# 7.Find the union of two sets without using union().

set1 = {10, 20, 30, 40}
set2 = {30, 40, 50, 60}

result = set1.copy()

for num in set2:
    result.add(num)

print(result)

# 8.Check whether two sets are equal without using the == operator.

set1 = {10, 20, 30, 40}
set2 = {40, 30, 20, 10}

if set1.issubset(set2) and set2.issubset(set1):
    print("Both sets are equal")
else:
    print("Both sets are not equal")

# 9.Find the elements that are present in exactly one of three sets.

set1 = {10, 20, 30}
set2 = {20, 30, 40}
set3 = {30, 40, 50}

result = set()

for num in set1.union(set2, set3):
    count = 0

    if num in set1:
        count += 1

    if num in set2:
        count += 1

    if num in set3:
        count += 1

    if count == 1:
        result.add(num)

print(result)

# 10.Find the common characters between two strings using sets.

str1 = "salil"
str2 = "kumar polai"

set1 = set(str1)
set2 = set(str2)

common = set1.intersection(set2)

print(common)

# Dictionary

# 1.Create a dictionary containing 5 students and their marks. Print all keys and values using a loop.

students = {
    "John Cena": 85,
    "Great Khali": 70,
    "Brock Lesner": 90,
    "Undertaker": 35,
    "KING": 60
}

for name, marks in students.items():
    print(name, marks)

# 2.Add a new key called city to an existing dictionary.

student = {
    "name": "Salil",
    "age": 20,
    "marks": 85
}

student["city"] = "Berhampur"

print(student)

# 3.. Update the marks of a particular student.

students = {
    "Salil": 85,
    "Rahul": 70,
    "Aman": 90
}

students["Rahul"] = 95

print(students)

# 4.Find the total marks of all students without using sum().

students = {
    "Salil": 85,
    "Prakash sir": 70,
    "Saltun": 90,
    "Kumar": 35,
    "Sameer": 60
}

total = 0

for marks in students.values():
    total = total + marks

print("Total Marks:", total)

# 5.Count how many students passed and failed. Consider 40 as the passing mark

students = {
    "Salil": 85,
    "KING": 70,
    "DOOMSDAY": 90,
    "JOHN": 35,
    "Sameer": 30
}

passed = 0
failed = 0

for marks in students.values():
    if marks >= 40:
        passed += 1
    else:
        failed += 1

print("Passed:", passed)
print("Failed:", failed)

# 6.Find the student with the highest and lowest marks without using max() or min().

students = {
    "Salil": 85,
    "John Cena": 70,
    "Under Taker": 90,
    "Great Khali": 35,
    "Sameer": 60
}

highest = None
lowest = None

for name, marks in students.items():
    if highest is None or marks > highest[1]:
        highest = (name, marks)

    if lowest is None or marks < lowest[1]:
        lowest = (name, marks)

print("Highest:", highest)
print("Lowest:", lowest)

# 7.Find the second-highest marks from a student dictionary.

students = {
    "Salil": 85,
    "John": 70,
    "UnderTaker": 90,
    "Great Khali": 35,
    "Sameer": 60
}

highest = 0
second_highest = 0

for marks in students.values():
    if marks > highest:
        second_highest = highest
        highest = marks

    elif marks > second_highest:
        second_highest = marks

print("Second Highest:", second_highest)

# 8.Create a new dictionary containing only students who scored more than 75.

students = {
    "Salil": 85,
    "John": 70,
    "Undertaker": 90,
    "Great Khali": 35,
    "Sameer": 60
}

new_students = {}

for name, marks in students.items():
    if marks > 75:
        new_students[name] = marks

print(new_students)

# 9.Find the frequency of each character in a string and store it in a dictionary.

text = "John"

frequency = {}

for char in text:
    if char in frequency:
        frequency[char] += 1
    else:
        frequency[char] = 1

print(frequency)

# 10.Merge two dictionaries without using the update() method.

dict1 = {
    "name": "Salil",
    "age": 20
}

dict2 = {
    "city": "Berhampur",
    "marks": 85
}

result = dict1.copy()

for key, value in dict2.items():
    result[key] = value

print(result)




