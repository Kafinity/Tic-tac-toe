/*let mode="light";
let color;
if(mode === "dark"){
  color="black";
}else{
  color="white";
};
if(mode === null){
  color="default";
}else{
  color="auto default";
};
console.log(color);*/
/*let age = 100;
if(age<=18){
  console.log("junior");
}else if(age<60 ){
  console.log("middle");
}else if(age<=75){
  console.log("senior");
}else{
  console.log("super senior");
};*/
//let age=12;
//let result=age>=18?"Adult":"Not Adult";
//console.log(result);
/*const expr = "apple";
switch (expr) {
  case "Oranges":
    console.log("Oranges are $0.59 a pound.");
    break;
  case "Mangoes":
  case "Papayas":
    console.log("Mangoes and papayas are $2.79 a pound.");
    // Expected output: "Mangoes and papayas are $2.79 a pound."
    break;
  default:
    console.log(`Sorry, we are out of ${expr}.`);
}*/
// practice question 1
/*let num = prompt("Enter a number");
if (num %5===0){
  alert("This number is a multiple of 5")
}else {
  alert ("This number is not a multiple of 5")
}*/
// practice question 2 - JS Program*/
/*let score = prompt("Enter your score (0-100)to check your Grade !");
if (score <=100 && score >=90){
  alert("Congratulations! Your acheive Grade A")
}else if(score <90 && score>=70){
  alert("Congratulations! Your acheive Grade B")
}else if(score <70 && score>=60){
  alert("Congratulations! Your acheive Grade C")
}else if(score <60 && score>=50){
  alert("Congratulations! Your acheive Grade D")
}else if(score <50 && score >=0){
  alert(" You Failed")
}else{
  alert("Kindly enter your Score properly!")
};*/
/*let fullName = "kaif Saifi"
//for (i=1;i<=9;i++){
 // console.log(fullName);
}*/
// sum of 1 to 5 
// for loop
/*let sum=0;
let n=100;
for(let i=1;i<=n;i++){
  sum= sum+i;
};
console.log("sum of 1 to 5 is",sum);*/
//while loop
/*let sum=0;
let i=1;
while(i<=5){
  sum+=i;
  i++
}
console.log(sum);*/
//do-while loop
/*let sum=0;
let n=10;
let i=20;
do{
  sum+=i;
  i++;
  console.log(sum);
}while(i<=n);*/
// for of loop
/*let str ="kaif saifi";
for(let i of str){
  console.log("i=",i);
}
*/
//for in loop 
/*let student ={
  name:"kaif",
  age:18,
  isPass:true,
}
for(let key in student){
  console.log("key =",key,"value =",student[key]);
}*/
//practice q1
/*let n=100
for(let i=0;i<=n;i++){
  console.log("i=",i);
}*/
/*for(let i=0;i<=100;i++){
  if(i%2===0){
    console.log(i);
  }else{
    
  }
}*/
//practice q2
/*let gameNum = 18;
let userNum = prompt("guess the gameNumber");
while(userNum != gameNum){
 userNum = prompt("You guess the wrong Number.Guess Again !");
}
alert("Congratulations you guess the right Number");*/
//let i = "kaif";
//console.log(i[3]);
//practice question1
/*let userInput = prompt(`Enter your fullname to generate username `);
alert(`Your usename is @${userInput.concat(userInput.length)} `);*/
/*let arr= ["kaif","saif","alfiya"];
for(let i of arr){
  console.log(i);
}*/
//practice q 1
/*let marks =[85,97,44,37,76,60];
let sum=0;
for(let i of marks){
  sum = sum+i;
}
console.log(`Average marks of the entire class ${sum/marks.length}`);*/
/*"let marks=[200,645,300,900,50];
let item =1
for(let p of marks){
  console.log(`price of item ${item} = ${p}`)
  console.log(`Price of item ${item} after offer = ${p-10/100*p}`);
  item++;
  */
/*let arr = ["bloomberg","Microsoft","Uber","Google","IBM","Netflix"];
arr.shift();
arr.splice(1,1,"Ola");
arr.push("Amazon");
console.log(arr);*/
// functions
/*function sum(a,b){
  console.log(a+b);
}
sum(3,5);
const arrowSum = (a,b)=>{
  console.log(a+b);
};
arrowSum(5,6);
function multiply(a,b){
  console.log(a*b);
}
function sub(a,b){
  console.log(a-b);
}
function divide(a,b){
  console.log(a/b);
}
*/
//question1
/*function vowelCount(str){
  let count =0;
  for (let char of str){
    if(char==="a"||char==="e"||char==="i"||char==="o"||char==="u"){
      count++;
    }
  }
  console.log(count);
}
vowelCount("alfiya");*/
/*const vowelCount =(str)=>{
  let count=0;
  for(let char of str){
    if(char==="a"||char==="e"||char==="i"||char==="o"||char==="u"){
      count++;
    }
  }
  console.log(count);
}
vowelCount("kaif");*/
/*let arr = [1,2,3,4,5];
arr.forEach((val) =>{
  console.log(val);
});*/
/*let arr= [1,2,3,4];
let square = (i)=>{
  console.log(i**2);}
arr.forEach(square);*/
/*let arr= [1,2,3,4];
let newArr = arr.map((val)=>{
  return val;
});
console.log(newArr);*/

/*let arr= [1,2,3,4,5,6,7,8,9,10];
let newArr = arr.filter((val)=>{
  return val%2===0;
  
})
console.log(newArr);*/
// greater value of arr fnx
/*let arr=[1,2,3,109,4,5];
const sum = arr.reduce((pre,val)=>{
  return pre>val? pre : val ;
});
console.log(sum);*/
//practice question1
/*let marks=[90,87,64,98,76,95,87,94,91,99];
let filterMarks = marks.filter((val)=>{
  return val>90;
})
console.log(filterMarks);*/
//practice question2
/*let n = prompt("enter a number ");
let arr=[];
for (let i=1;i<=n;i++){
  arr[i-1]=i;
}
console.log(arr);
const sum = arr.reduce((pre,val)=>{
  return pre+val;
});
console.log(sum);
const multiply= arr.reduce((pre,val)=>{
  return pre*val;
});
console.log(multiply);
*/
/*let heading = document.getElementsByClassName("heading");
console.dir(heading);
let para = document.getElementsByTagName("p");
console.dir(para);*/ 
//practice question1
/*let heading= document.querySelector("h1");
heading.innerText +=  " from Apna College student";
console.dir(heading);*/
//question2
/*let allBox = document.querySelectorAll(".box");
allBox[0].innerText += " kaif";
console.dir(allBox);*/
/*let allBox = document.querySelectorAll(".box");
let i=1;
for(let box of allBox){
  box.innerText= `new unique value ${i}`;
  i++;
}
*/
//reposition by appendChild
/*let parent = document.querySelector(".parent");
let child1 =document.querySelector("#child1");
parent.appendChild(child1);*/
//practice question1
/*let button = document.createElement("button");
button.innerText= "click me!";
button.style.color = "white";
button.style.backgroundColor = "red";
document.querySelector("body").prepend(button);

//practice question2 not done
let paragraph = document.querySelector("p");
para.classList.replace("para","newClass");*/
//let btn = document.querySelector("#btn");
/*btn.onclick=(e) =>{
 // let i=1;
 // console.log(`thank you ${i}`);
  //i+=1;
  console.log(e);
  console.log(e.type);
  console.log(e.target);
  console.log(e.clientX,e.clientY);
}*/
/*btn.addEventListener("click",(evt) =>{
  console.log("handler 1");
});
btn.addEventListener("click",(evt) =>{
  console.log("handler 2");
});
const handler3 = (evt) =>{
  console.log("handler 3");};
btn.addEventListener("click",handler3);
btn.addEventListener("click",(evt) =>{
  console.log("handler 4");
});
btn.removeEventListener("click",handler3);*/
//practice question1
/*let btn= document.querySelector("#mode");
let mode = "light";
let body = document.querySelector("body");
btn.addEventListener("click",() =>{
  if(mode ==="dark"){
    mode= "light";
    console.log("light");
   body.classList.add("light");
    body.classList.remove("dark");
  }else{
    mode ="dark"
    console.log("dark");
    body.classList.add("dark");
    body.classList.remove("light");
  }
})*/
let boxes =document.querySelectorAll(".box");
let reset =document.querySelector("#reset");
let msgContainer =document.querySelector(".msgContainer");
let msg =document.querySelector("#msg");
let newBtn =document.querySelector("#newBtn");

let turnO = false; //playerX,playerO
const winPattern = [
   [0,1,2],
   [3,4,5],
   [6,7,8],
   [0,3,6],
   [1,4,7],
   [2,5,8],
   [0,4,8],
   [2,4,6]
  ];
  let clickCount = 0;
boxes.forEach((box) => {
  box.addEventListener("click",() =>{
    if(turnO){
      box.innerText="O";
      turnO=false;
    }else{
      box.innerText ="X";
      turnO= true;
    }
    box.disabled = true;
    let isWinner = checkWinner();
    clickCount++;
    
    if (clickCount ===9 && !isWinner){
      draw();
    }
  });
});

let newGame =() =>{
  turnO = false;
  enableBoxes();
  msgContainer.classList.add("hide");
  clickCount = 0;
}

reset.addEventListener("click",newGame);

newBtn.addEventListener("click",newGame);

let disableBoxes = () =>{
  for(let box of boxes){
    box.disabled = true;
  };
};

let enableBoxes = () =>{
  for(let box of boxes){
    box.disabled = false;
    box.innerText ="";
  };
};

const showWinner = (winner) => {
  msg.innerText = `Congratulation Winner is ${winner}`;
  msgContainer.classList.remove("hide");
  disableBoxes();
}

const checkWinner =()=>{
  for(let pattern of winPattern){
    let pos1 =  boxes[pattern[0]].innerText;
    let pos2 =  boxes[pattern[1]].innerText;
    let pos3 =  boxes[pattern[2]].innerText;
    if (pos1!="" && pos2!="" && pos3 !=""){
      if (pos1 === pos2 && pos2 === pos3){
        showWinner(pos1);
        console.log (`winner ${pos1}`);
        return true;
      }
    }
    
  }
}
let draw =() =>{
  msg.innerText ="this is a Draw !";
  msgContainer.classList.remove("hide");
  disableBoxes();
}
    



