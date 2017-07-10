#Example --> data:,Hello%2C World!%0A-Ean

def toHex(msg):
    '''
    This script transforms any string into an encoded URL
    '''
    result = ''
    for x in msg:
        result += '%' + hex(ord(x))[2:]
    return result
