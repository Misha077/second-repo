class StopWatch  {
    constructor(modelNo, color){ 
        this.#modelNo = modelNo;
        this.#color = color;
    }
    //PRoperties
    #color = null;
    #modelNo = null;
    #startTime = 0;
    #stopTime = 0;
    #isRunning = false;
    

    //getter method

    get isRunning() {
        return this.#isRunning;
    }


    //getter method

    set isRunning(value) {
        if(!(typeof value === 'boolean')) throw  new  Error ("Invalid Value");
        this.#isRunning = value;
    }


   

    get color(){
        return this.#color;
    }

    get modelNo(){
        return this.#modelNo;
    }
    get isRunning() {
        return this.#isRunning;
    }


    //setter method

    set isRunning(value) {
        if(!(typeof value === 'boolean')) throw  new  Error ("Invalid Value");
        this.#isRunning = value;
    }

   //Methods
    start() {
    //VALIDATION
    if(this.#isRunning) throw new Error("Watch has not stopped ");
    this.#isRunning = true;
    this.#startTime = new Date().getTime();
    console.log("Watch starts at", this.#startTime);
    
    }
  
    stop() {
     //Validation
    if(!this.#isRunning) throw new Error("Watch has not started");
    this.#isRunning = false;
    this.#stopTime = new Date().getTime();
    let duration = (this.stopTime - this.#startTime) / 1000;
    console.log("Watch stops at", duration);
    }
 
    reset() {
    this.#startTime = 0;
    this.#stopTime = 0;
    this.#isRunning = false;
    console.log("Reset");
    }
    
};

class Person{
    constructor(name, dob) {
        this.name = name;
        this.dob = dob;
    }
    //properties
    #name = null;
    #dob = null;
    #isVerified = false;
    #isEligible = false;

    //method
  
    get name(){
        return this.#name;
    }
    set name(value){
        if(!(typeof value === "string" && value.Length >= 3 && value.spplit(" ").Length === 2)){
            throw new Error("invalid value");}
        this.#name = value;}
   
   
    speak(){
        console.log(this.#name, "is speaking");
    }

    
    walk(){
        console.log(this.#name, "is walking");
    }
}
 
class students extends Person{
   constructor(name, dob, rollNo){
        super(name, dob);
        this.rollNo = rollNo;    
}
read(){
        console.log(`${super.name} is reading`);
    }

    write(){
        console.log(`${super.name} is writing`);
    }}


class SeniorStudent extends student{
    constructor(name, dob, rollNo){
        super(name, dob,rollNo);
        this.specilization = specilization;
    }
  
   research(){
       console.log(`${super.name}is researching on ${this.specilization}`);
   }
}
