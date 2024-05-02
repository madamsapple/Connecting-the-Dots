import pandas as pd
data = pd.read_csv('titles_collection_1.txt', encoding='unicode_escape')

print(data)
count = 0
# with open('title_collection_final.txt', 'rb') as f:
#     if (byte := f.read(-1)):
#         print(byte)