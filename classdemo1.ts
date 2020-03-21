/**
 * class is a combination of method object and constructor 
 */
class classDemo1
{

 //constructor(n:number , a:string ,j:any)
 //{
 //    console.log(n+" "+a+" "+j)
 //}

 username:string; //prop
 password:string;

 constructor(username:string,password:string)
 {
     this.username = username
     this.password= password
 }

 
 
    //   classDemo1()   //constructor
//    {
 //      console.log("chirag2")
 //}
    


    getUsername()
    {
        return this.username;
    }

    

    getPassword()
    {
        return this.password
    }

    




}

 let classdd =new classDemo1("Chirag","Admin");

 //classDemo() is contructor , let classd=new classDemo() is object and classd is ref variable which we storing values 

 //classdd.setUsername();
 console.log(classdd.getUsername());
 console.log(classdd.getPassword())

 

