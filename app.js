// console.log("javaScript connected succesfully")
// let i=1;
// while(i<=5){
//     console.log(i);
//     i++;
// } 
//guess favorite movie
// let favorite="avenger"
// let guess= prompt("guess my favorite movie");
// while(guess!=favorite && guess!="quit"){
//     console.log("wrong")
//     guess=prompt("please try again")
// }
// if(guess==favorite){
//     console.log("congrats!!")
// }else{
//     console.log("you quit")
// }
//
// for(let i=1;i<=5;i++){
//     for(let j=1;j<=i;j++){
//         console.log("*");
//     }
// }

//loops with array
// let fruits=["mango-","apple","banana","litchi","orange"];
// fruits.push("pineapple")
// for(let i=0;i<fruits.length;i++){
//     console.log(i,fruits[i]);
// }

//reverse
// for(let i=fruits.length-1;i>=0;i--){
//     console.log(i,fruits[i]);
// }

//todo app
// let todo=[];

// let req=prompt("please enter your request");

// while(true){
    
//     if(req=="quit"){
//         console.log("quiting app");
//         break;
//         }
//     if(req=="list"){
//         console.log("---------")
//         for(let i=0;i<todo.length;i++){
//             console.log(i,todo[i])
//         }
//         console.log("---------") 
//     }else if(req=="add"){
//         let task=prompt("please enter the task you want to add");
//         todo.push(task);
//         console.log("task added");
//     }else if(req=="delete"){
//         let idx=prompt("please enter the task index");
//         todo.splice(idx,1);
//         console.log("task deleted")
//     }else{
//         console.log("wrong request");
//     }
//     req=prompt("please enter your request"); 
// }

//create object literals
// const students={
//     name:"vikash",
//     age:23,
//     marks:94.4
// };
// const item={
//     price:49.9,
//     discount:50,
//     colors:["blue","green"]
// };
// const twitter={
//     username:"@vikashsingh",
//     content:"this is my #firstpost",
//     likes:220,
//     reposts:20,
//     tag:["@shardha","apnacollege"]
// };
// let obj={
//     1:"a",
//     2:"b",
//     true:"c",
//     null:"d",
//     undifined:"e"
// };
//nested object
// const classinfo = {
//     aman:{
//         gender:"male",
//         city:"pune"
//     },
//     shardha:{
//         gender:"female",
//         city:"delhi"
//     },
//     vikash:{
//         gender:"male",
//         city:"bihar"
//     }
// };

//array of objects
// const classinfo1=[
//     {
//         name:"vikash",
//         city:"bihar",
//         gender:"male"
//     },
//     {
//         name:"shardha",
//         city:"pune",
//         gender:"female"
//     },
//     {
//         name:"aman",
//         city:"delhi",
//         gender:"male"
//     }
// ];

//create a game
// const max=prompt("give max number");
// const random=Math.floor(Math.random()*max)+1
// let guess=prompt("guess the number");
// while(true){
//     if(guess=="quit"){
//         console.log("quit the game")
//         break;
//     } 
//     if(guess==random){
//          console.log("congras:you are a right answer",random)
//          break;
//     }else if(guess<random){
//          guess=prompt("hint: your guess was to small.please try again")
//     }else{
//          guess=prompt("hint:your guess wass to large.please try again")

//         }
// }

// function
// function hello(){
//     console.log("hello")
// }

// hello();

// function printTable(n){
//     for(let i=n;i<=n*10;i=i+n){
//         console.log(i)
//     }
// }
// printTable(4)

// function isAdult(){
//     age=18;
//     if(age>=18){
//         console.log("adult")
//     }else{
//         console.log("not adult")
//     }
// }

// isAdult();

// //create a dice roll to 1to 6

// function dice(){
//     let random=Math.floor(Math.random()*6)+1;
//     console.log(random)
// }

// dice();
// dice();
// dice();
// dice();

// //create a function that prints a poem
// function poem(){
//     console.log("twinkle twinkle little star")
//     console.log("how are wonder what you are")

// }
// poem()

// function printInfo(name,age){
//     console.log(`${name} age is ${age}`);
// }

// printInfo("vikash",22)
// printInfo("shardha",22) 

// function sum(a,b){
//     console.log(a+b);
// }

// sum(2,3)

// //return keyword
// function sumName(a,b){
//     return a+b;
// }
// function isAdult(age){
//     if(age>=18){
//         return "adult";
//     }else{
//         return "not adult";
//     };
//     }


//     console.log(isAdult(20));   

// // console.log(sumName(sumName(2,3),3));

// function sum1TOn(n){
//     sum=0;
//     for(let i=0;i<=n;i++){
//         sum=sum+i;
//     }
//     return sum;
// }
//  console.log(sum1TOn(4));

//  //create a function that return the concatenation of all strings in an array
//  let str=["hi","hello","by","!"]
   
//  function concat(str){
//     result="";
//    for(let i=0;i<str.length;i++){
//     result+=str[i];
// } 
//     return result;
//    }

//    console.log(concat(str))

// //function scope
//    let sum1=54;//global scope

//    function calSum(a,b){
//     let sum=a+b;//function scope
//     console.log(sum);
//    }

//    calSum(2,3);
//    console.log(sum1);

//nameless function
// let name="vikash";
// let sum=function(a,b){
//     return a+b;
// }
// q
// let arr=[2,3,5,6,7,9];
// let numb=5;
// function element1(arr,numb){
//     for(let i=0;i<=arr.length;i++){
//         if(numb<arr[i]){
//             console.log(arr[i]);
           
            
//         }
//         }
         
//     }
// element1(arr,numb)


//this keyword
// const student={
//     name:"vikash kumar",
//     age:22,
//     eng:95,
//     math:93,
//     phy:90,
//     getavg(){
//         console.log(this)
//        let avg = (this.age+this.eng+this.math)/3;
//        console.log(`${this.name} got avg marks = ${avg}`);
//   }
// }
//  function getavg(){
//     console.log(this)
//  }
 
 //try and catch
//  console.log("hello");
//  console.log("hello");
//  try{
//      console.log(a);
//  }catch(err){
//     console.log("caught an error..a is not defined")
//     console.log(err)
//  }
//  console.log("hello");
//  console.log("hello");
//  console.log("hello");

 //arrow function

//  const print =(a,b)=>{
//     console.log(a+b);
//  }
//  const cube=(n)=>{//() hta ke v use ke skte hai sinlge argument me
//     return n*n*n;
//  }
//  const hello1=()=>{
//     console.log("hello world");
//  };

//  //implicit return
//  const mul=(a,b)=>(
//     a*b
//  )
//  const cube1=(n)=> n*n*n
      
 //setTimeout
//  console.log("hi there")
//  setTimeout(()=>{
//     console.log("apna college")
//  },4000)
//  console.log("welcome to")

 //set interval
//  console.log("hi there")
//   let id=setInterval(()=>{
//     console.log("apna college")
//  },4000)
//  console.log("welcome to")

 //q
//   let square=(n)=>{
//    return n*n;
//   };

//  let id=setInterval(()=>{
//     console.log("hello world");
//   },2000);

//   setTimeout(()=>{
//     clearInterval(id);
//      console.log("clear interval run")
//   },12000)
 
//q
// const iseven=(n) => {
//     if(n%2==0){
//         console.log("even")
//     }else{
//         console.log("odd")
//     }

// }

// let length=4;
// function callback(){
//     console.log(this.length);
// }

// const object={
//     message:'hello,world!',

//     logMessage() {
//         console.log(this.message);

//     }
// }
// setTimeout(object.logMessage,1000);


// arr=[1,2,3,4,5]
//  arrayAverage=()=>{
//     let number=0;
//     for(let i=0;i<arr.length;i++){
//         number+=arr[i];
//         }
//     return number/arr.length;

//  }
// function calculateCarPrice(...num1){
//     return num1;
    
// }
// console.log (calculateCarPrice(200,333,455,66));

// arr=[100,200,300,400]
// function returnSecondarray(getarray){
//     return getarray[3]

// }
// console.log(returnSecondarray([100,200,300,400]))

//for each method
// arr=[1,2,3,4,5]
// arr.forEach(function(laptop){
//     console.log(laptop)
// });

// arr=[1,2,3,4,5]
// arr.forEach((laptop)=>{
//     console.log(laptop)
// });

// let arr=[
//   {
//     name:"vikash kumar",
//     age:95,
// },
// {
//     name:"shardha",
//     age:94,
// },
// {
//     name:"aman kumar",
//     age:92,
// },
// ];

// arr.forEach((student)=>{
//     console.log(student.age)
// });


//map function
// let num=[1,2,3,4,5]
// let double=num.map(function(el){
//     return el*2
// });

//filter
let nums=[1,2,3,5,7,9,6,];
let ans=nums.filter((el)=>{
    return el%2==0
});

//every

let sums=[2,4,7,9,]
let ss=sums.every((el)=>{
    return(el%2==0);//output:false
})

//reduce method
let lap=[1,2,3,7];
let la=lap.reduce((sum,el)=> (sum+el));
console.log(la);

//find maximum value in using reduce

let num=[1,2,3,5,8,,9,11,18];
let maxvalue=num.reduce((max,el)=>{
    if(max<el){
        return el;
    }else{
        return max;
    }
    
});
console.log(maxvalue);

//spread
let arr=[1,2,3,4,5]
let val=((el)=>{
    return el
});
//spread with aray
let arr1=[1,2,3,4,5]
let newarr=[...arr1]
console.log(newarr)

//spread with string

let char=("apnacollege");
console.log(...char)

let odd=[1,3,5,7,9]
let even=[2,4,6,8]

  let news=[...odd,...even]
console.log(news);

//spread obj literals
const data={
    email:"vikashgmail.com",
    password:"abc",

};
const datacopy={...data,id:123,country:"india"}

let arr2=[1,2,3,4,5]
let obj1={...arr2};

//q
let arr3=[1,2,3,4]
arr3.forEach((el)=>{
   console.log(Math.sqrtel)
});

