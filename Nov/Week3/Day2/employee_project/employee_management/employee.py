def add_employee():
    id = int(input("Enter Employee ID: "))
    name = input("Enter Employee Name: ")
    department = input("Enter Department: ")
    salary = float(input("Enter Monthly Salary: "))

    employee = {
        "id": id,
        "name": name,
        "department": department,
        "salary": salary
    }

    return employee


def display_employee(employee):
    print("\nEmployee ID:", employee["id"])
    print("Employee Name:", employee["name"])
    print("Department:", employee["department"])
    print("Monthly Salary:", employee["salary"])