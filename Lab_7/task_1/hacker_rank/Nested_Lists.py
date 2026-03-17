n = int(input())
students = []

for _ in range(n):
    name = input()
    grade = float(input())
    students.append([name, grade])

unique_grades = sorted({grade for name, grade in students})
second_lowest = unique_grades[1]

names = sorted([name for name, grade in students if grade == second_lowest])

for name in names:
    print(name)