def exp(root, rep, sum=0):
  if (sum == 0):
    sum = root
  if (rep > 1):
    return exp(root,rep - 1, sum * root)
  else:
    return sum
