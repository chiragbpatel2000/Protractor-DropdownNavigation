// Handling Dropdown using function

describe('Calculator Tests', function(){

    function AddCal(a,b,c)
    {
        var textBox = element(by.model("first")).sendKeys(a);
    	
        var textBoxSecond = element(by.model("second")).sendKeys(b);

        element.all(by.tagName("option")).each(function(ddvalue)
        {
            ddvalue.getAttribute("value").then(function(listdrown)
            {
                if(listdrown==c)
                {
                    ddvalue.click(); 
                }
            })
        })

       
        element(by.id("gobutton")).click()     
    }

    it('Addition Tests',function(){
		
		browser.get("http://juliemr.github.io/protractor-demo");
        
        AddCal(2,3,"ADDITION")
        AddCal(5,7,"MULTIPLICATION")
        AddCal(7,8,"DIVISION")
        AddCal(9,7,"SUBTRACTION")
       
        element(by.repeater("result in memory")).element(by.css("td:nth-child(3)")).getText().then(function(RepeterText){
			console.log("Repeter Value is :"+RepeterText)
			expect(element(by.css("h2[class='ng-binding']")).getText()).toBe(RepeterText)
		})
    })

})