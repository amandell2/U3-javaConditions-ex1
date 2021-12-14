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