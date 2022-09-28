class Clock {
    constructor() {
        this.dateObj = new Date();
        
        this.hours = this.dateObj.getUTCHours();
        this.minutes = this.dateObj.getUTCMinutes();

        this.seconds = this.dateObj.getUTCSeconds();
        setInterval(() => {
            this._tick()
        }, 1000);

    }

    printTime() {
        console.clear()
        console.log(`${this.hours}:${this.minutes}:${this.seconds}`)
    }

    _tick() {
        this.printTime()
        if(this.seconds + 1 === 60){
            this.seconds = 0;
            this.minutes += 1;
        }else{
            this.seconds += 1;
        }
        
        if(this.minutes === 60){
            this.minutes = 0;
            this.hours += 1;
        }

        if(this.hours + 1 === 24){
            this.hours = 0;
        }
    }
}



let c = new Clock()