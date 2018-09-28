/*
  This is JavaScript Date() Objects Function/Methods from W3Schools website.
  website: https://wwww.w3schools.com/js/js_dates.asp
  I did this to give anyone the ability to practice the Date()
  Author: Jason Sikes
  Date: 09/27/2018
  The computed date will be relative to your time zone.
  Depending on your time zone, the result will vary.
  When a Date object is created, a number of methods allow you to operate on it.
  Date methods allow you to get and set the year, month, day, hour, minute, second, and millisecond of date objects, using either local time or UTC (universal, or GMT) time.
  JavaScript will (by default) output dates in full text string format.
  The html I built is very basic, just good enough to display the functions and methods. (index.html)
*/

/*
  Set Constant and called addEventListener on the button
*/
const btn = document.querySelector("#btn");
btn.addEventListener("click", myFunction);

/* new Date()
  By default, JavaScript will use the browser's time zone and display a date as a full text string:
  Date objects are created with the new Date() constructor.
*/

// function myFunction(){
//   // There are 4 ways to create a new date object:
//   let d = new Date(); // new Date() creates a new date object with the current date and time:
//   let e = new Date(2018, 8, 27, 13, 21, 21, 231); /* new Date(year, month, ...) creates a new date object with a specified date and time. 7 numbers specify year, month, day, hour, minute, second, and millisecond (in that order): JavaScript counts months from 0 to 11. January is 0. December is 11. */
//   let f = new Date(1538074058363);
//   let g = new Date("September 27, 2018 13:21:51");
//   document.getElementById("demo").innerHTML = `The date is ${d}`;
//   document.getElementById("demo2").innerHTML = `This date displays the full list of arguments that can be called in the Date() ${e}`;
//   document.getElementById("demo3").innerHTML = `This date displays milliseconds ${f}`;
//   document.getElementById("demo4").innerHTML = `This date displays date string ${g}`;
// };

/* 
  Example of new Date(year, month, day, hour, minute, second) 
*/

// function myFunction(){
//   // 6 numbers specify year, month, day, hour, minute, second:
//   let d = new Date(2018, 8, 27, 13, 46, 41);
//   document.getElementById("demo").innerHTML = `This is an example of the new Date(year, month, day, hour, minute, second) ${d}`;
// };

/* 
  Example of new Date(year, month, day, hour, minute) 
*/

// function myFunction(){
//   // 5 numbers specify year, month, day, hour, and minute:
//   let d = new Date(2018, 8, 27, 13, 49,);
//   document.getElementById("demo").innerHTML = `This is an example of new Date(year, month, day, hour, minute) ${d}`;
// };

/* 
  Example of new Date(year, month, day, hour) 
*/

// function myFunction(){
//   // 4 numbers specify year, month, day, and hour:
//   let d = new Date(2018, 8, 27, 53);
//   document.getElementById("demo").innerHTML = `This is an example of new Date(year, month, day, hour) ${d}`;
// };

/* 
  Example of new Date(year, month, day) 
*/

// function myFunction() {
//   // 3 numbers specify year, month, and day:
//   let d = new Date(2018, 8, 27);
//   document.getElementById("demo").innerHTML = `This is an example of new Date(year, month, day) ${d}`;
// };

/* 
  Example of new Date(year, month) 
*/

// function myFunction(){
//   // 2 numbers specify year and month:
//   let d = new Date(2018, 8);
//   document.getElementById("demo").innerHTML = `This is an example of new Date(year, month) ${d}`;
// };

/* ! You cannot omit month. If you supply only one parameter it will be treated as milliseconds. !
  new Date(2018); will be treated as milliseconds ! 
*/

/* Previous Century
  One and two digit years will be interpreted as 19xx:
  Example new Date(year, month, day) 
*/

// function myFunction(){
//   let d = new Date(99, 0, 1);
//   document.getElementById("demo").innerHTML = `This is an example of previous century new Date(year, month, day) ${d}`;
// };
/* 
  Another example with only one digit year
*/
// function myFunction(){
//   let d = new Date(8, 0, 1);
//   document.getElementById("demo").innerHTML = `This is an example of one digit year for new Date(year, month, day) ${d}`;
// };

/* 
  Example new Date(datestring) 
*/

// function myFunction(){
//   // new Date(dateString) creates a new date object from a date string:
//   let d = new Date("September 27, 2018 14:07");
//   document.getElementById("demo").innerHTML = `This is an example of new Date(month, day, year, hour, minute "all written as a string") ${d}`;
// };

/* JavaScript stores dates as number of milliseconds since January 01, 1970, 00:00:00 UTC (Universal Time Coordinated).
  Zero time is January 01, 1970 00:00:00 UTC.
  One day (24 hours) is 86 400 000 milliseconds.
  Example new Date(milliseconds)
*/

// function myFunction(){
//   // new Date(milliseconds) creates a new date object as zero time plus milliseconds:
//   // The computed date will be relative to your time zone.
//   // Depending on your time zone, the result will vary. It may show Dec. 31, 1969
//   let d = new Date(0);
//   document.getElementById("demo").innerHTML = `This is an example of new Date(milliseconds) ${d}`;
// };

/* 
  Example new Date() .toUTCString() 
*/

// function myFunction() {
//   // The toUTCString() method converts a date to a UTC string (a date display standard).
//   let d = new Date();
//   document.getElementById("demo").innerHTML = `This is an example of using .toUTCString() ${d.toUTCString()}`;
// };

/* 
  Example new Date() .toDateString() 
*/

// function myFunction(){
//   // The toDateString() method converts a date to a more readable format:
//   let d = new Date();
//   document.getElementById("demo").innerHTML = `This is an example of .toDateString() ${d.toDateString()}`;
// };

/* JavaScript Date Input
  There are generally 3 types of JavaScript date input formats:

  Type:         Example:
  ISO Date      "2015-03-25" (The International Standard)
  Short Date    "03/25/2015"
  Long Date     "Mar 25 2015" or "25 Mar 2015"

  The ISO format follows a strict standard in JavaScript.
  The other formats are not so well defined and might be browser specific.
  Independent of input format, JavaScript will (by default) output dates in full text string format:
  ISO 8601 is the international standard for the representation of dates and times.
  Example of ISO 8601 syntax(YYY-MM-DD)
*/

// function myFunction() {
//   // The computed date will be relative to your time zone.
//   // Depending on your time zone, the result will vary.
//   let d = new Date("2018-09-27"); // The ISO 8601 syntax (YYYY-MM-DD) is also the preferred JavaScript date format:
//   let e = new Date("2018-09"); // ISO dates can be written without specifying the day (YYYY-MM):
//   let f = new Date("2018"); // ISO dates can be written without month and day (YYYY):
//   document.getElementById("demo").innerHTML = `This is an example of the ISO 8601 syntax(YYYY-MM-DD) ${d}`; // Time zones will vary the result above between Wed Sep 26 2018 or Thu Sep 27 2018.
//   document.getElementById("demo2").innerHTML = `This is an example of the ISO 8601 syntax(YYYY-MM) ${e}`; // Time zones will vary the result above between Fri Aug 31 2018 or Sat Sep 01 2018.
//   document.getElementById("demo3").innerHTML = `This is an example of the ISO 8601 syntax(YYYY) ${f}`; // Time zones will vary the result above between December 31 2017 or January 01 2018.
// };

/* ISO Dates (Date-Time)
  Time Zones
  When setting a date, without specifying the time zone, JavaScript will use the browser's time zone.
  When getting a date, without specifying the time zone, the result is converted to the browser's time zone.
  In other words: If a date/time is created in GMT (Greenwich Mean Time), the date/time will be converted to CDT (Central US Daylight Time) if a user browses from central US.
  UTC (Universal Time Coordinated) is the same as GMT (Greenwich Mean Time).
  Example of ISO Dates(Date-Time)
*/

// function myFunction() {
//   // Omitting T or Z in a date-time string can give different result in different browser.
//   let d = new Date("2018-09-27T12:00:00-05:00"); // Date and time is separated with a capital T.
//   let e = new Date("2018-09-27Z12:00:00"); // UTC time is defined with a capital letter Z. If you want to modify the time relative to UTC, remove the Z and add +HH:MM or -HH:MM instead:
//   document.getElementById("demo").innerHTML = `This is an example of ISO Dates("2018-09-27T12:00:00-05:00") with a capital T and the +HH:MM or -HH:MM ${d}`;
//   document.getElementById("demo2").innerHTML = `This is an example of ISO Date("2018-09-27Z12:00:00") with a capital Z minus +HH:MM or -HH:MM ${e}`;
// };

/* 
  Example of JavaScript Short Dates 
*/

// function myFunction() {
//   // Short dates are written with an "MM/DD/YYYY" syntax like this:
//   // In some browsers, months or days with no leading zeroes may produce an error:
//   let d = new Date("09/27/2018");
//   let e = new Date("2018/09/27"); // The behavior of "YYYY/MM/DD" is undefined. Some browsers will try to guess the format. Some will return NaN. But not in Chrome.
//   let f = new Date("27-09-2018"); // The behavior of  "DD-MM-YYYY" is also undefined. Some browsers will try to guess the format. Some will return NaN. Chrome displays "Invalid Date"
//   document.getElementById("demo").innerHTML = `This is an example of short new Date(MM/DD/YYYY) ${d}`;
//   document.getElementById("demo2").innerHTML = `This is an example of short new Date(YYYY/MM/DD) ${e}`;
//   document.getElementById("demo3").innerHTML = `This is an example of short new Date(DD/MM/YYYY) ${f}`;
// };

/* 
  Example JavaScript Long Dates 
*/

// Commas are ignored. Names are case insensitive:
// function myFunction() {
//   let d = new Date("Sep 27 2018"); // Long dates are most often written with a "MMM DD YYYY" syntax like this:
//   let e = new Date("27 Sep 2018"); // Month and day can be in any order:
//   let f = new Date("September 27 2018"); // And, month can be written in full (September), or abbreviated (Sep): But in Chrome it will abbreviate it to (Sep).
//   document.getElementById("demo").innerHTML = `This is an example of new Date(MMM DD YYYY) ${d}`;
//   document.getElementById("demo2").innerHTML = `This is an example of new Date(DD MMM YYYY) ${e}`;
//   document.getElementById("demo3").innerHTML = `This is an example of new Date(fullNameMonth DD YYYY) ${f}`;
// };

/*
  Date Input - Parsing Dates
  If you have a valid date string, you can use the Date.parse() method to convert it to milliseconds.
  Example Date.parse()
*/

// function myFunction() {
//   // Date.parse() returns the number of milliseconds between the date and January 1, 1970:
//   let msec = Date.parse("Sep 27, 2018");
//   let msec2 = Date.parse("Sep 27, 2018");
//   var d = new Date(msec2); // You can then use the number of milliseconds to convert it to a date object:
//   document.getElementById("demo").innerHTML = `This is an example of Date.parse("Sep 27, 2018") ${msec} which is how many milliseconds since January 01, 1970`;
//   document.getElementById("demo2").innerHTML = `This is an example of Date.parse("1538024400000") converting it to a date object ${d}`;
// };

/*
  JavaScript Get Date Methods
  These methods can be used for getting information from a date object:
  Method:             Descriptions:
  getFullYear()       Get the year as a four digit number(YYYY)
  getMonth()          Get the month as a number(0-11) January = 0 - December = 11
  getDate()           Get the day as a number(1-31)
  getHours()          Get the hour(0-23) 12 am = 0 - 11 pm = 23
  getMinutes()        Get the minute(0-59) 
  getSeconds()        Get the second(0-59)
  getMilliseconds()   Get the millisecond(0-999)
  getTime()           Get the time (milliseconds since January 01, 1970)
  getDay()            Get the weekday as a number (0-6) Sunday = 0 - Saturday = 6
  Date.now()          Get the time. ECMAScript 5.
*/
/*
  Example getTime() Method
*/

// function myFunction() {
//   // The getTime() method returns the number of milliseconds since January 1, 1970:
//   let d = new Date();
//   document.getElementById("demo").innerHTML = `This is the example of getTime() ${d.getTime()} which is the number of milliseconds since January 01, 1970`;
// };

/*
  Example getFullYear() Method
*/

// function myFunction() {
//   // The getFullYear() method returns the year of a date as a four digit number:
//   let d = new Date();
//   document.getElementById("demo").innerHTML = `This is an example of getFullYear() ${d.getFullYear()} which returns the year of a date as four digit number.`;
// };

/*
  Example getMonth() Method
*/

// function myFunction(){
//   // The getMonth() method returns the month of a date as a number (0-11):
//   // In JavaScript, the first month (January) is month number 0, so December returns month number 11.
//   let d = new Date();
//   let month = [
//     "Jan", "Feb", "Mar",
//     "Apr", "May", "Jun",
//     "Jul", "Aug", "Sep",
//     "Oct", "Nov", "Dec"
//   ]; // You can use an array of names, and getMonth() to return the month as a name:
//   document.getElementById("demo").innerHTML = `This is an example of getMonth() "${month[d.getMonth()]}" which returns the month of a date as a number (0-11), which I ran through an array named month to call on the name of the month.`;
// };

/*
  Example getDate() Method
*/

// function myFunction(){
//   // The getDate() method returns the day of a date as a number (1-31):
//   // For practice I ran it through a if else loop. I'm still learning so it was probable not the cleanest loop to use.
//   let d = new Date();
//   if(d.getDate() > 3) {
//     document.getElementById("demo").innerHTML = `This is an example of getDate() ${d.getDate()}<sup>th</sup> which returns the day of a date as a number (1-31)`;
//   } else if(d.getDate() == 1){
//     document.getElementById("demo").innerHTML = `This is an example of getDate() ${d.getDate()}<sup>st</sup> which returns the day of a date as a number (1-31)`;
//   } else if(d.getDate() == 2){
//     document.getElementById("demo").innerHTML = `This is an example of getDate() ${d.getDate()}<sup>nd</sup> which returns the day of a date as a number (1-31)`;
//   }else if(d.getDate() == 3){
//     document.getElementById("demo").innerHTML = `This is an example of getDate() ${d.getDate()}<sup>rd</sup> which returns the day of a date as a number (1-31)`;
//   };
// };

/*
  Example getHours() Method
*/

// function myFunction(){
//   // The getHours() method returns the hours of a date as a number (0-23):
//   // For practice I ran it through an array named hours to display a string to indicate am or pm instead of 24 hours time.
//   let d = new Date();
//   let hours = [
//     "12 am", "1 am", "2 am", "3 am", "4 am", "5 am", "6 am", "7 am", "8 am", "9 am", "10 am",
//     "11 am", "12 pm", "1 pm", "2 pm", "3 pm", "4 pm", "5 pm", "6 pm", "7 pm", "8 pm", "9 pm",
//     "10 pm", "11 pm"
//   ];
//   document.getElementById("demo").innerHTML = `This is an example of getHours() ${hours[d.getHours()]} is the time. getHours() returns the hour of a date as a number (0-23) and I ran it through an array named hours to come up with a string to call out the hour as am or pm instead of 24 hour time.`;
// };

/*
  Example getMinutes() Method
*/

// function myFunction(){
//   // The getMinutes() method returns the minutes of a date as a number (0-59):
//   let d = new Date();
//   document.getElementById("demo").innerHTML = `This is an example of getMinutes() ${d.getMinutes()} is how many minutes. getMinutes() returns the minutes of a date as a number (0-59).`;
// };

/*
  Example getSeconds() Method
*/

// function myFunction(){
//   // The getSeconds() method returns the seconds of a date as a number (0-59):
//   let d = new Date();
//   document.getElementById("demo").innerHTML = `This is an example of getSeconds() ${d.getSeconds()} is how many seconds. getSeconds() returns the seconds of a date as a number (0-59).`;
// };

/*
  Example getMilliseconds() Method
*/

// function myFunction(){
//   // The getMilliseconds() method returns the milliseconds of a date as a number (0-999):
//   let d = new Date();
//   document.getElementById("demo").innerHTML = `This is an example of getMilliseconds() ${d.getMilliseconds()} is how many milliseconds. getMilliseconds() returns the milliseconds of a date as a number (0-999). Each time you click the Run Function button it will change to show you how fast a millisecond is.`;
// };

/*
  Example getDay() Method
*/

// function myFunction(){
//   // The getDay() method returns the weekday of a date as a number (0-6):
//   // For practice I made an array with the days of the week to display the name of the day when calling getDay()
//   let d = new Date();
//   let dayOfWeek = [
//     "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"
//   ];
//   document.getElementById("demo").innerHTML = `This is an example of getDay() ${dayOfWeek[d.getDay()]} is the day of the week. getDay() returns the weekday of a date as a number (0-6). I ran it through an array to display the name of the day of the week.`;
// };

/*
  UTC Date Methods
  UTC date methods are used for working with UTC dates (Universal Time Zone dates):

  Method:               Description:
  getUTCDate()          Same as getDate(), but returns the UTC date
  getUTCDay()           Same as getDay(), but returns the UTC day
  getUTCFullYear()      Same as getFullYear(), but returns the UTC year
  getUTCHours()         Same as getHours(), but returns the UTC hour
  getUTCMilliseconds()  Same as getMilliseconds(), but returns the UTC milliseconds
  getUTCMinutes()       Same as getMinutes(), but returns the UTC minutes
  getUTCMonth()         Same as getMonth(), but retruns the UTC month
  getUTCSeconds()       Same as getSeconds(), but returns the UTC seconds
*/

/*
  JavaScript Set Date Methods
  Set Date methods let you set date values (years, months, days, hours, minutes, seconds, milliseconds) for a Date Object.

  Set Date Methods
  Set Date methods are used for setting a part of a date:
  Method:               Description:
  setDate()             Set the day as a number (1-31)
  setFullYear()         Set the year (optionally month and day)
  setHours()            Set the hour (0-23)
  setMilliseconds()     Set the milliseconds ( 0-999)
  setMinutes()          Set the minutes (0-59)
  setMonth()            Set the month (0-11)
  setSeconds()          Set the seconds (0-59)
  setTime()             Set the time (milliseconds since January 01, 1970)
*/

/*
  Example setFullYear() Method
*/

// function myFunction(){
//   // The setFullYear() method sets the year of a date object. In this example to 2020:
//   let d = new Date();
//   let e = new Date(); 
//   d.setFullYear(2020);
//   e.setFullYear(2020, 08, 27); // The setFullYear() method can optionally set month and day:
//   document.getElementById("demo").innerHTML = `This is an example of setFullYear() ${d} sets the year of a date object.`;
//   document.getElementById("demo2").innerHTML = `This is an example of setFullYear() ${e} sets the year, month, day of a date object.`;
// };

/*
  Example setMonth() Method
*/

// function myFunction(){
//   // The setMonth() method sets the month of a date object (0-11):
//   let d = new Date();
//   d.setMonth(11);
//   document.getElementById("demo").innerHTML = `This is an example of setMonth() ${d} is the month that was set.`;
// };

/*
  Example setDate() Method
*/

// function myFunction(){
//   // The setDate() method sets the day of a date object (1-31):
//   let d = new Date();
//   let e = new Date(); // The setDate() method can also be used to add days to a date: If adding days, shifts the month or year, the changes are handled automatically by the Date object.
//   d.setDate(28);
//   e.setDate(e.getDate() + 50);
//   document.getElementById("demo").innerHTML = `This is an example of setDate() ${d} is the date of this month with the day called in the argument.`;
//   document.getElementById("demo2").innerHTML = `This is an example of the setDate() ${e} that was set to todays date + 50 more days.`;
// };

/*
  Example setHours() Method
*/

// function myFunction(){
//   // The setHours() method sets the hours of a date object (0-23):
//   let d = new Date();
//   d.setHours(22);
//   document.getElementById("demo").innerHTML = `This is an example of setHours() ${d} that will display the date along with the hour set in the argument in setHours().`;
// };

/*
  Example setMinutes() Method
*/

// function myFunction(){
//   // The setMinutes() method sets the minutes of a date object (0-59):
//   let d = new Date();
//   d.setMinutes(30);
//   document.getElementById("demo").innerHTML = `This is an example of setMinutes() ${d} this displays the date with the setMinutes() set in the argument displayed.`;
// };

/*
  Example setSeconds() Method
*/

// function myFunction(){
//   // The setSeconds() method sets the seconds of a date object (0-59):
//   let d = new Date();
//   d.setSeconds(30);
//   document.getElementById("demo").innerHTML = `This is an example of setSeconds() ${d} this displays the date with the setSeconds() set in the argument displayed.`;
// };

/*
  Example on how to Compare Dates
  The following example compares today's date with Sep 28, 2100
*/

// function myFunction(){
//   // JavaScript counts months from 0 to 11. January is 0. December is 11.
//   let today, someday, text;
//   today = new Date();
//   someday = new Date();
//   someday.setFullYear(2100, 08, 28);
//   if(someday > today){
//     text = "Today is before September 28, 2100.";
//   } else {
//     text = "Today is after September 28, 2100.";
//   }
//   document.getElementById("demo").innerHTML = text;
// };

/*
  This is the Examples of Date() Object Functions/Methods that is on the W3Schools website for the JavaScript Tutorial
  There website for JavaScript Tutorial is https://www.w3schools.com/js/default.asp
  Thanks for checking this out.
*/



