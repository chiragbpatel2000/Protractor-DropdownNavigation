

describe("Amazon Mouse Hover action HAndle", function(){

    browser.ignoreSynchronization = true;

    browser.manage().window().maximize();
	
	it("Amazon Mouse Hover action Handle with Action class", function(){
		
		// navigate to website 
        browser.get("https://www.amazon.co.uk/");

        browser.actions().mouseMove(element(by.id("nav-link-accountList"))).perform();

        browser.sleep(3000);

        element(by.xpath("//span[text()='Your Account']")).getText().then(function(textprint){
            console.log(textprint);
            element(by.xpath("//span[text()='Your Account']")).click();
        })

        browser.sleep(3000);


        
    })
})