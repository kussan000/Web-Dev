from itertools import combinations

n = int(input())
letters = input().split()
k = int(input())

total_combinations = list(combinations(range(n), k))

favorable = [comb for comb in total_combinations if any(letters[i] == 'a' for i in comb)]

prob = len(favorable) / len(total_combinations)

print(f"{prob:.3f}")