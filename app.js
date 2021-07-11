
let person = new Function (Name,age,job),{
    name = this.Name,
    age = this.age,
    job = this.job
}

let Marc = {
    name: "Marc",
    age: 18,
    job: "Baker"
}

person('Mike',18,"baker") 

 let myObj = {
    name: ["marc","pablo","evan","elon"],

    myFun(){
        console.log(this.name)  
    }
} 




//console.log(anonymus.call(myObj))
//test.call(myObj)

myObj.myFun();