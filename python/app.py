import pandas as pd 
import re

Regex_Searcher = lambda title: re.search(r'\((\d{4})\)', title) 
Increment      = lambda var : var + 1
Data_Pointer = 'data/movies.csv'

def Ternary(condition, truthValue = True,falseValue = False):
    if condition:
      result = truthValue
    else:
      result = falseValue
    return result
    
def Get_Title_Year(title):
    year_regex = Regex_Searcher(title)
    if year_regex:
        return year_regex.group(1)
    else:
        return None

def Get_Count_Year(year):
    movie_titles = pd.read_csv(Data_Pointer)['title']
    total = 0
    for title in movie_titles:
        temp = Get_Title_Year(title)
        if  temp != None:
            total = Ternary(int(temp) == year, Increment(total), total)
    return total

def Genre_Iteration(genre):
    genres = pd.read_csv(Data_Pointer)['genres']
    iteration = 0
    for item in genres:
        iteration = Ternary(genre in item, Increment(iteration), iteration)
    return iteration
