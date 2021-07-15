//function addMe(num1,num2){
 //   var sum=num1+num2;
 //   console.log("sum of "+num1, " and "+num2 + " = " + sum);
 //   console.log(`sum of ${num1} and ${num2} is equal to ${sum}`);
//}
//addMe(6,655);
//function bigger(h,j){
//    if(h>j){//
  //      return h;
 //   }else{
 //       return j;
 //   }
//}
//const big=(a,b)=>(a>//b?a:b)
//console.log(`Bigger number is ${big(2516,2516)}`);
//const mod=(num)=>!(num%2==0);
//console.log(mod(122));
//const mod=(num)=>(num%7==0);
//console.log(mod(7000));
//const power=(num, pow)=>(num**pow);
//console.log(power(5e5,5e5));
const areaOfRect=(b,w)=>a=b*w;
//console.log(areaOfRect(20,10));
const areaOfTri=(b,l)=>a=(1/2)*b*l;
//console.log(areaOfTri(10,20));
const areaOfRectTri=(h,b,x)=>a=((1/2)*(h-x)*b)+(b*x);
//console.log(areaOfRectTri(30,15,10));
const cir=(num)=>3.14*(num**2);
//console.log(cir(50))
const pro=(l,h,R,x,r)=>{
   var a=(h*(l-r))+(x*(l-r)*(1/2))+((3.14*(r**2))/2)-(3.14*(R**2))
    return a;
}

console.log(pro(27,14,5,12,7))
const areaOfTriangle=(x, b)=> (1/2) *x*b;
const areaOfRectangle=(b, h)=> b*h ;
const areaOfCir=(r)=> 3.14*r*r;


const x=12;
const b=20;
const h=14;
const R=7;
const r=5;

console.log(`Area of diagram is ${(areaOfTriangle(x, b)+areaOfRectangle(b, h)+(areaOfCir(R)/2))-areaOfCir(r)}`);