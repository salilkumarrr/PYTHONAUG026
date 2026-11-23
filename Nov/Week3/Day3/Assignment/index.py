# 1. Book Details

class Book:
    def __init__(self, name, author, price):
        self.name = name
        self.author = author
        self.price = price

    def display(self):
        print("Book Name:", self.name)
        print("Author Name:", self.author)
        print("Price:", self.price)

b1 = Book("Python", "Salil Kumar Polai", 500)
b1.display()

# 2.Rectangle

class Rectangle:
    def __init__(self, length, width):
        self.length = length
        self.width = width

    def area(self):
        print("Area =", self.length * self.width)

    def perimeter(self):
        print("Perimeter =", 2 * (self.length + self.width))

r1 = Rectangle(10, 5)
r1.area()
r1.perimeter()

# 3.Movie Ticket

class MovieTicket:
    def __init__(self, name, price):
        self.name = name
        self.price = price

    def display(self):
        print("Movie Name:", self.name)
        print("Ticket Price:", self.price)

    def total_price(self, quantity):
        print("Total Price =", self.price * quantity)

m1 = MovieTicket("KING", 300)
m1.display()
m1.total_price(3)

# 4.Electricity Bill

class ElectricityBill:
    def __init__(self, name, units):
        self.name = name
        self.units = units

    def calculate_bill(self):
        bill = self.units * 5
        print("Customer Name:", self.name)
        print("Units Consumed:", self.units)
        print("Total Bill: Rs.", bill)

e1 = ElectricityBill("Rahul", 100)
e1.calculate_bill()

# 5.Shopping Cart

class ShoppingCart:
    def __init__(self, name, price, quantity):
        self.name = name
        self.price = price
        self.quantity = quantity

    def display(self):
        print("Product Name:", self.name)
        print("Price:", self.price)
        print("Quantity:", self.quantity)

    def calculate_total(self):
        total = self.price * self.quantity

        if total > 5000:
            discount = total * 10 / 100
            total = total - discount

        print("Total Price:", total)

s1 = ShoppingCart("Laptop", 6000, 1)
s1.display()
s1.calculate_total()