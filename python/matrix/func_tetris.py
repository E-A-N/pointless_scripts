
import os

#constants
row    = 16
column = 10
offset = 3

#Tetronimo Variables
#default position is [row 0,column 4], or [x4,y0], top mid screen
position = [0,5] #[row,column] (is referred to as "topLeft" in tutorial)
tetronimo = [
             [[1,1],
              [1,1]],

             [[1],
              [1],
              [1],
              [1]]


             ]

#Matrix Variables (nested array)
plane = [ [x for x in '0'*column] for x in range(row)] #creates Tetris grid using string repetition 
planeConversion = lambda x : 0 #anonymous function to convert data to int zero.
matrix = [ [planeConversion(x) for x in p] for p in plane] #convert the entire plane into ints

#3D (xyz coordinates) array
xyzPlane = [ list((x,y)) for x in range(row) for y in range(column)]
for z in xyzPlane: #Add the coordinate (0 signifies an empty space)
    z.append(0)

def tetrGenerator(tetrType):
    def typeGenerator(tetrType):
        if tetrType==1:
            yield [[1,1],[1,1],
                    [1,1],[1,1]]
        elif tetrType==2:
            yield [[1,1],
                   [1,1],
                   [1,1],
                   [1,1]]
        elif tetrType==3:
            yield [[1],
                   [1],
                   [1],
                   [1]]
    tetr = typeGenerator(tetrType)
    rowSize = len(tetr)
    columnSize = len(tetr)
    newTetr = list(map(lambda x: [1,1],tetr))
    #xyzTetr = [ list((x,y)) for x in range(rowSize) for y in range(columnSize)]
    yield newTetr
    

#scan tetronimos
def tetrScan(trix,tetr,function):
    whole =  1
    for i in tetr:
        if i == tetr[-1]:
            yield function(i)
            return
        #function(

#example argument for coord is position.  position = [0,5]
def drawTetr(tetr,coord,trix):
    #check if space is free
    #spaceCheck = lambda w: 
    truth    = lambda x: 1 #use to change indice values in map()
    trixFlow = lambda y: truth(y[2]) if y[:2] == coord  else 0 #check matrix for coordinates
    run      = lambda z: 1 if trixFlow(z)   else coord 
    return






