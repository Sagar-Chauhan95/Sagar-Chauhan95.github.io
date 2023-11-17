// let arr = [1,2,3,4,5];
// let product = arr.reduce((pro,current)=>pro*current,1);
// let maxNum = arr.reduce((max,current)=>(current>max)?current:max);
// console.log(product);
// console.log(maxNum);




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


interface Session {
    userId: number;
    duration: number;
  }
  
  interface Day {
    sessions: Session[];
    date: string;
  }
  
  const session1 = { userId: 1, duration: 60 };
  const session2 = { userId: 2, duration: 45 };
  const session3 = { userId: 2, duration: 30 };
  const session4 = { userId: 3, duration: 15 };
  const session5 = { userId: 3, duration: 75 };
  const day1 = { sessions: [session1, session2], date: "01/10/2022" };
  const day2 = { sessions: [session3, session4, session5], date: "01/11/2022" };
  const dailyRecord = [day1, day2];
  
  function getDuration(dailyRecord: Day[]): Map<number, number> {
    return dailyRecord.reduce((userDurations, day) => {
      day.sessions.forEach(session => {
        const { userId, duration } = session;
        userDurations.set(userId, (userDurations.get(userId) || 0) + duration);
      });
      return userDurations;
    }, new Map<number, number>());
  }
  
  const userDurations = getDuration(dailyRecord);
  
  console.log(userDurations);

