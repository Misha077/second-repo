class StopWatch  {
    constructor(modelNo, color){ 
        this.modelNo = modelNo;
        this.color = color;
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
   
    
    get color(){
        return this.#color;
    }

    get modelNo(){
        return this.#modelNo;
    }
    get isRunning() {
        return this.#isRunning;
    }
    get startTime(){
        return this.#startTime;
    }


    //getter method

    set isRunning(value) {
       if(!(typeof value === 'boolean')) throw  new  Error ("Invalid Value");
       this.#isRunning = value;
    }


   //setter method

    get color(){
        return this.#color;
    }

    get modelNo(){
        return this.#modelNo;
    }
    get isRunning() {
        return this.#isRunning;
    }
   
    get startTime(){
        return this.#startTime;
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
    }}
    
    class AdvancedStopWatch extends StopWatch{
        #readings =[];
        takeReadings(){
       if(!super.isRunning) throw new Error("Watch has not started yet");
       let now = new Date().getTime();
       let interval = (now - super.startTime) / 1000;
       this.#readings.push(interval);
       console.log(this.#readings);
       
        }
    }
