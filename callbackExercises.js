class Clock {
    constructor() {
        this.dateObj = new Date();
        
        this.hours = this.dateObj.getUTCHours();
        this.minutes = this.dateObj.getUTCMinutes();
        this.seconds = this.dateObj.getUTCSeconds();

        this.display = `${this.hours}:${this.minutes}:${this.seconds}`
        
        
    }

    _tick() {

    }

    printTime( {

    })
}

let c = new Clock()