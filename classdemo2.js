/**
 * class is a combination of method object and constructor
 */
var classDemo2 = /** @class */ (function () {
    function classDemo2(Username, Password, Eid, phoneNumber, Age) {
        this.username = Username;
        this.password = Password;
        this.id = Eid;
        this.phonenumber = phoneNumber;
        this.age = Age;
    }
    //   classDemo1()   //constructor
    //    {
    //      console.log("chirag2")
    //}
    classDemo2.prototype.getUsername = function () {
        return this.username;
    };
    ;
    classDemo2.prototype.getUserEid = function () {
        return this.id;
    };
    classDemo2.prototype.getPassword = function () {
        return this.password;
    };
    classDemo2.prototype.getPhoneNumber = function () {
        return this.phonenumber;
    };
    classDemo2.prototype.getAge = function () {
        return this.age;
    };
    return classDemo2;
}());
var classdemo2 = new classDemo2("Software", "Testing", 1010110, 9924433797, 30);
//classDemo2() is contructor , let classdemo2=new classDemo2() is object and classdemo2 is ref variable which we storing values 
//classdd.setUsername();
console.log(classdemo2.getUsername());
console.log(classdemo2.getPassword());
console.log(classdemo2.getUserEid());
console.log(classdemo2.getPhoneNumber());
console.log(classdemo2.getAge());
