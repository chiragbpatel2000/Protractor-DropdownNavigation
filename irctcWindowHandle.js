describe("irctc mouse hover and window Handle", function(){

    browser.ignoreSynchronization = true;
    browser.manage().timeouts().implicitlyWait(3000);

    browser.manage().window().maximize();
	
	it("irctc mouse hover and window handle", function(){

        
		// navigate to website 
        browser.get("https://www.irctc.co.in/");

        browser.getWindowHandle().then(function(ParentWindow){

            var staysDropDownName = element(by.xpath("//a[text()=' STAYS ']"));
            browser.actions().mouseMove(staysDropDownName).perform();

            element(by.xpath("//a[@aria-label='Sub Menu of Stays, I.R.C.T.C. Hotels. Website will be opened in new tab']")).click();
            browser.sleep(3000);
            browser.getAllWindowHandles().then(function(childWindows){
                browser.getTitle().then(function(WindowTitle){
                    console.log("First window Title : " + WindowTitle)
                })
                console.log(childWindows.length)

                for(let chwindow of childWindows)
                {
                    if(chwindow!=ParentWindow)
                    {
                        browser.switchTo().window(chwindow)
                        break;
                    }
                }

                element(by.xpath("//input[@placeholder='Enter hotel name or city name']")).sendKeys("Mum").then(function(){
                    element(by.xpath("//span[text()='Mumbai']")).click();
                    element(by.xpath("//button[text()='Find Hotel']")).click();
                    browser.sleep(2000)
                })
                    browser.getTitle().then(function(titleSecondWindow){
                    console.log("Second Window Title : " + titleSecondWindow)
                })
                browser.close();


                browser.sleep(3000);

                browser.switchTo().window(ParentWindow);

                element(by.id("loginText")).click().then(function(){
                    browser.sleep(6000)
                })



            })

            })
        
    })
})