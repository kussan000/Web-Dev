from itertools import groupby

s = input()

for char, group in groupby(s):
    print((len(list(group)), int(char)), end=" ")