from ast import literal_eval
import re
import json

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


#----THIS IS NOT RUN SINCE EDGE CASES ARE DIRECTLY CHECKED FOR IN MAIN LOOP ABOVE
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

#print(uniq_words)
#count the total number of unique words across titles - 1940 latest
print(len(uniq_words))

#count no of titles - 508 latest
# count = 0
# for title in data:
#     count +=1
# print(count)

#create new dict with unique words that have more than 1 occurence
morethanonce = {}
for word in uniq_words:
    #here word is key not value of dict

    #if value of word is more than 1
    if uniq_words[word] > 1:
        morethanonce.update({word: uniq_words[word]})

#print(morethanonce)
#print(len(morethanonce))



#SECTION 2------ finding matches


