import csv
from random import randint
import numpy

labels = ['finance', 'marketing', 'inovation']
row_number = 1000
category_number = len(labels)
questions_per_category = 5
input_length = category_number * questions_per_category

def random_values():
    value = randint(1, 5)
    return value

def random_answer(input_length):
    answer = []
    for _ in range(input_length):
        answer.append(random_values())
    return answer

def header_generator(category_number, questions_per_category):
    header = []
    for c in range(1,category_number+1):
        for q in range(1,questions_per_category+1):
            header.append('c{}q{}'.format(c,q))
    header.append('label')
    return header

def label_answer(answer, labels, input_length):
    sum = []
    for i in range(0,input_length-1,questions_per_category):
        sum.append(numpy.sum(answer[i:i+2]))
    return labels[numpy.argmin(sum)]

header = header_generator(category_number=category_number, questions_per_category=questions_per_category)
with open('dataset.csv', 'w') as csvfile:
    writer = csv.writer(csvfile,lineterminator='\n')
    writer.writerow(header)
    for _ in range(row_number):
        answer = random_answer(input_length=input_length)
        label = label_answer(answer=answer, labels=labels, input_length=input_length)
        answer.append(label)
        writer.writerow(answer)

