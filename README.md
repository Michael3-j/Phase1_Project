## I have created a news webapplication using my API key,the project siply allows the user tho access news articles that are provided in  the 
## url that i used.

## TXT file
It contains a sketch of what i should achive at the end.

## HTML 
I have designed a simple web page which entails
A container to hold the data 
A heading for my page 
A search bar input 
A text pad to enter reviews and a submit button
It also has some p tags and 2 form tags.

=>The linking of css and js has been made here.

## CSS
It contains basic styling for the elements in the html.

## JS
I have decleared my API Key and the url that holds the news article.
I have decleared the DOM with elements that i will use to manipulate with the js.
## I have divided my code into 4 sections namely;

i] Handle search form submission
ii] Fetch news articles
iii] Render articles to the page
iv] Handle reviews submission

=>In the first section I have add an event listener the will prevent refreshing the page will submitting the form.
I have decleared a function called fetchNews();

=>In the second section I have fetched data from the url decleared above and if the responce is not ok it should thow an error saying =Error fetching news. Please try again later.
I have decleared a function called renderArticles();

=>I have used .innerHTML to clear the previous articles and if the article is not found the function will return =The article is not available for now.
I have used the .forEach() method to handle each article individualy.At the end of the funtion i have used appendChild(); to add the multiple changes in the articleList.

=>In the last section i have added an event listener to the submit button and also added  preventDefault()
I have created a li tag in which the reviews will be appended and once the review is added it will return a message saying 'The Review added Successfuly!'.






