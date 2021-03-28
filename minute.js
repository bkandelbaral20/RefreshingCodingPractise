//Write a function that takes an integer and converts it to hours Plus minutes.

function time(num){

var hours = Math.floor(num / 60);
var minutes = num % 60;

  return " Time is " + hours + " hour : " + minutes + " minutes ";
}

console.log(time(100));


