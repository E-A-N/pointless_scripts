def exp(root,rep,sum):
    if (rep > 0):
        return root + square(root,rep - 1,root * root)
    else:
        return sum
