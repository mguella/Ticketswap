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
  it("Ensures special characters are handled from the server", async function () {

    var search_query = `[\`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/`;

    //send keys to the search box
    await driver.findElement(By.id("site-search-input")).sendKeys(search_query);

    //wait till results drop down appears
    await driver.wait(until.elementLocated(By.xpath('//*[@id="site-search-menu"]/div[3]/a'),10000));

    //find and click more results button
    await driver.findElement(By.xpath('//*[@id="site-search-menu"]/div[3]/a')).click();

    //wait till next page loads
    await driver.wait(until.elementLocated(By.xpath('//*[@id="__next"]/div[2]/div[1]/h1'),10000));

    //ensure the next page has results
    var results = await driver.findElement(By.className('css-11rlpdz eh8fd905'));

    //chai assert
    expect(results).to.exist;

  });

  //it block
  it("Checks search query is included in test results", async function () {

    var search_query = "Band";

    //send keys to the search box
    await driver.findElement(By.id("site-search-input")).sendKeys(search_query);

    //wait till results drop down appears
    await driver.wait(until.elementLocated(By.xpath('//*[@id="site-search-menu"]/div[3]/a'),10000));

    //find and click more results button
    await driver.findElement(By.xpath('//*[@id="site-search-menu"]/div[3]/a')).click();

    //wait till next page loads
    await driver.wait(until.elementLocated(By.xpath('//*[@id="__next"]/div[2]/div[1]/h3'),10000));

    //collect all the search result elements and get their text
    let elements = await driver.findElements(By.className('css-11rlpdz eh8fd905'))
    for (let element of elements) {
      const text = await element.getText();
      //assert the text contains the search query
      expect(text).to.include(search_query);
    }
    
  });
  
  //it block

});  
