
describe("Mouse Hover", function(){

    browser.ignoreSynchronization = true;

    browser.manage().window().maximize();
	
	it("Amazon Mouse Hover with Action class", function(){
		
		// navigate to website 
        browser.get("https://www.amazon.co.uk/");

        browser.actions().mouseMove(element(by.id("nav-link-accountList"))).perform();

        browser.sleep(3000);

        var subMenutextWeddingList = element(by.xpath("//span[text()='Wedding List']"));

        // // to fetch the value from submenu and print it

        subMenutextWeddingList.getText().then(function(textprint){
            console.log(textprint);
            subMenutextWeddingList.click();

        })
        
        browser.sleep(3000);
        
              
    })
})