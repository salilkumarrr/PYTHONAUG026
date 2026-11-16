#OPERATORS


# 1.write a program to add two numbers.

a = 10
b = 15
sum = (a+b)
print("Sum of a+b is ", sum)

# 2.Write a program to calculate the reminder of two number

c = 12
d = 6
remainder = (c%d)
print("Reminder of c and d is ",remainder)

# 3.Write a program to calculate square of a number

e = 25
f = (e*e)

print("Square of 25 is ",f)

# 4.Write a program to compare two numbers

g = 1
h = 2

print(g>h)
print(g<h)
print(g==h)

# 5.Write a program to check whether a number is between 10 & 50 using logical operators

num = 28

if num >=10 and num <=50:
    print("Number is  between 10 & 50")
else:
    print("Number is not between 10  & 50") 


#CONDITIONAL

# 1.Write a program to check whether a number is positive or negative

num = -1
if num>=0:
    print("This Number is positive.")
else:
    print("This Number is negative.")    

# 2.Write a program to check whether the number is even or odd

num = 9
if num % 2 == 0:
    print("This Number is Even")
else:
    print("This Number is Odd")

# 3.Write  a program to voting eligibility

age = 20

if age>=18:
    print("You are Eligible for Voting")
else:
    print("You are Not Eligible for Voting")

# 4.Write a program to  find the  largest of two number

j = 10
k = 12

if j>k:
    print("J is the largest")
else:
    print("K is the largest")

# 5.Write a program to calculate grades based on marks

Yourmark = 22

if Yourmark >= 90:
    print("Grade A") 
elif Yourmark >=80:
    print("Grade B")
elif Yourmark >=70:
    print("Grade C")
if Yourmark >=60:
    print("Grade D")
elif Yourmark >=50:
    print("Grade E")
elif Yourmark >=40:
    print("Justt Pass")
else:
    print("FAIL")

# 6.Write a program to check whether a number is positive ,or zero

num = 0
if num > 0:
    print("Number is Positive")
elif num < 0:
    print("Number is Negative")
else:
    print("ZERO")

# 7.Write a program to create a simple calculator using if elif else

m = 20
n = 10

operator = "+"

if operator == "+":
    print("Addition =", m + n)
elif operator == "-":
    print("Subtraction =", m - n)
elif operator == "*":
    print("Multiplication =", m * n)
elif operator == "/":
    print("Division =", m / n)
else:
    print("Invalid Operator")

# LOOP

# 1.print  numbers from 1 to 10 using loop method

for i in range(1,11):
    print(i)

# 2.print numbers from 10 to 1 using while loop

i = 10

while i>=1:
    print(i)
    i = i-1

# 3.print even numbers from 2 to 20

for i in range(2,21,2):
    print(i)

# 4.print odd number from 1 to 20

for i in range(1,20,2):
    print(i)

# 5.print the multiplication table of any  number

num = 12 

for i in range(1,11):
    print(num,"x",i,"=",num*i)

# 6.print the numbers from 5 to 25 with the step of 5

for i in range(5,26,5):
    print(i)

# 7.print the numbers from 5 to 1

for i in range(5,0,-1):
    print(i)

# 8.calculate the sum of numbers from 1 to 10

sum = 0

for i in range(1,11):
    sum = sum+i
print("Sum =",sum)

# 9.print the following pattern

for i in range(1,6,1):
    print(i)

# 10.print the following pattern

for i in range(1,6):
    print("*"* i)