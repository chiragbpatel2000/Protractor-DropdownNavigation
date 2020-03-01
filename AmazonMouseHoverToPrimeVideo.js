
describe("Mouse Hover", function(){

    browser.ignoreSynchronization = true;

    browser.manage().window().maximize();
	
	it("Amazon Mouse Hover with Action class", function(){
		
		// navigate to website 
        browser.get("https://www.amazon.co.uk/");

        browser.actions().mouseMove(element(by.id("nav-link-accountList"))).perform();

        browser.sleep(3000);

        var subMenutextPrimeVideo = element(by.xpath("//span[text()='Your Prime Video']"));

        // // to fetch the value from submenu and print it

        subMenutextPrimeVideo.getText().then(function(textprint){
            console.log(textprint);
            subMenutextPrimeVideo.click();

        })
        
        browser.sleep(3000);
        
              
    })
})