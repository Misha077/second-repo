const Tv = {
    //Properties
    isRunning: false,
    currentChannel: 3,
    currentVolume:7,

//Methods
on: function () {
    this.isRunning = true;
    console.log("Tv is on");
},

off: function () {
    this.isRunning = true;
    console.log("Tv is off");
},

volUp() {
this.currentVolume++;
console.log("Volume is Up", this.currentVolume);
},

volDown() {
this.currentVolume--;
console.log("Volume is Down", this.currentVolume);
},
};


class StopWatch  {
    //PRoperties
    startTime = 0;
    stopTime = 0;
    isRunning = false;
    

   //Methods
    start() {
        //VALIDATION
        if(this.isRunning) throw new Error("Watch has not stopped ");
         this.isRunning = true;
    this.startTime = new Date().getTime();
    console.log("Watch starts at", this.startTime);
    
    }
  
    stop() {
        //Validation
        if(!this.isRunning) throw new Error("Watch has not started");
        this.isRunning = false;
    this.stopTime = new Date().getTime();
    let duration = (this.stopTime - this.startTime) / 1000;
    console.log("Watch stops at", duration);
    }
 
    reset() {
    this.startTime = 0;
    this.stopTime = 0;
    this.isRunning = false;
    console.log("Reset");
    }
    
};

//Construcor
class Person{
    constructor(name, dob) {
        this.name = name;
        this.dob = dob;
    }
    //properties
    
    isVerified = false;
    isEligible = false;

    //method

    speak(){
        console.log(this.name, "is speaking");
    }

    
    walk(){
        console.log(this.name, "is walking");
    }
}