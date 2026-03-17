n = int(input())
scores = list(map(int, input().split()))

first_max = max(scores)
runner_up = max(score for score in scores if score < first_max)

print(runner_up)