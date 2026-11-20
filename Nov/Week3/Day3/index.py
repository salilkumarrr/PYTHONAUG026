# #oop
# #class

# class Employee:
#     name = "Salil"
#     emp_id = 1
#     salary = 50000
#     dept = "IT"

# emp1 = Employee()
# emp2 = Employee()

# print(emp1.name)
# print(emp1.emp_id)
# print(emp1.salary)
# print(emp1.dept)

# print("----------")

# print(emp2.name)

# method

# class Mobile:
#     brand = "iPhone"
#     price = 100000

#     def Ringing(self):
#         print("Incoming call")




# class Employee:

#     def __init__(self, name):
#         self.name = name
#         self.salary = 45000

#     def EmployeeDetails(self):
#         return f"Hi {self.name}, your salary is {self.salary}"


# emp1 = Employee("Salil")
# emp2 = Employee("Sameer")
# emp3 = Employee("Prakash sir")

# print(emp1.EmployeeDetails())
# print(emp2.EmployeeDetails())
# print(emp3.EmployeeDetails())

# make a calculator with multiple methods  like addition , subsr=tractionn,multipicatin,div
class Calculator:

    def __init__(salil, A, B):
        salil.s = A
        salil.t = B

    def addition(salil):
        return salil.s + salil.t

    def subtraction(salil):
        return salil.s - salil.t

    def multiplication(salil):
        return salil.s * salil.t

    def division(salil):
        return salil.s / salil.t


PrakashSir = Calculator(10000, 1)

print("Addition:", PrakashSir.addition())
print("Subtraction:", PrakashSir.subtraction())
print("Multiplication:", PrakashSir.multiplication())
print("Division:", PrakashSir.division())

# make a class for bank passbook where passholder,user can deposite,user can withdraw,user can view balance

class Bank:

    def __init__(self, name, balance=0):
        self.name = name
        self.balance = balance

    def deposit(self, amount):
        self.balance += amount
        return f"Rs.{amount} deposited successfully"

    def withdraw(self, amount):
        if amount <= self.balance:
            self.balance -= amount
            return f"Rs.{amount} withdrawn successfully"
        else:
            return "Insufficient Balance"

    def view_balance(self):
        return f"Account Holder: {self.name}\nAvailable Balance: Rs.{self.balance}"


user1 = Bank("Salil", 5000000)

print(user1.deposit(2000))

print(user1.withdraw(1000))

print(user1.view_balance())

