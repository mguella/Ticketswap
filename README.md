# Ticketswap
Identify a feature that is critical, define two scenarios and set up an automation test suit to cover these scenarios.
 
## Task description
A number of critical features can be indetified :   
Account functionality, Cart functionality, Page navigation, Login functionality, Page load times and more.    

The feature that was chosen to be tested as critical is the search bar/search functionality.  
As a user myself, I find it to be the most cornerstone feature and the first element that a user will most likely observe and interact.
It has a vital functionality, as it enables users to navigate to their desired event. 
Without the search bar users cannot search for events, the site becomes a random popular event generator and therefore transactions drop.  
The purpose was to evaluate standard and common actions so no assumptions were made in these scenarios.

## Solution & Test Scenarios

The solution is written in Javascript using Mocha test framework and Chai assertions library. Finally a report is generated and saved locally using Mochawesome.
Ideally the 

**Scenario #1 :** A user searches the site for an event.  
**Expected result :** The results of a search query should partially match the query itself.  
**Test Steps :** Landing page -> Enter query in search field -> Load more results -> Verify results contain the user's query

**Scenario #2 :** A user attempts to use the site search field.  
**Expected result :** The search field is empty and does not contain any characters.  
**Test Steps :** Landing page -> Select search field -> Verify element's text property is empty

## Information and future plans.
**Scalability :** 

-Test files should include specific features to be tested.  
-Additonal tests can be added in the relative file.  

**TODO:** 

-create BasePage with basic page constructor where other pages will be built from (driver instatiating, basic webdriver methods).  
-create any page object to inherit from base page and use the methods defined there to create the test methods.  
-create tests to inherit from the page they are testing.  
