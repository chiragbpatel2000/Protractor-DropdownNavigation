// out of frame handling -- how to come out from frame



describe("Come out from Frame Handle", function(){

    browser.ignoreSynchronization = true;

    browser.manage().window().maximize();
	
	it("Come out from Frame Handle ", function(){
		
		// navigate to website 
        browser.get("https://chercher.tech/practice/frames");
        browser.sleep(3000);

        // //tagname[text()='textvalue'] 
        // //tagname[@attribute='value']

        element(by.xpath("//span[text()='Not a Friendly Topic']")).getText().then(function(TopicValue){
         
        browser.switchTo().frame(element(by.id("frame1")).getWebElement());

        element(by.xpath("//input[@type='text']")).sendKeys(TopicValue)
        browser.sleep(6000);

        element(by.id("frame3")).getText().then(function(frame3value){
            browser.switchTo().frame(element(by.id("frame3")).getWebElement());
            element(by.id("a")).click();

            
            
            
        });

        // browser.switchTo().frame(element(by.id("frame3")).getWebElement());
        // element(by.id("a")).click();



        browser.switchTo().defaultContent();
        element(by.xpath("//span[text()='Not a Friendly Topic']")).getText().then(function(TopicText){

        console.log("Outside of frame handle"+TopicText)

        })

    })
})

})