/*
Parent classes:
div id ='gs_bdy'
     gs_res_ccl
         gs_res_ccl_mid
            gs_r gs_or gs_scl 
            'gs_ri' is the class for each block of result
                gs_fl gs_flb contains the href link for 'Cited by 1234'


'gs_rt' stores title of search result, under <a> tag

what does the algorithm do?
 1. start from google scholar url already searching for papers with the search being 'AI nature'
 2. from the very first search result, grab the title  
 3. write the title on an html page
 4. [continuing with crawling] in the same result, look for all other papers citing 
    this current paper (condition: >20 citings; otherwise look for next search result fulfilling the same
    condition)
 5. repeat step 2

*/

//Axios supports features such as interceptors,
//handling request and response headers, and handling different types of data, like JSON
const axios = require('axios');

let webpage = 'https://scholar.google.com/scholar?hl=en&as_sdt=0%2C5&q=AI+nature&btnG=';

async function main() { 

    //download the HTML content from a web page
    //Axios allows you to perform an HTTP request to retrieve in just a few lines of code
    //pageHTML now stores the HTML content of webpage 'AI nature' search results.
    
	const pageHTML = await axios.get(webpage);

    //Cheerio is a library that allows you to work with HTML more conveniently. 
    //You can load HTML into Cheerio and then use its methods to find elements and extract information. 
    //The scraper will store the data in JSON files as objects with properties.
    const cheerio = require('cheerio'); 
 
    //initializing cheerio 
    //$ has all the search results loaded
    const $ = cheerio.load(pageHTML.data);

    //grabbing all titles
    //h3.gs_rt is the html element (h3 tag with class gs_rt) that stores the tag
    //space 'a' means the a tag under h3.gs_rt
    //const title = $('h3.gs_rt a');
    const text = $('h3.gs_rt a').nextUntil('div').addBack();
    console.log(text);
    /*

    const htmlOut = $.html($('h3.gs_rt a').nextUntil('div').addBack() + '\n');
    if (title.includes('</b>')){
            clean_title = title.replace('</b>', '')
        }

    The innerHTML property captures the HTML contents of an element. In contrast
    the outerHTML property captures the HTML that represents the element itself and its content.
    textContents is all text contained by an element and all its children that are for formatting purposes only.
    innerText returns all text contained by an element and all its child elements.
    innerHtml returns all text, including html tags, that is contained by an element
    */
    
    //we need outer html content from <a> hyperlink of title, text of title coupled with <b> tags, and the closing tags
    //text contains all of that
    //looping through just each of the title elements in the entire body of text
    for(var i = 0; i < text.length; i++){
        const title = $(text[i]).html();

        var clean_title = ''
        //cleaning the title for b tags
        //if we have (<b>) or (</b>) or (both <b> and </b>)
        if ( title.includes('<b>') || title.includes('</b>') || ( title.includes('<b>') && title.includes('</b>')) ){
            clean_title = title.replaceAll('<b>', '').replaceAll('</b>', '')
        }
        //console.log(clean_title);
    }

    //moving onto collecting more titles by finding next page to scrape
    async function findpage(){
        
        // (A) in the first page of results, look for publication with highest cited by (>500 people)

        //select all hyperlinks in the page
        const links = $('a');

        const citedbylinks = [];
        //looping through each link in the collection
        links.each((index, element) => {

            //.text() and .html() give innertext of all links. eg there is parent link (title) with children
            //links (authors, cited by, etc) but all the innertext is shown, including the children
            //no html tags are included hence innerhtml isnt used
            if ($(element).text().includes('Cited by')){
            //if the current element with a link is the cited by link

                //editing the text in the link to make it browsable
                var working_link = $(element).attr('href');
                working_link = working_link.replace('&oe=ASCII', '');
                working_link = 'https://scholar.google.com/' + working_link;

                //store a key value pair with the link and its respective cited by
                citedbylinks[working_link] = $(element).text();

                //checking if link has >500 citations
                //slicing the innertext to get exact number of citations
                const citations = Number($(element).text().slice(9));

                //if the first element we come across has >500 cit then remember this link
                //use this link for webpage variable declared at the start
                if (citations > 500){
                    webpage = working_link;
                    main();
                }
            }
        })
        
        //console.log(citedbylinks);
            //if cited by >500 isnt on page1, go to pg2/3/4....

                //click on that publ's cited by to see the next results

                    //repeat title extraction with those papers

        //if at any point we can't find a paper with >500 criteria, go to previous publ/parent publ
        //repeat (A) (but make sure to not enter the same link again for the above paper)
    }

    findpage()

}


 
main()
