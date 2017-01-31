#!/usr/bin/env python
import sys,time
import badwords as bad
from twython import Twython, TwythonError

def main():
    #Twitter Account & Application information
    apiKey =  'AeMlzYhePNOXXlk2CeofH4n9F'
    apiSecret =  'lRm3Wa3LB1p00UE460hh1hxQb44msBXyELS87DIsIkBvnViWlv'
    OwnerID = '4247734040'
    accessToken = '4247734040-F3gD4JgYbwpNuH5zBnOUY0JocyAf8NX4BSPYozO'
    #Access Token Secret (ats) below
    ats = 'cCNfYG5IXDgCQhCnBnGCnBpTJNajjq6FzAsmcDVVrhgSd'
    api = Twython(apiKey,apiSecret,accessToken,ats)
    #rate = api.get_lastfunction_header('x-rate-limit-remaining') #keep track of searches

    #Share a greeting before tweeting
    tweetStr = str(input("What do you wish to tweet?: "))
    if tweetStr != '':
        api.update_status(status=tweetStr)
        print("Tweeted: " + tweetStr)
        time.sleep(30)


    good_words = ["#python","#pythonprogramming","#django","#pythonista","#python3","#loveinpython","#linux","#raspberrypi",'#rpi']
    badwords  = bad.badwords #badwords is an array from 'badwords' module
    filter = " OR ".join(good_words)
    blacklist  = "-".join(badwords)
    
    keywords = filter + blacklist # + "-filter:retweets" + "-filter:replys"

    rate = 15
    while rate > 1:
        search_results = api.search(q=keywords,count = 15)
        try:
            for tweet in search_results["statuses"]:
                api.retweet(id = tweet["id_str"])
               # print("Retweeted: " + api.tweet['id_str'])
                time.sleep(5) #sleep 5 seconds, no lower to prevent violating twitter api rate limit  policies
        except TwythonError as e:
            print(e)
        rate -=1

if __name__ ==  '__main__':
    main()
