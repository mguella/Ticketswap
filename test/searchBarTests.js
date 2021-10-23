const { Builder, By, Key, until } = require("selenium-webdriver");
var expect = require("chai").expect;
var driver;



//desribe block
describe("Search functionality tests", async function () {

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
  it("Checks search query is included in test results", async function () {

    //send keys to the search box
    await driver.findElement(By.id("site-search-input")).sendKeys("Band");

    //wait till results drop down appears
    await driver.wait(until.elementLocated(By.xpath('//*[@id="site-search-menu"]/div[3]/a'),10000));

    //find and click more results button
    await driver.findElement(By.xpath('//*[@id="site-search-menu"]/div[3]/a')).click();

    //wait till next page loads
    await driver.wait(until.elementLocated(By.xpath('//*[@id="__next"]/div[2]/div[1]/h3'),10000));

    //collect the first search result element
    var elementText = await driver.findElement(By.className('css-11rlpdz eh8fd905')).getText();
    
    //chai should assert
    expect(elementText).to.include('Band');

    // TODO : check against all 5 first elements
    /*await driver.findElements(By.className('css-11rlpdz eh8fd905')).then((elements)=>{
        elements.map((el) => {
            el.getText().then((text) =>{
              text.should.include('Band');
            })
        })
    });*/
     
  });

  
  //it block
  it("Ensures search bar is empty", async function () {

    //get the search box text
    let searchBoxText = await driver.findElement(By.id("site-search-input")).getText();

    //chai should assert
    expect(searchBoxText).to.be.empty;

  });
});  
