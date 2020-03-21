/**
 * class is a combination of method object and constructor 
 */
class classDemo3
{

 //constructor(n:number , a:string ,j:any)
 //{
 //    console.log(n+" "+a+" "+j)
 //}

 username:string; //prop
 password:string;
 id:number;
 phonenumber:number;
 age:number;
 rollnumber:any;
 bankaccountname:string;

 constructor(Username:string,Password:string,Eid:number,phoneNumber:number,Age:number,RN:any,bankAccountName:string)
 {
     this.username = Username;
     this.password= Password;
     this.id=Eid;
     this.phonenumber=phoneNumber;
     this.age=Age;
     this.rollnumber=RN;
     this.bankaccountname=bankAccountName;
 }

 
 
    //   classDemo1()   //constructor
//    {
 //      console.log("chirag2")
 //}
    


    getUsername()
    {
        return this.username;
    };
    getUserEid()
    {
        return this.id;
    }

    

    getPassword()
    {
        return this.password
    }
    getPhoneNumber()
    {
        return this.phonenumber;
    }
    getAge()
    {
        return this.age;
    }
    getRollNumber()
    {
        return this.rollnumber;
    }
    getBankAccountName()
    {
       return this.bankaccountname;
    }

    




}

 let classdemo3 =new classDemo3("Software","Testing",1010110,9924433797,30,"E48123","HSBC");

 //classDemo2() is contructor , let classdemo2=new classDemo2() is object and classdemo2 is ref variable which we storing values 

 //classdd.setUsername();
 console.log(classdemo3.getUsername());
 console.log(classdemo3.getPassword());
 console.log(classdemo3.getUserEid());
 console.log(classdemo3.getPhoneNumber());
 console.log(classdemo3.getAge());
 console.log(classdemo3.getRollNumber());
 console.log(classdemo3.getBankAccountName());

 

