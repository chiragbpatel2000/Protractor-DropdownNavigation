describe("Alert HAndle", function(){

    browser.ignoreSynchronization = true;

    browser.manage().window().maximize();

    
	
	it("Alert Handle with Action class", function(){
		
        // navigate to website 
        browser.manage().timeouts().implicitlyWait(3000);
        browser.get("https://chercher.tech/protractor/handle-browser-windows-protractor");

        browser.getWindowHandle().then(function(ParentWindow){
            element(by.id("two-window")).click();
            browser.sleep(3000);
            browser.getAllWindowHandles().then(function(childWindows){
                browser.getTitle().then(function(WindowTitle){
                    console.log("First window Title"+WindowTitle)
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

                element(by.name("q")).sendKeys("Chirag");
                browser.sleep(3000)
                browser.getTitle().then(function(titleSecondWindow){
                    console.log("Second Window Title"+titleSecondWindow)
                })
                browser.close();


                

                browser.switchTo().window(ParentWindow);

                element(by.xpath("//a[text()='Home']")).click().then(function(){
                    browser.sleep(3000)
                })

            })
        })
       
        



        


        
    })
})