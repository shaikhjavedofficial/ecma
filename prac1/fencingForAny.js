const fencginOfWire=(perimeter,rate,numOfWire)=>{
    let a=0;
    for(i=0;i<perimeter.length ;i++){
        a = a + perimeter[i];
    }
    console.log(a)
    price = a*rate*numOfWire;
    return price;
}
console.log(`Total Cost Of Wires is ${fencginOfWire([30,20,30],10,19)}`)

const fnew=(p,r,w)=>{
    let sum = 0;
    p.forEach((element) => {
       sum= sum+element;
    });
    return sum*w*r;
}
console.log(fnew([16,15,23,65,95],50,5));

const num=(num1)=>{
    var sum=0;
    num1.forEach((element) => {
        element%2==0?(sum = sum + element):"haha";
    });
    return sum;
}
console.log(num([12,10,66,64,65]));

const arraysqr=(num1)=>{
    let sqr=[];
    num1.forEach(element => {
      sqr= sqr.concat(Math.pow(element,2)); 
    });
    return sqr;
}
console.log(arraysqr([5,2,7,9,10]));

const sqr=(num1)=>{
    let sqr=[];
    num1.forEach(element => {
      sqr.push(Math.pow(element,2)); 
    });
    return sqr;
}
console.log(sqr([5,2,7,9,10]));

const sqra=(num1,power)=> num1.map((element) => element**power);
console.log(sqra([5,2,7,9,10],2));

const info=(infodata)=>infodata.map((element) => `${infodata.fname}+${infodata.lname} is from ${infodata.city} his contact number is ${infodata.mobile}`);
console.log(info([{fname:"Farhan",lname:"khan",city:"pune",mobile:8275199525}]))