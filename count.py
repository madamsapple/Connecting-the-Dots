from ast import literal_eval
import re

#file already has list of strings. open that list instead of converting all data
#into one string
with open('scraped_titles.txt', 'r') as f:
  data = literal_eval(''.join(f.readlines()))

#dict that stores all unique words from the data (keys) and their word count (values)
uniq_words = {}

#loop through each title in the giant list ['ai nature', '', '']
for title in data:

    try:
        #iterating through each word in the title
        #[] means any delimiter in that list will be used for separation
        #\s is whitespace
        #r means a pattern i think
        for word in re.split(r"[-:,.?'()/\s]", title):

            #first check if word already exists in the dictionary
            if word.lower() in uniq_words.keys():
                #add 1 to the count of that word
                uniq_words[word.lower()] += 1
            
            #else if word does not exist yet in the dictionary
            else:
                #add the word to the dictionary as a key
                #make sure invalid spaces or symbols doesnt go in
                if str(word).isalpha() or (str(word)).isdigit():
                    uniq_words.update({word.lower(): 1})
                # else: this checks what the outlier words are
                #     print(word)

    #print error is re.split acts up
    except Exception as e: print(e)
    
#how many items in the dict
#print(len(uniq_words))

#once all above code runs, dict is updated, check for edge cases in dict:
#check if there are blank values
# for word in uniq_words.keys():

#     #if both conditions are false: a word's character (contd in nextline)
#     #(char type is STRING therefore isalpha will only check for string types) does not have an alphabet a-z

#     #isdigit also accepts string input. checks if string contains a digit 0-9
#     #basically only accept numbers and text

#     #if not means false
#     if not str(word).isalpha() and not (str(word)).isdigit():
#         #print(word.isalpha())
#         #print((str(word)).isdigit())
#         #print("key: " + str(word) + ", " + "value: " + str(uniq_words[word]))
        
#         #remove invalid keys and values
#         uniq_words.pop(word)

print(uniq_words)
print(len(uniq_words))



