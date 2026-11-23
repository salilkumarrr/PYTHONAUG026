import json

from employee_management.employee import add_employee, display_employee
from employee_management.salary import annual_salary, calculate_bonus
from employee_management.department import search_department, highest_paid


def load_employees():
    try:
        with open("employees.json", "r") as file:
            return json.load(file)
    except FileNotFoundError:
        return []


def save_employees(employees):
    with open("employees.json", "w") as file:
        json.dump(employees, file, indent=4)


employees = load_employees()

while True:
    print("\n===== EMPLOYEE MANAGEMENT SYSTEM =====")
    print("1. Add Employee")
    print("2. Display Employee Details")
    print("3. Calculate Annual Salary")
    print("4. Calculate Employee Bonus")
    print("5. Search Employees by Department")
    print("6. Find Highest-Paid Employee")
    print("7. Exit")

    choice = int(input("\nEnter your choice: "))

    if choice == 1:
        emp = add_employee()
        employees.append(emp)
        save_employees(employees)
        print("Employee Added Successfully")

    elif choice == 2:
        if len(employees) == 0:
            print("No Employee Available")
        else:
            for emp in employees:
                display_employee(emp)

    elif choice == 3:
        emp_id = int(input("Enter Employee ID: "))

        for emp in employees:
            if emp["id"] == emp_id:
                print("Annual Salary:", annual_salary(emp["salary"]))
                break
        else:
            print("Employee Not Found")

    elif choice == 4:
        emp_id = int(input("Enter Employee ID: "))

        for emp in employees:
            if emp["id"] == emp_id:
                print("Employee Bonus:", calculate_bonus(emp["salary"]))
                break
        else:
            print("Employee Not Found")

    elif choice == 5:
        dept = input("Enter Department: ")
        print("\nEmployees in", dept, "Department:")
        search_department(employees, dept)

    elif choice == 6:
        highest_paid(employees)

    elif choice == 7:
        print("Thank You!")
        break

    else:
        print("Invalid Choice")