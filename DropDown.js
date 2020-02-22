/**
 * 
 */

describe("Calculator tests", function(){
	
	it("printing the dropdown list value", function(){
		
		// navigate to website 
		browser.get("http://juliemr.github.io/protractor-demo/");
		
		// Addition Tests
		var firstTexBox = element(by.model("first")).sendKeys(40);
		var selectValue = element.all(by.cssContainingText('option','+')).click();
		var secondTextBox = element(by.model("second")).sendKeys(20);
		var goButton = element(by.id("gobutton")).click();
		
		
		
		//	Division Tests			
		var firstTexBox = element(by.model("first")).sendKeys(80);
		var selectValue1 = element.all(by.cssContainingText('option','/')).click();
		var secondTextBox = element(by.model("second")).sendKeys(20);
		var goButton = element(by.id("gobutton")).click();
		
		//Modulo Tests
		var firstTexBox = element(by.model("first")).sendKeys(100);
		var selectValue2 = element.all(by.cssContainingText('option','%')).click();
		var secondTextBox = element(by.model("second")).sendKeys(20);
		var goButton = element(by.id("gobutton")).click();
		
		//Multiplication Tests
		
		var firstTexBox = element(by.model("first")).sendKeys(50);
		var selectValue3 = element.all(by.cssContainingText('option','*')).click();
		var secondTextBox = element(by.model("second")).sendKeys(20);
		var goButton = element(by.id("gobutton")).click();
		
		//SubtrationTtests
		var firstTexBox = element(by.model("first")).sendKeys(80);
		var selectValue4 = element.all(by.cssContainingText('option','-')).click();
		var secondTextBox = element(by.model("second")).sendKeys(20);
		var goButton = element(by.id("gobutton")).click();
		
		var lengthValue = element.all(by.repeater("result in memory")).count().then(function(lengthvalue){
			console.log("Length is :"+lengthvalue)
		})
		
		var resultValue = element.all(by.repeater("result in memory")).each(function(value){
			value.element(by.css("td:nth-child(3)")).getText().then(function(result){
				console.log("Result :"+result)
			})	
		})
		
		
		
		
	   browser.sleep(3000)
			
		
	})
	
})