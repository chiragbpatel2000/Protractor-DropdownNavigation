/**
 * class is a combination of method object and constructor 
 */
class classDemo
{

    // classDemo()   constructor
    // {
    //     console.log("chirag2")
    // }
    username:string;
    password:string;


    getUsername()
    {
        return this.username;
    }

    setUsername()
    {
        this.username="chirag"
    }

    getPassword()
    {
        return this.password
    }

    setPassword()
    {
        this.password="Admin"
    }




}

 let classd =new classDemo();

 //classDemo() is contructor , let classd=new classDemo() is object and classd is ref variable which we storing values 

 classd.setUsername();
 console.log(classd.getUsername());

 //classd.classDemo();

