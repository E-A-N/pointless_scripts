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




ll = LinkedList()
print(ll.currentNode.name)
ll.insertNode("Luffy! =D")
print(ll.currentNode.name)
print(ll.currentNode.prevNode.nextNode.prevNode.nextNode.prevNode.name)
#LOL
