# 1.Encapsulation Product Management

class Product:
    def __init__(self, price):
        self.__price = price

    def update_price(self, price):
        self.__price = price

    def display_price(self):
        print("Product Price:", self.__price)

p1 = Product(2)
p1.display_price()

p1.update_price(4)
p1.display_price()

# 2.Single Inheritance Library

class Library:
    def library_info(self):
        print("Welcome to Salil's Library")

class BookSection(Library):
    def display_books(self):
        print("Available Books: SuperHero , Horror, Thriller")

b1 = BookSection()
b1.library_info()
b1.display_books()

# 3.Multiple Inheritance Smart Home

class Light:
    def light_on(self):
        print("Light is ON")

class Fan:
    def fan_on(self):
        print("Fan is ON")

class SmartHome(Light, Fan):
    def smart_control(self):
        print("Smart Home Activated")

s1 = SmartHome()
s1.light_on()
s1.fan_on()
s1.smart_control()

# 4.Multilevel Inheritance Education

class Education:
    def education_info(self):
        print("Education System")

class School(Education):
    def school_info(self):
        print("School Education")

class OnlineSchool(School):
    def online_info(self):
        print("Online Classes Available")

o1 = OnlineSchool()
o1.education_info()
o1.school_info()
o1.online_info()

# 5.Hierarchical Inheritance Vehicles

class Vehicle:
    def vehicle_info(self):
        print("This is a Vehicle")

class Car(Vehicle):
    def car_info(self):
        print("This is a Car")

class Bus(Vehicle):
    def bus_info(self):
        print("This is a Bus")

class Bike(Vehicle):
    def bike_info(self):
        print("This is a Bike")

c = Car()
c.vehicle_info()
c.car_info()

b = Bus()
b.vehicle_info()
b.bus_info()

bk = Bike()
bk.vehicle_info()
bk.bike_info()

# 6.Hybrid Inheritance Smart Devices

class Device:
    def device_info(self):
        print("This is a Smart Device")

class Computer(Device):
    def computer_info(self):
        print("This is a Computer")

class Television(Device):
    def television_info(self):
        print("This is a Television")

class SmartDevice(Computer, Television):
    def smart_info(self):
        print("Smart Device Activated")

s1 = SmartDevice()
s1.device_info()
s1.computer_info()
s1.television_info()
s1.smart_info()

# 7.Polymorphism Notification System

class EmailNotification:
    def send(self):
        print("Sending Email Notification")

class SMSNotification:
    def send(self):
        print("Sending SMS Notification")

class PushNotification:
    def send(self):
        print("Sending Push Notification")

e = EmailNotification()
s = SMSNotification()
p = PushNotification()

e.send()
s.send()
p.send()

# 8.Abstraction Online Booking

from abc import ABC, abstractmethod

class Booking(ABC):
    @abstractmethod
    def confirm_booking(self):
        pass

class HotelBooking(Booking):
    def confirm_booking(self):
        print("Hotel Booking Confirmed")

class FlightBooking(Booking):
    def confirm_booking(self):
        print("Flight Booking Confirmed")

h = HotelBooking()
h.confirm_booking()

f = FlightBooking()
f.confirm_booking()