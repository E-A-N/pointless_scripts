def ternary(condition,truthValue = True,falseValue = False):
    if condition:
      result = truthValue
    else:
      result = falseValue
    
    return result

num = 5
numIsNine = ternary(num == 9)
print(numIsNine)

num = 9
numIsNine = ternary(num == 9, "Yep, num is 9!!", "Nope! :(")
print(numIsNine)
