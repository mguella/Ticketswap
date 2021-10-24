# Ticketswap
Identify a feature that is critical, define two scenarios and set up an automation test suit to cover these scenarios.
 
## Task description
A number of critical features can be identified :   
- User account functionality 
- Cart functionality 
- Page navigation 
- Login functionality 
- Page load times   

The feature that was chosen to be tested as critical is the search bar/search functionality.  

As a user myself, I find it to be the most essential feature and the first element that a user will most likely observe and interact.  
It has a vital functionality, as it enables users to navigate to their desired event. Without the search bar users cannot search for events, the site becomes a random popular event generator and therefore transactions drop.  

The purpose was to evaluate standard and common actions so no assumptions were made in these scenarios.

## Solution & Test Scenarios

To run the solution please follow these steps 
1.Download and unzip the contents  
2.Open console in said directory and run npm install    
3.Download chromedriver for your chrome version : https://chromedriver.chromium.org/downloads   
4.Add chromedriver to PATH (instructions : https://www.kenst.com/2015/03/including-the-chromedriver-location-in-macos-system-path/)  
5.npm test -- --grep "Assignment : Search field tests"  

The solution is written in Javascript with Selenium WebDriver using Mocha test framework, Chai assertion library and mochawesome for report generation.  
An alternative solution was written with Python with Selenium WebDriver and unittest framework.   
Javascript was selected as the solution was more finalized and the results were more presentable. 

**Scenario #1 :** Search field properly handled special characters.  
**Expected result :** The search functionality and the site continue to function properly without any error.  
**Test Steps :** Landing page -> Select search field -> Enter special characters in search field ->Load more results -> Ensure the first search result exists  
 TEXXTTTTT ABOUT list of things

**Scenario #2 :** A user searches the site for an event.  
**Expected result :** The results of a search query should partially match the query itself.  
**Test Steps :** Landing page -> Enter query in search field -> Load more results -> Verify results contain the user's query




