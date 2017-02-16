'''
    Write a recursive function to get the product of 2 numbers
'''

def product(a,b,c):
    if b - 1 > 0:
        return product(a + c, b - 1, c)
    elif b-1 == 0:
          return a
    elif b == 0:
          return 0
          
product(102,5,102) #510
product(9999,0,9999) #0
