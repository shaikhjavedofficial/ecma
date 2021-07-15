const millageCost = (dist,millage,price) =>{
     ammount = (dist/millage)*price;
    return ammount;
}
console.log(`Amount need to fill ${millageCost(250,50,100.01)}`);