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



// let c = new Clock()

const readLine = require("readline");

const rl = readLine.createInterface({
    input: process.stdin,
    output: process.stdout
})



function addNumbers(sum, numsLeft, completionCallback) {
    if (numsLeft > 0) {
        let newNum = rl.question("Enter number please\n", (response) => {
            let number = parseInt(response);
            sum += number;
            // console.log(`Total Sum: ${sum}`);
            numsLeft -= 1;
            addNumbers(sum, numsLeft, completionCallback);
            
        })  
    }else{
        rl.close();
        completionCallback(sum);
    }
};

Function.prototype.myBind = function(context){
    return () => {
        this.apply(context)
    }
}

function printer(arg){
    console.log(arg);
};

function askIfGreaterThan(el1,el2,callback){
    rl.question(`Is ${el1} > ${el2}?\n\n`, (response)=>{
        if(response.toUpperCase() === "YES"){
            callback(true);
        }else{
            callback(false);
            
        }
    })


}
// addNumbers(0, 3, (ans) => console.log(ans))
// askIfGreaterThan(2,10,printer)
//rl.close()

function innerBubbleSortLoop(arr, i, madeAnySwaps, outerBubbleSortLoop) {
    if (i < arr.length - 1) {
        askIfGreaterThan(arr[i], arr[i+1], (isGreaterThan)=> {
            if (isGreaterThan === true){
                temp = arr[i+1];
                arr[i+1] = arr[i];
                arr[i] = temp; 
                madeAnySwaps = true;
                
            }
            
            innerBubbleSortLoop(arr, i+1, madeAnySwaps, outerBubbleSortLoop);
        })
    } else {
        
        outerBubbleSortLoop(madeAnySwaps);
    }
} 

function absurdBubbleSort(arr, sortCompletionCallback) {
    function outerBubbleSortLoop(madeAnySwaps) {
        if (madeAnySwaps === true){
            innerBubbleSortLoop(arr, 0, false, outerBubbleSortLoop);
        } else {
            rl.close();
            sortCompletionCallback(arr);
        }
    }
    outerBubbleSortLoop(true);
}

absurdBubbleSort([3, 2, 1], function(arr) {
    console.log("Sorted array: " + JSON.stringify(arr));
  });
// innerBubbleSortLoop([1,2], 0, false, (madeAnySwaps)=>console.log("I'm in the outer loop"));