const fencginOfWire=(perimeter,rate,numOfWire)=>{
    for(i=0;i<perimeter.length ;i++){
        a = a + perimeter[i];
    }
    console.log(a)
    price = a*rate*numOfWire;
    return price;
}
console.log(`Total Cost Of Wires is ${fencginOfWire([30,20,30],10,19)}`)