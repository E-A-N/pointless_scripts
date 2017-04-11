class LinkedList:
    def __init__(self):
        self.headLink = self.Node("tip",True)
        self.currentNode = self.headLink

    class Node:
        def __init__(self,name,head, nextNode = None, prevNode = None):
            self.name = name
            self.head = head
            self.nextNode = nextNode
            self.prevNode = prevNode

    def insertNode(self,name):
            cur = self.currentNode
            self.currentNode.nextNode = self.Node(name,False,None, cur)
            #automatically go to next node
            self.currentNode = self.currentNode.nextNode
            return

    def deleteCurrentNode(self):
            hereNode = self.currentNode
            prevNode = self.prevNode
            nextNode = self.nextNode
            if (nextNo != None):
                nextNo.prevNode = prev
            if (prevNo != None):
                prev.nextNode = nextNode



ll = LinkedList()
print(ll.currentNode.name)
ll.insertNode("Luffy! =D")
print(ll.currentNode.name)
print(ll.currentNode.prevNode.nextNode.prevNode.nextNode.prevNode.name)
#LOL



def runner():
    dataIn = input("Enter d to deleten\ni to insert\nq to quit")
    result = 1
    if (dataIn[0].lower() == 'i'):
        node = input("What is the name of the node: ")
        ll.insertNode(node)
    elif (dataIn[0].lower() == 'd'):
        input("Deleting Node...")
        ll.deleteCurrentNode()
    else:
        result = 0
    return result

while True():
    if runner() == 0:
        break
