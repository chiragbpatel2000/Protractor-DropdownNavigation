describe("Alert HAndle", function(){

    browser.ignoreSynchronization = true;

    browser.manage().window().maximize();
	
	it("irctc mouse hover with Action class", function(){

        browser.manage().timeouts().implicitlyWait(3000);
		// navigate to website 
        browser.get("https://www.irctc.co.in/");


        var staysDropDownName = element(by.xpath("//a[text()=' STAYS ']"));
        browser.actions().mouseMove(staysDropDownName).perform();

        browser.sleep(3000);

        var irctcHotels = element(by.xpath("//a[@aria-label='Sub Menu of Stays, I.R.C.T.C. Hotels. Website will be opened in new tab']"));

        irctcHotels.getText().then(function(textprint){
            console.log(textprint);
            irctcHotels.click();
        })

        browser.sleep(3000);


        
    })
})