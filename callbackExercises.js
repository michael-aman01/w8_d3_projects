

// class Clock {

//     constructor() {
//         this.dateObj = new Date();
        
//         this.hours = this.dateObj.getUTCHours();
//         this.minutes = this.dateObj.getUTCMinutes();

//         this.seconds = this.dateObj.getUTCSeconds();
        
//         setInterval(() => {
//             this._tick()
//         }, 1000);

//     }

//     printTime() {
//         console.clear()
//         console.log(`${this.hours}:${this.minutes}:${this.seconds}`)
//     }

//     _tick() {
//         this.printTime()
//         if(this.seconds + 1 === 60){
//             this.seconds = 0;
//             this.minutes += 1;
//         }else{
//             this.seconds += 1;
//         }
        
//         if(this.minutes === 60){
//             this.minutes = 0;
//             this.hours += 1;
//         }

//         if(this.hours + 1 === 24){
//             this.hours = 0;
//         }
//     }
// }



// // let c = new Clock()

// const readLine = require("readline");

// const rl = readLine.createInterface({
//     input: process.stdin,
//     output: process.stdout
// })



// function addNumbers(sum, numsLeft, completionCallback) {
//     if (numsLeft > 0) {
//         let newNum = rl.question("Enter number please\n", (response) => {
//             let number = parseInt(response);
//             sum += number;
//             // console.log(`Total Sum: ${sum}`);
//             numsLeft -= 1;
//             addNumbers(sum, numsLeft, completionCallback);
            
//         })  
//     }else{
//         rl.close();
//         completionCallback(sum);
//     }
// };

// Function.prototype.myBind = function(context){
//     return () => {
//         this.apply(context)
//     }
// }

// function printer(arg){
//     console.log(arg);
// };

// function askIfGreaterThan(el1,el2,callback){
//     rl.question(`Is ${el1} > ${el2}?\n\n`, (response)=>{
//         rl.close()
//         if(response.toUpperCase() === "YES"){
//             callback(true);
//         }else{
//             callback(false);
            
//         }
//     })
// }





Function.prototype.myThrottle = function(interval){
    let tooSoon = false;
    return (...args) => {
        if(tooSoon === false){
            tooSoon = true;
            setTimeout(()=> tooSoon = false,interval);
            this(...args);
        }
    }
}


//   class Neuron {
//     fire() {
//       console.log("Firing!");
//     }
//   }
  
//   const neuron = new Neuron();

  
//   neuron.fire = neuron.fire.myThrottle(500);
  
//   const interval = setInterval(() => {
//     neuron.fire();
//   }, 10);
  
Function.prototype.myDebounce = function(interval) {
    let methodCalled = false;
    return (...args)=> {
        if (methodCalled === false){
            setInterval(()=> this(...args), interval);
            methodCalled = true;
        
        }

    }
}

class SearchBar {
    constructor() {
      this.query = "";
  
      this.type = this.type.bind(this);
      this.search = this.search.bind(this);
    }
  
    type(letter) {
      this.query += letter;
      this.search();
    }
  
    search() {
      console.log(`searching for ${this.query}`);
    }
  }

  const searchBar = new SearchBar();

const queryForHelloWorld = () => {
  searchBar.type("h");
  searchBar.type("e");
  searchBar.type("l");
  searchBar.type("l");
  searchBar.type("o");
  searchBar.type(" ");
  searchBar.type("w");
  searchBar.type("o");
  searchBar.type("r");
  searchBar.type("l");
  searchBar.type("d");
};

searchBar.search = searchBar.search.myDebounce(500);

queryForHelloWorld();


