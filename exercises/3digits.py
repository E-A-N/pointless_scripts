#When given a list of 3-5 digit integers, return the average of the sum of
#the first 3 digits of each integers in the reverse order.

def digitAv(ray):
    newList = []
    finalList = []
    digitSum = 0 #use this to add sum of integers
    averageSum = 0

    for i in ray:
        #check if integer contains more than 2 digits
        if i > 99: #or you can do => len(str(i)) > 2:
            #add 1st 3 digts to a new array in reversed order
            newList.append(str(i)[:3][::-1])
    #find sum of each array element's digits
    for i in newList:
        #loop through each digit sequence ex: "123"
        for x in i:
            #add parsed value to digitSum
            digitSum += int(x)
        #print(digitSum)
        finalList.append(digitSum)
        digitSum = 0
    for i in finalList:
        averageSum += i
    #find the final average by dividing total sum by amount of values
    averageSum = averageSum / len(finalList)
    return averageSum


ls = [123,123,456,7,8,1,999]
print(digitAv(ls))
