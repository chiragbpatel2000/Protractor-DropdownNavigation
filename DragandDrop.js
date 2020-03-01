describe("Alert HAndle", function(){

    browser.ignoreSynchronization = true;

    browser.manage().window().maximize();
	
	it("Alert Handle with Action class", function(){
		
		// navigate to website 
        browser.get("http://demo.guru99.com/test/drag_drop.html");
        browser.sleep(5000);

        browser.actions().dragAndDrop(element(by.xpath("//a[text()=' BANK ']")),element(by.id("bank"))).perform();

        browser.sleep(3000);

       
        


        
    })
})