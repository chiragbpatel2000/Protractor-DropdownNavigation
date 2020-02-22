/**
 * if we need to work on functions - it should be in describe block but outside of 'IT ' block
 * 
 */

describe('Calculator Tests', function(){

    function Cal(a,b)
    {
        var textBox = element(by.model("first")).sendKeys(a);		
        var textBoxSecond = element(by.model("second")).sendKeys(b);
        element(by.id("gobutton")).click()
        
    }
    function DiviCal(a,b)
    {
        var textBox = element(by.model("first")).sendKeys(a);
        var selectValue1 = element.all(by.cssContainingText('option','/')).click();		
        var textBoxSecond = element(by.model("second")).sendKeys(b);
        element(by.id("gobutton")).click()
        
    }
    function ModuloCal(a,b)
    {
        var textBox = element(by.model("first")).sendKeys(a);
        var selectValue2 = element.all(by.cssContainingText('option','%')).click();		
        var textBoxSecond = element(by.model("second")).sendKeys(b);
        element(by.id("gobutton")).click()
        
    }
    function MultiCal(a,b)
    {
        var textBox = element(by.model("first")).sendKeys(a);
        var selectValue3 = element.all(by.cssContainingText('option','*')).click();		
        var textBoxSecond = element(by.model("second")).sendKeys(b);
        element(by.id("gobutton")).click()
        
    }
    function SubCal(a,b)
    {
        var textBox = element(by.model("first")).sendKeys(a);
        var selectValue4 = element.all(by.cssContainingText('option','-')).click();		
        var textBoxSecond = element(by.model("second")).sendKeys(b);
        element(by.id("gobutton")).click()
        
    }

    
	
	
	it('Addition Tests',function(){
		
		browser.get("http://juliemr.github.io/protractor-demo");
        
        Cal(2,3)
        Cal(5,7)
        Cal(7,8)
        Cal(9,7)
        Cal(10,30)
        element(by.repeater("result in memory")).element(by.css("td:nth-child(3)")).getText().then(function(RepeterText){
			console.log("Repeter Value is :"+RepeterText)
			expect(element(by.css("h2[class='ng-binding']")).getText()).toBe(RepeterText)
		})
    })

    it('Division Tests',function(){
		
		browser.get("http://juliemr.github.io/protractor-demo");
        
        DiviCal(12,3);
        DiviCal(35,7);
        DiviCal(120,8);
        DiviCal(90,10);
        DiviCal(100,3);
        
    })
    it('Modulo Tests',function(){
		
		browser.get("http://juliemr.github.io/protractor-demo");
        
        ModuloCal(2,3);
        ModuloCal(5,7);
        ModuloCal(7,8);
        ModuloCal(9,7);
        ModuloCal(10,30);
       
    })
    it('Multiplication Tests',function(){
		
		browser.get("http://juliemr.github.io/protractor-demo");
        
        MultiCal(2,3);
        MultiCal(5,7);
        MultiCal(7,8);
        MultiCal(9,7);
        MultiCal(10,30);
        
        
    })
    it('Subtraction Tests',function(){
		
		browser.get("http://juliemr.github.io/protractor-demo");
        
        SubCal(2,3);
        SubCal(5,7);
        SubCal(7,8);
        SubCal(9,7);
        SubCal(10,30);
        
    })

   	
})

