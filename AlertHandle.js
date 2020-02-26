// Handling Alert Window okay and Dismiss 

describe("Alert HAndle", function(){

    browser.ignoreSynchronization = true;

    browser.manage().window().maximize();
	
	it("Alert Handle with Action class", function(){
		
		// navigate to website 
        browser.get("https://chercher.tech/practice/popups");

        browser.actions().click(element(by.name("alert"))).perform()
        browser.sleep(3000)
        browser.switchTo().alert().accept();

        //browser.switchTo().alert().dismiss();  --- Dismissing alert
        
    })
})