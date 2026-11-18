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
