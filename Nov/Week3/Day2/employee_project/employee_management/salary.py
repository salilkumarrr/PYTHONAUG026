def annual_salary(salary):
    return salary * 12


def calculate_bonus(salary):
    if salary < 15000:
        bonus = salary * 5 / 100
    elif salary <= 30000:
        bonus = salary * 10 / 100
    else:
        bonus = salary * 15 / 100

    return bonus