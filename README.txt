Instructions to run : 


A number of critical features can be indetified : Page load, Account functionality, Cart functionality, Page navigation etc.
The feature that was chosen to be tested is the search bar. 
As a user myself, I find it to be the most cornerstone feature of the site.
It is a vital functionality, as it enables users to navigate to their desired event. 
Without the search bar users cannot search for events, the site becomes a random popular event generator and therefore ticket sales will drop.
The purpose was to evaluate standard and common actions so no assumptions were made in these scenarios

Scenario #1 : A user searches the site for an event
Expected result : The results of a search query should partially match the query itself

Scenario #2 : A user attempts to use the site search field
Expected result : The search field is empty and does not contain any characters.


Scalability : 

Test files should include specific features to be tested.
Additonal tests can be added in the relative file.

TODO: 
create BasePage with basic page constructor where other pages will be built from (driver instatiating, basic webdriver methods)
create any page object to inherit from base page and use the methods defined there to create the test methods
create tests to inherit from the page they are testing