ticTacToe = 0b0
topLeft  = 0b100000000
topMid   = 0b10000000
topRight = 0b1000000
bottomRight = 0b1

ticTacToe += topLeft
ticTacToe += topMid
ticTacToe += topRight
ticTacToe += bottomRight

def printTrix(data):
    for i in data:
        print(i,end='')

print(bin(ticTacToe))
