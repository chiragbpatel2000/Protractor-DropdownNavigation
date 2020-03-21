/**
 * class is a combination of method object and constructor
 */
var classDemo1 = /** @class */ (function () {
    //constructor(n:number , a:string ,j:any)
    //{
    //    console.log(n+" "+a+" "+j)
    //}
    function classDemo1(username, password) {
        this.username = username;
        this.password = password;
    }
    classDemo1.prototype.getUsername = function () {
        return this.username;
    };
    classDemo1.prototype.getPassword = function () {
        return this.password;
    };
    return classDemo1;
}());
var classdd = new classDemo1("Chirag", "Admin");
//classDemo() is contructor , let classd=new classDemo() is object and classd is ref variable which we storing values 
//classdd.setUsername();
console.log(classdd.getUsername());
console.log(classdd.getPassword());
