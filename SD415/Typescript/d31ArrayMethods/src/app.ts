// let arr = [1,2,3,4,5];
// let product = arr.reduce((pro,current)=>pro*current,1);
// let maxNum = arr.reduce((max,current)=>(current>max)?current:max);
// console.log(product);
// console.log(maxNum);

// import { time } from "console";

// import { stat } from "fs";

// import { resourceLimits } from "worker_threads";




//practice

// let users = [
//     {id: 1, name: "John"},
//     {id: 2, name: "Pete"},
//     {id: 3, name: "Mary"}
//    ];
//    function sorts(a:string,b:string){
//     if(a>b) return 1;
//     if(a==b) return 0;
//     if(a<b) return -1;
//     return 0;

//    };

// //   let sortedUser= users.sort((a,b)= >sorts(a.name, b.name));

// let sortedUser = users.sort((a,b)=> sorts(a.name, b.name));

  
//    console.log(sortedUser);


// type Session ={userId:number; duration:number};
// type Day = {sessions:Session[], date:string};
// type Record = Day[];

// const session1 = { userId: 1, duration: 60 };
// const session2 = { userId: 2, duration: 45 };
// const session3 = { userId: 2, duration: 30 };
// const session4 = { userId: 3, duration: 15 };
// const session5 = { userId: 3, duration: 75 };
// const day1 = { sessions: [session1, session2], date: "01/10/2022" };
// const day2 = { sessions: [session3, session4, session5], date: "01/11/2022" };
// const dailyRecord = [day1, day2];



// function calculateDailyTotalDuration(sessions:any[]):number{
//    let sum:number=0;
//    for(let session of sessions){
//        sum+=session.duration;
//    }
//    return sum;
// }


// function calculateTotalDuration(dailyRecord:any[]):number{
// let totalSum=0;
// for(let days of dailyRecord){
//    for(let episode of days.sessions){
//        totalSum+=episode.duration;

//    }
// }return totalSum;
// }

//  function getAllSessions(dailyRecord:any[]){
// // let resultArr:any[]=[];
// for(let days of dailyRecord){
// // for(let episode of days.sessions){
//    // resultArr=resultArr.concat(days.sessions);
//    return days.sessions.concat(days.sessions);
// // }
   
// }

// // return resultArr;


// }


// // function userSeason(dailyRecord:Record, userId:number):Session[]{
// //    let resultArr:Session[]=[];
// //    for(const days of dailyRecord){
// //       const result1 = days.sessions.filter((session)=>{if(session.userId===userId){
// //          return true;
// //       }
// //       return false;
      
// //    });
// //    resultArr=resultArr.concat(result1);
// //    }
// //    return resultArr;
// // }

// function userSeason(dailyRecord:Record, userId:number):Session[]{
//    let resultArr:Session[]=[];
//    for(const days of dailyRecord){
//       const result = days.sessions.filter((session)=>{if(session.userId===userId){return true}return false});
//       resultArr = resultArr.concat(result);
//    };
//    return resultArr;

// };

// function getDuration(dailyRecord:any[]):number[]{
//    let newArr:number[]=[];
//    for(const days of dailyRecord){
//       const result = days.sessions.map((session:Session)=>{return session.duration;
//       });
//       newArr=newArr.concat(result);
//    }
//    return newArr;
   

// }




  

//  function replaceEnds(arr:number[],numA:number,numB:number,numC:number,numD:number):number[]{
//    let newArr:number[]=arr.slice();
//    newArr.splice(0,2,numA,numB);
//    newArr.splice(3,6,numC,numD);
//    return newArr;
// };


//    const arr = [5, 4, 3, 2, 1, 0];
//    // const result = [6, 1, 3, 2, 4]
// console.log(replaceEnds(arr, 6, 1, 2, 4));
//   console.log(replaceEnds(arr, 10, 9, 8, 7));
//     console.log(arr);
   


//    //  function higho(operation:(num:number)=>number,arr:number[]):number[]{
//    //    return arr.map(operation);
//    // }
//    // export function square(num:number):number{
//    //   return num*num;
//    // };
//    // export function absVal(num:number):number{
//    //    return Math.abs(num);
//    // }

//    function higho(operation:(a:number,b:number)=>number,numA:number[]):number[]{
//       return numA.map(operation);
//    }

//    function square(num:number):number{
//       return num*num;
//    }

//    function absVal(num:number):number{
//       return Math.abs(num);
//    }

//        const numArr1 = [1, -2, 3];
//        const numArr2 = [-1, 4, -10];
//    console.log((higho(square, numArr1)));
//     console.log(higho(square, numArr2));
//   console.log(higho(absVal, numArr1));
// console.log(higho(absVal, numArr2));


// //  function firstLast(names:string[]):{firstName:string;lastName:string}[]{

// //    return names.map((item:string)=>{const[firstName,lastName]=item.split(" ");
// //    return {firstName,lastName};
// //    });
// // };

// function firstLast(names:string[]):{firstName:string; lastName:string}[]{
//    return names.map((name)=>{const[firstName,lastName]=name.split(' ');
// return {firstName,lastName};
// });
// };


// const names = ["Fred Smith", "Carl Lindstrom"];
// // const output = [{ firstName: 'Fred', lastName: 'Smith' }, { firstName: 'Carl', lastName: 'Lindstrom' }]
// console.log(firstLast(names));






// console.log(calculateDailyTotalDuration(day2.sessions));
// console.log(calculateTotalDuration(dailyRecord));
// console.log(getAllSessions(dailyRecord));
// console.log(getDuration(dailyRecord));
// console.log(userSeason(dailyRecord,2));



// let arr = [1,2,3,4,5];
// let result = arr.filter((number)=>number%2==0);
// console.log(result);
// console.log(result.length);

// let arr:number[]= [1,2,3];
// let num:number=2;
// function check(arr:number[],num:number){
//    arr.includes(num)
//    return true;

// }
// console.log(check(arr,num));


// function makeCounter():(num?:number)=>string{
//    let count =0;
//    return function(num?:number):string{
//       count++;
//       if(num>1){
//          return `Warning: increment was by value greater than 1: ${num-count+1}`
//       }else{
//          return num-count+1;
//       }
      

//    }
// }
// const myCount =makeCounter();
// console.log(myCount(10));



//The following objects record the season statistics for players on a basketball team.
// const player1 = {jersey: 8, stats: [ {game : 1, points: 6}, {game : 2, points : 7} ] };
// const player2 = {jersey: 12, stats: [ {game : 1, points: 16}, {game : 2, points : 14} ] };
// const player3 = {jersey: 6, stats: [ {game : 1, points: 10}, {game : 2, points : 6} ] };
// const teamStats = [player1, player2, player3];

// //Write a function, findHighScores, that finds the high score in the season for each player as follows:
// console.log("expect [{jersey: 8, high: 7}, {jersey: 12, high: 16}, {jersey: 6, high: 10}]: " , findHighScores(teamStats));


// type Stats ={game:number; points:number};
// type Player = {jersey:number; stats:Stats[]};

// function findHighScores(teamStats:Player[]):{jersey:number; high:number}[]{
//    let finalResult:{jersey:number; high:number}[]=[];
//    for(const players of teamStats){
//       let result ={jersey:0,high:0}
//       for(const points of players.stats){
//          let high1= Object.values(points);
//          result.high=Math.max(...high1);
      
//       }
//       result.jersey=players.jersey;
//       finalResult.push(result);
      
//    }return finalResult;
  
   
   
// }


// interface Session {
//     userId: number;
//     duration: number;
//   }
  
//   interface Day {
//     sessions: Session[];
//     date: string;
//   }
  
//   const session1 = { userId: 1, duration: 60 };
//   const session2 = { userId: 2, duration: 45 };
//   const session3 = { userId: 2, duration: 30 };
//   const session4 = { userId: 3, duration: 15 };
//   const session5 = { userId: 3, duration: 75 };
//   const day1 = { sessions: [session1, session2], date: "01/10/2022" };
//   const day2 = { sessions: [session3, session4, session5], date: "01/11/2022" };
//   const dailyRecord = [day1, day2];
  
//   function getDuration(dailyRecord: Day[]): Map<number, number> {
//     return dailyRecord.reduce((userDurations, day) => {
//       day.sessions.forEach(session => {
//         const { userId, duration } = session;
//         userDurations.set(userId, (userDurations.get(userId) || 0) + duration);
//       });
//       return userDurations;
//     }, new Map<number, number>());
//   }
  
//   const userDurations = getDuration(dailyRecord);
  
//   console.log(userDurations);



// let student = [{name:'sag',class:3},{name:'bag',class:4},{name:'aag',class:1},{name:'alex',class:3}];
// let sortedStudent= student.sort((a,b)=>a.class-b.class);
// console.log(sortedStudent);

// let sortedByName= student.sort((a,b)=>{
//   const nameA= a.name.toUpperCase();
//   const nameB = b.name.toUpperCase();
//   if(nameA>nameB){
//     return 1
//   }else if (nameA<nameB){
//     return -1
//   }else return 0;

// })
// console.log(sortedByName);
// student.sort((property1,property2)=>(property1.name-property2.class))


// let john = { name: "John", surname: "Smith", age: 10 };
// let pete = { name: "Pete", surname: "Hunt", age: 20 };
// let people = [ john, pete];

// type Person = {name:string; surname:string; age:10};

// Use the map function to map the people array to the following:
// [{ fullName: "John Smith", age: 10 },
// { fullName: "Pete Hunt", age: 20 },]

// function mappingNames(people:Person[]):{fullName:string,age:number}{

// return people.map((person)=>{
//     return {fullName = person.name +" "+ person.surname,
//    age = person.age;
// }});
// }


// Final Exam practice
////
////
//
/////
// 1. Printing index and length of each item
// const names:string[]=["Bilbo", "Gandalf", "Nazgul"];

// function returnLength(names:string[]):string[]{
//     return names.map((item,index)=> (`${index} : ${item.length}`));
// }
// console.log(returnLength(names));

// 2. Sorting array
// let arr :number[]= [ 2, 1, 15 ]
// let arr :string[]=['sag','aag','dog']
// function sortArray(arr:(number|string)[]):(number|string)[]{
//     // return arr.sort((a,b)=>a-b);  // to sort number 
// function sortNumbers(a:number,b:number):number{   // for ascending order
//     if(a>b){
//         return -1;
//     }else if(a<b){
//         return 1;
//     }else{return 0;
        
//     }
// }

// function sortNumbers(a:number,b:number):number{  // for decending order
//     if(a>b){
//         return -1;
//     }else if(a<b){
//         return 1;
//     }else{return 0;
        
//     }
// }
// const sortedArray = arr.sort(sortNumbers);  // another way to sort number;
// console.log(sortedArray);
    // return arr.sort(); // sorting characters because array.sort() always sort items as string
// }
// console.log(sortArray(arr));


// // 3. Use of reduce
// let arr:number[] = [1, 2, 3, 4, 5];
// function sumArray(arr:number[]):number{
//     // return arr.reduce((sum,current)=>sum+current,0);  // to print sum of array
//     // return arr.reduce((product,current)=>product * current,1);  // to print product of array
//     return arr.reduce((max,current)=>(Math.max(max,current)));  // To find max number in the array
// }
  
// let student= {name:'sag',age:12}
// // let result1=Object.keys(student);
// // let result2 = Object.values(student);
// let result3 =Object.entries(student);
// for(let [key,value] of result3){
//     console.log(`${key} : ${value}`);

// }
// console.log(result1);
// console.log(result2);
// console.log(result3);


// Recursion
//Factorial of number
// function calculateFact(a:number):number{
//     if(a===1){
//         return 1
//     }else{
//         return a*calculateFact(a-1);

//     }
// } 
// console.log(calculateFact(5));


//returning Highest common factor between two number
// function highestCommonFactor(a:number,b:number):number{
//     if(b===0){
//         return a;
//     }else{
//         return highestCommonFactor(b, a%b);
//     }
// }
// console.log(highestCommonFactor(32,8))


// returning numbers between range of two number
// function getNumberBetween(start:number,end:number):number[]{
//     if(end-start===2){
//         return [start+1];
//     }else{
//         let list = getNumberBetween(start, end-1);
//         list.push(end-1);
//         return list; 
//     }
// }
// console.log(getNumberBetween(2,7));

// recursion to print the sum of elements of array
// function sumOfArray(arr:number[],index:number):number{
//     if(index>=arr.length){
//         return 0;
//     }else{
//         return arr[index]+ sumOfArray(arr,index+1);
//     }
// }
    
// let  array:number[] = [1, 2, 3, 4, 5, 6]
// console.log(sumOfArray(array,0));

//returning exponent of number ( here sup is 2 because it is exponent)
// function returnExponent(num:number,sup:number):number{
//     if(sup==0){
//         return 1;
//     }else{
//         return num * returnExponent(num,sup-1);
//     }
// }
// console.log(returnExponent(8,2));


//returning cube of number
// function returnCube(num:number,cube:number):number{
//     if(cube===0){
//         return 1;
//     }else{
//         return num*returnCube(num,cube-1);
//     }
// }
// console.log(returnCube(3,3));


//Destructuring
// const team =['Bob','Fred','Jim'];
// const [firstPerson, secondPerson, ...remain]:string[]= team;
// console.log(firstPerson.toLowerCase());
// console.log(secondPerson.toLocaleLowerCase());
// console.log(remain);
// console.log(...remain);

// type Student ={name:string;age:number};
// let student:Student ={name:'sagar',age:12}

// const{name:n,age:ag}:{name:string,age:number}=student;
// console.log(n);
// console.log(ag);

// // //Destructuring object
// type Team = {point:string; shooting:string; power:string; small:string; center:string};
// const team:Team= { point: "Bob", shooting: "Fred", power: "Jim", small: "Al", center: "Big Sleep" };
// const {point:one,shooting:two,power:three,small:four,center:five}:Team=team;

// console.log(one);
// console.log(two);
// console.log(three);
// console.log(four);
// console.log(five);

// type Student ={name:string;age:number};
// const student:Student ={name:'sag',age:10};
// function getName({name, age}:Student):string{
//     return  `${name} + : ${age}`;
// }
// console.log(getName(student));


// function makeCounter():(num:number)=>number{
// let count:number =0;
// return function innerFunc(a:number):number{
    
//     return count+a;

// }
// }

// console.log(makeCounter()(5));

// const array:number[] =[1,2,3,4,5,7,9];
// let x:number=2;
// let y:number=6;


// function filterNumbers(arr:number[]):(numA:number,numB:number)=>number[]{
//     return function innerFilter(a:number,b:number):number[]{
//        return arr.filter((item)=>(item>=a && item<=b));
//     }
// }
// console.log(filterNumbers(array)(x,y));

// Returning sum of array using ...rest operator
// let array:number[] =[1,2,3,4,5,6];
// function arraySum([x,y,...rest]:number[]):number{
//     let total:number = x+y;
//     let subTotal = rest.reduce((sum,current)=>sum+current,0);
//     return total + subTotal;

// }
// console.log(arraySum(array));

// Returning even elements of array using rest operator
// let array:number[] =[2,3,4,5,6];
// function returnEven([x,...rest]:number[]):number[]{
//     let result:number[]=[];
//     if(x%2===0){
//         result.push(x);
//     }
//     let subTotal = rest.filter((num)=>num%2===0);
//     result =result.concat(subTotal);
//     return result;
// }

// console.log(returnEven(array));

// returning product of even numbers of array
// let array:number[] =[2,3,4,5,6];
// function arrayProductEvenNumbers([x,...rest]:number[]):number{
//     let resultedProduct = 1;
//     if(x%2===0){
//         resultedProduct=resultedProduct*x;
//     }
//     let subProduct = rest.reduce((product,current)=>{
//         if(current%2===0){
//             return product*current;
//         }return product
      
// },1);
// resultedProduct=resultedProduct*subProduct;
// return resultedProduct;
   
// }
// console.log(arrayProductEvenNumbers(array));


//Return of closure function 
// function callMe():()=>void{
//     let name="Ram"
//     return function me():void{
//         console.log("hello"+name);
    
//     }
// }
// callMe()(); // different result between just calling and printing callback
// console.log(callMe()());

// function sayHi(phrase:string):void{
//     console.log('Hello '+ phrase)
    
// }
// let timerId=setTimeout(sayHi,4000,'sagar');
// timerId;
// setTimeout(()=>{clearTimeout(timerId);console.log("reduced to 0")},0);
// // let intervalTime= setInterval(sayHi,2000,'sagar');
// // setTimeout(()=>{clearTimeout(intervalTime);console.log("stop")},6000);


// //Recursion fibonacci
// function fibonacci(n:number):number{
//     if(n<=1){
//         return n;
//     }else {
//         return fibonacci(n-1)+fibonacci(n-2);
//     }
// }

// console.log(fibonacci(7));

