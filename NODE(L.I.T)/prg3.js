const readline=require("readline-sync");
//enter no
console.log("enter value of n")
let a=Number(readline.question());
let no=[];
for (let i=0 ; i<5;i++){
    console.log("enter a no")
     no.push(Number(readline.question()));
     sum=sum+i;
}
console.log(no);

console.log("sum="+sum);
avg=sum/a;
console.log("avg="+avg);
