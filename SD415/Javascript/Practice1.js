/**
 * This is a practice file
 * My daily routing
 * sdjkh
 * @param {num}
 */
// const prompt =require('prompt-sync')();

// // // let x =String(7);  // way to make string
// // // let x1 = ""+7;    // way to make string
// // // let y=Number(x);  // way to make number
// // // let z = +x;    // way to make number
// // // console.log(typeof(x));
// // // console.log(typeof(y));
// // // console.log(typeof(z));
// // // console.log(typeof(x1));

// // // console.log(Math.sqrt(36));


// // // let x= false;
// // // let y= 0;
// // // let z = null;
// // // console.log(x||y||z);  // null
// // // console.log(x??y??z);  // false
// // // console.log(x||y);  // 0
// // // console.log(x??y);  // false




// // //  let i = 3;

// // // while (i) {
// // //   alert( i-- );
// // // }


// // // let x= parseInt(prompt("Enter a number: "));
// // // switch(x){
// // //     case 1: console.log("good");
// // //     break;

// // //     case 5: console.log("fail");
// // // }



// // function checkAge(age) {
// //     let confirm;
// //        let dan =1;
// //     return (age > 18) || confirm('Did parents allow you?');
// //   }

// //   console.log(checkAge(12));

//   // function ssReverse(arr){ 
//   //  // let array1:number[]=[];
//   //  // for(let i = arr.length-1; i < arr.length; i++){
//   //  //     array1.push(arr[i]);
//   //  // }
//   //  arr.reverse();
//   //  return arr; };

//   //  console.log(ssReverse([1,2,3,4]));

//   //      if {



//   //      }

//   // let arr =[1,2,3,4];
//   // console.log(arr.at(-3));

//   // const foo = console.log("hello");
//   // // console.log(foo+ "call");
//   // function write2file(content: number) {
//   //   fsys.writeFile("./testWrite.txt", content, function () {}
//   //   return fsys; );
//   // }
//   //   const returnVal = write2file( Math.max(1, 2, 3));



  

//   // function arrayDisplay(arr ) {
//   //   let array1 =[];
//   //   for(let element of array){
//   //     console.log(element);
//   //     array1.push(element);
      
//   //   }return array1;
//   // }

//   // let array = ["l","m","n"];
//   // console.log(arrayDisplay(array));


// // // let y=function sayHi(){
// // //     console.log("hello");
// // //     return 1;
// // //   }
// // //  let x = sayHi();
// // //  console.log(y);
// // //  console.log(y);


// // // function check(arr, array1){
// // //   let count=0;
// // //   let array2 =[];
// // //   for(let i=0; i<arr.length; i++){
// // //     for(let j=0; j<arr[i].length; j++){
// // //       for(let k =j; k<=j; k++){
// // //         if(arr[i][j]===array1[k]){
// // //           count++;

// // //         }
// // //       }
// // //     } 
// // //     array2.push(count);
// // //     count =0;

// // //   }return array2;
// // // }

// // // console.log(check([[1, 1, 2,4], [2, 1, 2,2], [3, 1, 3,4]],  [3, 1, 2,4]));


// // // function generateArray(x,y){
// // //   let resultArray =[];
// // //   let counter=1;
// // //   for(let i=0; i<x; i++){
// // //     let x=[];
// // //     for(let j=0; j<y; j++){
// // //       x.push(counter);
// // //       counter++;
// // //     }resultArray.push(x);
// // //   }return resultArray;
// // // }

// // // console.log(generateArray(3,3));


// // // function xyz(arg1){
// // //   if (arg1) {
// // //    return true;
// // //   } else {
// // //    return;
// // //   }
// // // }
// // //   const returnVal = xyz("0");
// // //   console.log(returnVal);

// // Question no 10
// // // let cat = 'Felix';
// // // let treat;

// // // function dog(arg) {
// // //   let treat = 'bone';
// // //   arg = arg + treat;
// // //   console.log(arg);
// // //   treat = treat + arg;
// // //   return treat;
// // //   console.log(treat); 
// // // }
// // // console.log(cat);
// // // console.log(dog(cat));
// // // console.log(dog());
// // // console.log(treat);

// // Question no 11
// // // function calcDifferential(array1, array2){
// // //   let sum =0;
// // //   for(let i=0; i<array1.length; i++){
// // //     for(let j=i; j<=i; j++){
// // //       if(array1[i]===array2[j]){
// // //         let x= array1[i]-array2[j]+1;
// // //         sum+=x;
// // //       }
// // //       sum+=(array1[i]-array2[j]);

// // //     }
// // //   }return sum;
// // // }

// // // console.log(calcDifferential([30,20,40],[30,20,40]));

// // Question no 12
// // function matrixMatch(array1, array2){
// //   let match;
// //   if(array1.length !==array2.length || array1[0].length !== array2[0].length){
// //     console.log("Unequal rows and columns")
// //   }else{
// //     let resultArray=[]; 
// //     for(let i=0; i<array1.length; i++){
// //       resultArray.push([]);
// //       for(let j=0; j<array1[i].length; j++){
       
// //         if(array1[i][j]===array2[i][j]){
// //           match=1;
// //           resultArray[i].push(match);
// //         }else{
// //           match =0;
// //           resultArray[i].push(match);
// //         }
// //       }
// //     }return resultArray;


// //   }

// // }
  

// // const testArr1 = [ [1,2,3], [5,2,3], [9,2,3] ];
// // const testArr2 = [ [1, 2, 10], [3, 2, 5], [9, 6, 7]];
// // console.log(matrixMatch(testArr1, testArr2)); 
// // // → [ [1, 1, 0] , [0, 1, 0], [1, 0, 0] ]


// // Question 13
// // function isPrime(num){
// //   if(num===1 || num ===0){
// //     return false;
// //   } else if( num ===2 || num ===3){
// //     return true;
// //   } else if(num%2===0 || num%3===0){
// //     return false;
// //   } else{
// //     return true;
// //   }
// // }
   
// // function factor(num){
// //   if(num<2){
// //     return 0;
// //   }else{
// //     let array=[];
// //     for(let i=2; i<num; i++){
// //       if(num%i===0 && isPrime(i)){
// //         array.push(i);
// //       }
// //     }return array;
// //   }
// // }
// // console.log(factor(10));
// // console.log(factor(6936));
// // console.log(factor(1));


// // function computeCharges(array){
// //   let resultArray = [];
// //   for(let i=0; i<array.length; i++){
// //     array.push([]);
// //     let sum =0;
// //     let min = array[i][0];
// //     let max = array[i][0];
// //     for(let j=0; j<array[i].length; j++){
// //       if(array[i][j]<array[i][0]){
// //         min =array[i][j];
// //       }
// //       if(array[i][j]>array[i][0]){
// //         max =array[i][j];
// //       }

// //       sum+=array[i][j];
// //     }
// //     let x=sum/array[i].length;
// //     resultArray[i].push(min,max,x);
    
// //   }return resultArray;

// // }

// // const charges = [[1, 2, 3, 4, 5], [10, 20, 30, 60], [300, 200, 100]]
// // console.log(computeCharges(charges)) 
// // //  output [[1, 5, 3], [10, 60, 30], [100, 300, 200]]


// // function divide(array){
// //   let count =0;
// //   for(let i=0; i<array.length; i++){
// //     if(array[i] %5 === 0){
// //       count++;

// //     }
// //   }return count;
// // }
// // array = [5,6,7,8,9];
// //  array1 = [34,35,66,77,87, 100];
// // console.log(divide(array));
// // console.log(divide(array1))

// // function calcDifferential(array1, array2){
// //   let sum=0;
// //   for(let i=0; i<array1.length; i++){
// //       if(array1[i]===array2[i]){
// //         let y= 1;
// //         sum+=y;
// //       }else {
// //         sum+=array1[i]-array2[i];
// //       }
// //     }return sum;
// //   }


// // console.log(calcDifferential ([80, 78, 82], [50, 48, 52]));
// // //  → 90
// // console.log(calcDifferential ([10, 20, 30, 40], [10, 20, 20, 20]));
// // //  → 32


// let user={};
// user.name = "john";
// user.surname = "smoth";
// user.name = "pete";
// // delete user.name;
// console.log(user);


// var a = { x:1, y: "call", z:{d:1, f:"game"}};
// var b = a;
// b.z.d = 3;
// console.log(a);
// console.log(b);
// console.log(a===b);

// let a = {id:"student", class: 3, };
// a.rollNo = {sec:"A", grade:5};
// console.log(a);
// let b = a;
// b.rollNo.grade = 8;
// console.log(a);
// console.log(b);
// delete b.rollNo;
// console.log(b);
// let c = a.id +" "+ b.class;
// console.log(c);
// b.class = b.id;
// console.log(b);
// console.log(a);


let student ={name:"sagar", class:3, section:{name: "sahfear", class:5, call:function(){console.log(this.name)}}};

student.section.call();


const foo= {sum};
function sum(arr) {
    let sum=0; 
    for (let element of arr){
    sum+=element;
} 
return sum; 
}
console.log(foo.sum);
console.log(foo.sum([1,2,3]));