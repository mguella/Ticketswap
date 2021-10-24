const { Builder, By, Key, until } = require("selenium-webdriver");
var expect = require("chai").expect;
var driver;

//desribe block
describe("Assignment : Search field tests", async function () {

  //before every it block
  beforeEach(async() =>{
    driver = await new Builder().forBrowser("chrome").build();
    driver.get("https://www.ticketswap.com/");
  });

  //after every it block
  afterEach(async()=>{
    await driver.quit();
  })

  //it block
  it("Ensures search bar is empty", async function () {

    //get the search box text
    let searchBoxText = await driver.findElement(By.id("site-search-input")).getText();

    //chai should assert
    expect(searchBoxText).to.be.empty;

  });

  //it block
  it("Checks search query is included in test results", async function () {

    const SEARCH_QUERY = "Band";

    //send keys to the search box
    await driver.findElement(By.id("site-search-input")).sendKeys(SEARCH_QUERY);

    //wait till results drop down appears
    await driver.wait(until.elementLocated(By.xpath('//*[@id="site-search-menu"]/div[3]/a'),10000));

    //find and click more results button
    await driver.findElement(By.xpath('//*[@id="site-search-menu"]/div[3]/a')).click();

    //wait till next page loads
    await driver.wait(until.elementLocated(By.xpath('//*[@id="__next"]/div[2]/div[1]/h3'),10000));
    
    //collect the search result elements in an array
    var elements = [];
    elements = await driver.findElements(By.className('css-11rlpdz eh8fd905')) 
    
    // Iterate over their xpath element for the amount of elements found and assert their text element
    for (var index=1; index<=elements.length; index++){
      let text = await driver.findElement(By.xpath(`//*[@id="__next"]/div[2]/div[3]/div[${index}]/a/div/div/div/div/h4`)).getText();
      expect(text).to.include(SEARCH_QUERY);
  }

    //Failed attempt to get text element from promises.
    /*elements = await driver.findElements(By.className('css-11rlpdz eh8fd905')) .then((elements)=>{
        elements.map((el) => {
            console.log(el.getAttribute("innerHTML"));              //TRIED   el.getAttribute('h4'  / "textContent" / "innerText"  / "innerHTML")   , el.getText()  
            el.getAttribute("textContent")((text) =>{
              
              expect(text).to.include('123');
              //console.log(text);
            });
        });
    }); */
    
  });
  
});  
