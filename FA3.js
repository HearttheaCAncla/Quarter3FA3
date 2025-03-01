function generateNumber(){
    var random = Math.ceil(Math.random()*20);
    return random;   
}

var num1 = generateNumber();
var num2 = generateNumber();
var num3 = generateNumber();
var fastest;

document.getElementById("d1").innerHTML = num1;
document.getElementById("d2").innerHTML = num2;
document.getElementById("d3").innerHTML = num3;

if (num1 == num2 == num3) {
    fastest = num1;
    car = "McLaren Mercedes, Ferrari, Mercedes";
}

else if (num1 == num2) {
    fastest = num1;
    car = "McLaren Mercedes, Ferrari";
}

else if (num2==num3) {
    fastest = num2;
    car = "Ferrari, Mercedes";
}

else if (num1==num3) {
    fastest = num1;
    car = "McLaren Mercedes, Mercedes";
}

else if (num1 > num2 && num1 > num3) {
    fastest = num1;
    car = "McLaren Mercedes";
}

else if (num2 > num1 && num2 > num3){
    fastest = num2;
    car = "Ferrari";
}

else if (num3 > num1 && num3 > num2) {
    fastest = num3;
    car = "Mercedes";
} 

document.getElementById("fastest").innerHTML = "The fastest car is: " + car + " (" + fastest + ")";

var alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
letter = alphabet[num1-1];
document.getElementById("driver").innerHTML = "The name of the driver starts with the letter: " + letter;

var time, hr, mins;
time = num2*num3;
hr = Math.floor(time / 60);
min = time % 60;
document.getElementById("time").innerHTML = "The time it took for him/her to finish the track is " + "(" + time + " mins): " + hr + "hr " + min + "min";


