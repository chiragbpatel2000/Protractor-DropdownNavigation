/**
 * class is a combination of method object and constructor
 */
var classDemo3 = /** @class */ (function () {
    function classDemo3(Username, Password, Eid, phoneNumber, Age, RN, bankAccountName) {
        this.username = Username;
        this.password = Password;
        this.id = Eid;
        this.phonenumber = phoneNumber;
        this.age = Age;
        this.rollnumber = RN;
        this.bankaccountname = bankAccountName;
    }
    //   classDemo1()   //constructor
    //    {
    //      console.log("chirag2")
    //}
    classDemo3.prototype.getUsername = function () {
        return this.username;
    };
    ;
    classDemo3.prototype.getUserEid = function () {
        return this.id;
    };
    classDemo3.prototype.getPassword = function () {
        return this.password;
    };
    classDemo3.prototype.getPhoneNumber = function () {
        return this.phonenumber;
    };
    classDemo3.prototype.getAge = function () {
        return this.age;
    };
    classDemo3.prototype.getRollNumber = function () {
        return this.rollnumber;
    };
    classDemo3.prototype.getBankAccountName = function () {
        return this.bankaccountname;
    };
    return classDemo3;
}());
var classdemo3 = new classDemo3("Software", "Testing", 1010110, 9924433797, 30, "E48123", "HSBC");
//classDemo2() is contructor , let classdemo2=new classDemo2() is object and classdemo2 is ref variable which we storing values 
//classdd.setUsername();
console.log(classdemo3.getUsername());
console.log(classdemo3.getPassword());
console.log(classdemo3.getUserEid());
console.log(classdemo3.getPhoneNumber());
console.log(classdemo3.getAge());
console.log(classdemo3.getRollNumber());
console.log(classdemo3.getBankAccountName());
