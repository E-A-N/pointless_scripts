ticTacToe = 0b0
topLeft  = 0b100000000
topMid   = 0b10000000
topRight = 0b1000000
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

def printTrix(data):
    for i in data:
        print(i,end='')


#printTrix(ticTacToe)
print(bin(ticTacToe))
print(bitCount(ticTacToe))
