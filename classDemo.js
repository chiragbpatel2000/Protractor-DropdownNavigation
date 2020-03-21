/**
 * class is a combination of method object and constructor
 */
var classDemo = /** @class */ (function () {
    function classDemo() {
    }
    classDemo.prototype.classDemo = function () {
        console.log("chirag2");
    };
    classDemo.prototype.getUsername = function () {
        return this.username;
    };
    classDemo.prototype.setUsername = function () {
        this.username = "Chirag";
    };
    classDemo.prototype.getPassword = function () {
        return this.password;
    };
    classDemo.prototype.setPassword = function () {
        this.password = "Admin";
    };
    return classDemo;
}());
var classd = new classDemo();
//classDemo() is contructor , let classd=new classDemo() is object and classd is ref variable which we storing values 
classd.setUsername();
console.log(classd.getUsername());
classd.classDemo();
