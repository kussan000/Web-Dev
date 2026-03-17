from itertools import product

k, m = map(int, input().split())
lists = []

for _ in range(k):
    lst = list(map(int, input().split()))
    lists.append(lst[1:]) 

max_value = 0
for combination in product(*lists):
    value = sum(x**2 for x in combination) % m
    if value > max_value:
        max_value = value

print(max_value)