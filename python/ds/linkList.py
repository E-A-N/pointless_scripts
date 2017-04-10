class LinkedList:
    def __init__(self):
        self.headLink = self.Node("tip",True,None)

    class Node:
        def __init__(self,name,head,nextNode):
            self.name = name
            self.head = head
            self.nextNode = nextNode

    def insertNode(self,name):
        return


ll = LinkedList()
print(ll.headLink.name)
