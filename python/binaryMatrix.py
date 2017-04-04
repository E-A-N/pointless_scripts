ticTacToe   = 0
topLeft     = 0b100000000
topMid      = 0b10000000
topRight    = 0b1000000
midLeft     = 0b100000
midMid      = 0b10000
midRight    = 0b1000
bottomLeft  = 0b100
bottomMid   = 0b10
bottomRight = 0b1

ticTacToe += topLeft
ticTacToe += topMid
ticTacToe += topRight
ticTacToe += bottomRight

def bitCount(bit):
    count = 0
    while (bit > 1):
        bit/=2
        count += 1
    return count

def binaryMatrix(data):
    for i in data:
        print(i,end='')


#printTrix(ticTacToe)
print(bin(ticTacToe))
print(bitCount(ticTacToe))
