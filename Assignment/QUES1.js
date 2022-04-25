//calculate No. of Minutes , Hours and seconds using 
var time = 129;
// No. of hours 
var hours = Math.floor(time/3600);
console.log("Hours = ",hours);
//no of minutes are 
var minute = Math.floor(time/60);
console.log("minutes = ",minute);
//No. of seconds 
var seconds = time - minute*60;
console.log("Seconds = ",seconds);


