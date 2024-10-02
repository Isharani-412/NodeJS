//synchronous = blocking(one after one)
//asynchronous= non blocking(line by line execution not guareented)
//-callback will fire
// -----------------------------
// const fs= require("fs")
// fs.readFileSync("isha.txt","utf-8", (err,data)=>{
//     console,log(err)
//     console.log(data);
// });
// console.log("this is a message")
// -----------------------------------
//above code wont print data or err .for that we 2 method:
//1.synchronous = blocking(one after one)

// const fs = require("fs");

// try {
//     const data = fs.readFileSync("isha.txt", "utf-8");
//     console.log(data);
// } catch (err) {
//     console.error(err);
// }

// console.log("this is a message");
// ------------------------------------------

//2.asynchronous= non blocking(line by line execution not guareented)
const fs = require("fs");

fs.readFile("isha.txt", "utf-8", (err, data) => {
    if (err) {
        console.error(err);
    } else {
        console.log(data);
    }
});

console.log("this is a message");


