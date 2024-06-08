//program 1 checking age eligibility


let age= +prompt("enter your age ")
if(age<=65 && age>=18){
    alert("you are eligible to apply ");
}
else{
    alert("you are not eligible");
}

//program 2 login access

let username= prompt("enter your user name");
let password= prompt("enter your password");
if(username==="admin" || password==="secret"){
    alert("access granted mate");
}
else{
    alert("better luck next time access denied");
}

//program 3  checking for night time using not

let time= +prompt("enter the current time between 0-23")
if(!(time>=7 && time<=17)){
    alert("its night time");
}
else{

    alert("its daytime");
}

//program 4 checking for even or odd

let even= +prompt("enter a number to check for odd or even")
if(even%2===0){
    alert("your value is even");
}
else{
    alert("your value is odd");
}

//program 5 checking for weekend weekday

let day=prompt("enter todays day  to see if its weekday or weekend (in lowercase)")
if(day==="saturday" || day==="sunday"){
    alert("today is weekend");
}
else{
    alert("today is weekday");
}
