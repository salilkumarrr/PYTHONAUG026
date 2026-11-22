# # print("hello from day4")

# 1.Encapsulation
# 2.polymerphysm
# 3.inheritance
# 4.abstraction


# Encapsulation
# Everything wrap inside the class data, attribute, methods, constructor

class BankAccount:
    bankName = "SBI"

    def __init__(self, name, amount=0):
        self.name = name
        self.amount = amount

    def deposit(self, amount):
        self.amount += amount


u1 = BankAccount("Soumya", 1000)

# Inheritance

# It allows one class to acquire attributes and methods from another class
# Single Inheritance ( one parent , one child)

# class Vehicle:  # Parent Class
#      color = "white"
#     def start(self):
#         print("Vehicle started")

#     def stop(self):
#         print("Vehicle stopped")


# class Bus(Vehicle):  # Child Class

#     def drive(self):
#         print("Bus is moving")


# b1 = Bus()

# b1.start()
# print(b1.color)

# Multiple Inheritance

class Camera:  # Parent Class

    def take_pic(self):
        print("Taking Photos")


class GPS:  # Parent Class

    def tracking_location(self):
        print("Location is tracking")


class SmartDevices(Camera, GPS):  # Child Class

    def connect(self):
        print("Devices connected")


sd = SmartDevices()

sd.take_pic()
sd.tracking_location()

# Multilevel Inheritance

class Vehicle:  # Parent Class

    def start(self):
        print("Vehicle Started")


class Car(Vehicle):

    def drive(self):
        print("Car is moving")


class EletricCar(Car):

    def charge(self):
        print("Car is charging...")

e1 = EletricCar()
e1.charge()