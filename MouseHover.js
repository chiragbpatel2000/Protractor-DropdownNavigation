describe("Alert HAndle", function(){

    browser.ignoreSynchronization = true;

    browser.manage().window().maximize();
	
	it("Alert Handle with Action class", function(){
		
		// navigate to website 
        browser.get("https://chercher.tech/practice/popups");

        browser.actions().mouseMove(element(by.id("sub-menu"))).perform();

        browser.sleep(3000);

        element(by.id("link2")).getText().then(function(textprint){
            console.log(textprint)
        })

        browser.sleep(3000);


        
    })
})