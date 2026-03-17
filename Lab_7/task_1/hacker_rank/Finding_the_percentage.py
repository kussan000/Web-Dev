n = int(input())
student_marks = {}

for _ in range(n):
    parts = input().split()
    name = parts[0]
    marks = list(map(float, parts[1:]))
    student_marks[name] = marks

query_name = input()
average = sum(student_marks[query_name]) / len(student_marks[query_name])
print(f"{average:.2f}")
