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


def order(database, new_man, k):
    pd.DataFrame(database)
    
sequence = sorted(dic.items(), key=lambda x: x[1])
        max_data = max(count)  # find if there is two equal amount majorities. try to confirm if the tie at prediction exists.
        max_index =[i for i, j in enumerate(count) if j == max_data] 
        #print(max_index)
        
        position_dic = dict(zip(range(4), ['cheap', 'affordable', 'expensive', 'very expensive']))
        
        if len(max_index) == 1:  # if there is no tie at prediction time, return the result
            prediction = position_dic[max_index[0]]
            
        else:  # The judgement code to solve the ties at prediction time
            max_list = [position_dic[i] for i in max_index]  #find all existing majority labels
            #print(max_list)
            for label in selected_labels:    # check the selected labels list, find which label is the nearest since this list is sorted by the distance order
                if label in max_list:  
                    prediction = label
                    break

print(order(database, new_man))