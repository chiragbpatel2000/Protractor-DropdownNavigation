
exports.config = {
    seleniumAddress: 'http://localhost:4444/wd/hub',
    specs: ['CreateFunction.js']
  }


  /**
   * System.getProp("webdriver.chrome.driver","Path of chromedriver.exe")
   * Webdriver driver = new ChromeDriver() //Run Time polymorphism
   */