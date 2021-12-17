const actualTemp = 68;
const desiredTemp = 68;

if (actualTemp > desiredTemp){
    //Run AC
    console.log("Run A/C");
}
else if(actualTemp < desiredTemp){
    //Run Heat
    console.log("Run Heat");
}
else{
    //Standby
    console.log("Standby");
}

const tempCelcius = 25;
const targetUnit = "K";

switch (targetUnit){
    case 'F':
        console.log((tempCelcius*1.8)+32)
        break;
    case 'K':
        console.log(tempCelcius + 273.15)
        break;
    case 'C':
        console.log(tempCelcius);
        break;
}