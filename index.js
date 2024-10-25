// task 1 //
let isPublicHoliday = true;
let isWeekDay = false;

let isPublicHolidayandisweekday = isPublicHoliday && isWeekDay;
let isPublicHolidayandORisweekday = isPublicHoliday || isWeekDay;

console.log(
    `it is both public holiday and weekday: ${isPublicHolidayandisweekday}`
)
console.log(
    `it is either public holiday and weekday: ${isPublicHolidayandORisweekday}`
)

// task 2 //
let today_day =30;
let check_day =today_day >=40;
console.log(`${check_day}`)


//task 3 //
let x = 5;
let y = 5;

console.log (x + y);
console.log (x - y);
console.log (x * y);
console.log (x / y);

//task 4 //
let count =0;

console.log ( (count+=10) ); //count = 0+10
console.log ((count*=20)); //count =10*20

//task 5 //
let job;

console.log (job);
job = null;
console.log (job);

//task 6//
let best_meal = "yam";

console.log ("reuben loves ${yam}");

//task 7//
let nickname = "reuben";
let num = 10;

console.log (nickname , num);

// task 8 //
let greet = function ( name='reuben', greet='evening') {
    console.log (`good ${name} ${greet}`)
}

// task 9 //
/* this function adds three varaible num1 num2 num3 giving them value of 1,2,3 gives it an output of 6 */
function add_three_num(num1, num2, num3){
    return num1 + num2 + num3;
}
console.log("the answer is:", add_three_num(1,2,3)); // calling the function//


// task 10 //
function add_three_num(num1, num2, num3){
    return num1 + num2 + num3;
}
console.log("the answer is:", add_three_num(1,2,3));



