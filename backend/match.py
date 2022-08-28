import math
import numpy as np
import pandas as pd


database = [[100,1,2,3,4,5,6],[101,2,2,4,5,6,7],[102,3,6,9,5,1,2],[103,4,5,1,3,4,9]]
new_man = [1,5,9,2,5,7]



def euclidean_distance(fw1, fw2):
    # insert code here
    
    distance = 0
    for i, j in zip(fw1, fw2):
        distance = distance + math.pow((i-j), 2)
    distance = math.sqrt(distance)
    return distance


def order(database, new_man):
    df = pd.DataFrame(database)

    i = 0
    distance_list = []
    while i < len(database):
        temp_vec = df.iloc[i, 1:].tolist()
        distance = euclidean_distance(temp_vec, new_man[1:])
        i = i+1
        distance_list.append(distance)

    df['distance'] = distance_list

    df = df.sort_values(by=['distance'])

    

    return df.iloc[:, 0].tolist()
    



print(order(database, new_man))