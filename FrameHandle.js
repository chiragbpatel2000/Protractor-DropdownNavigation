

describe("Frame HAndle", function(){

    browser.ignoreSynchronization = true;

    browser.manage().window().maximize();
	
	it("Frame Handle ", function(){
		
		// navigate to website 
        browser.get("https://chercher.tech/practice/frames");
        browser.sleep(3000);

        // //tagname[text()='textvalue'] 
        // //tagname[@attribute='value']

        element(by.xpath("//span[text()='Not a Friendly Topic']")).getText().then(function(TopicValue){
         
        browser.switchTo().frame(element(by.id("frame1")).getWebElement());

        element(by.xpath("//input[@type='text']")).sendKeys(TopicValue)
        browser.sleep(3000);

        })

    })
})

// browser.switchTo().defaultcontent()

       // browser.actions().dragAndDrop(element(by.xpath("//a[text()=' BANK ']")),element(by.id("bank"))).perform();


