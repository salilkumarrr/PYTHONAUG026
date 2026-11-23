def search_department(employees, department):
    found = False

    for emp in employees:
        if emp["department"].lower() == department.lower():
            print(emp["name"], "-", emp["salary"])
            found = True

    if found == False:
        print("No Employee Found")


def highest_paid(employees):
    if len(employees) == 0:
        print("No Employee Available")
        return

    highest = employees[0]

    for emp in employees:
        if emp["salary"] > highest["salary"]:
            highest = emp

    print("\nHighest Paid Employee:")
    print("Name:", highest["name"])
    print("Department:", highest["department"])
    print("Monthly Salary:", highest["salary"])