import csv

titles = {}

with open('phonebook.csv', 'r') as file:
    reader = csv.DictReader(file)
    for row in reader:
        name = row['Name'].strip().lower()
        if name in titles:
            titles[name] += 1
        else:
            titles[name] = 0
        
for title in sorted(titles):
    print(title, titles[title])
 