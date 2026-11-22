# Function & Variable Scope

# 1. Check whether a number is Even or Odd

def even_odd(n):
    if n % 2 == 0:
        print("Even Number")
    else:
        print("Odd Number")

even_odd(10)

# 2. Find the Largest of Three Numbers

def largest(a, b, c):
    if a > b and a > c:
        print(a, "is largest")
    elif b > a and b > c:
        print(b, "is largest")
    else:
        print(c, "is largest")

largest(1, 2, 3)

#.3 Calculate Factorial

def factorial(n):
    fact = 1
    for i in range(1, n + 1):
        fact = fact * i
    print("Factorial =", fact)

factorial(5)

# 4. Check Whether a Number is Prime

def prime(n):
    if n <= 1:
        print("Not Prime")
    else:
        for i in range(2, n):
            if n % i == 0:
                print("Not Prime")
                break
        else:
            print("Prime Number")

prime(7)

# 5. Reverse a String

def reverse(s):
    print(s[::-1])

reverse("Salil")

# 6. Sum of All Elements in a List

def list_sum(numbers):
    total = 0
    for i in numbers:
        total = total + i
    print("Sum =", total)

list_sum([10, 20, 30, 40])

# 7. Calculator Using Separate Functions

def add(a, b):
    print("Addition =", a + b)

def subtract(a, b):
    print("Subtraction =", a - b)

def multiply(a, b):
    print("Multiplication =", a * b)

def divide(a, b):
    print("Division =", a / b)

add(10, 5)
subtract(10, 5)
multiply(10, 5)
divide(10, 5)

# 8. Using *args to Calculate Sum of Multiple Numbers

def total(*args):
    sum = 0
    for i in args:
        sum = sum + i
    print("Total =", sum)

total(10, 20, 30, 40, 50)

# 9. Using **kwargs to Display Student Details

def student(**kwargs):
    for key, value in kwargs.items():
        print(key, ":", value)

student(name="Rahul", age=20, course="Python", marks=85)

# 10. Recursive Function to Calculate Fibonacci Sequence

def fibonacci(n):
    if n <= 1:
        return n
    else:
        return fibonacci(n-1) + fibonacci(n-2)

for i in range(7):
    print(fibonacci(i), end=" ")


