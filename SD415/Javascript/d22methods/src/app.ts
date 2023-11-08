const numbers: {[key:string]:number}={
    one:1,
    two:2,
    three:333,
    four:444
};

const propertyOrder =["one","two","three","four"];
for(let property of propertyOrder){
    console.log(numbers[property]);
}