/**
 * class is a combination of method object and constructor 
 */
class classDemo2
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

 constructor(Username:string,Password:string,Eid:number,phoneNumber:number,Age:number)
 {
     this.username = Username;
     this.password= Password;
     this.id=Eid;
     this.phonenumber=phoneNumber;
     this.age=Age;
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

    




}

 let classdemo2 =new classDemo2("Software","Testing",1010110,9924433797,30);

 //classDemo2() is contructor , let classdemo2=new classDemo2() is object and classdemo2 is ref variable which we storing values 

 //classdd.setUsername();
 console.log(classdemo2.getUsername());
 console.log(classdemo2.getPassword());
 console.log(classdemo2.getUserEid());
 console.log(classdemo2.getPhoneNumber());
 console.log(classdemo2.getAge());

 

