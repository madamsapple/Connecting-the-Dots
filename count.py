import pandas as pd
data = pd.read_csv('blah.txt', encoding='unicode_escape')

df = pd.DataFrame(data, index=None)
cols = len(df.axes[1])
print(df)
print('columns: ' + str(cols))
count = 0
# with open('title_collection_final.txt', 'rb') as f:
#     if (byte := f.read(-1)):
#         print(byte)