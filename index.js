//Using ternary operator
var age = 25;
var output = (age<30)? "Adult": "Old";
console.log(output)


//Using if....else operator
var age = 30;
if(age<30){
    console.log("Adult")
}
else{
    console.log("Old")
}



//Switch Case
var day = "wednesday"
switch (day) {

    case "monday":
        console.log(0);
        break;

    case "tuesday":
        console.log(1);
        break;
            
    case "wednesday":
        console.log(2);
        break;

    case "thursday":
        console.log(3);
        break;
            
    case "friday":
        console.log(4);
        break;

    case "saturday":
        console.log(5);
        break;

    case "sunday":
        console.log(6);
        break;

    default:
        console.log("Invalid day");
        break;
}