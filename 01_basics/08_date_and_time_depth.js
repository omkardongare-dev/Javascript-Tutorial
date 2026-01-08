// ****************** date ************************* //

let myDate = new Date()

// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());
// console.log(typeof myDate);

let myCreatedDate1 = new Date(2023, 0, 23);
// console.log(myCreatedDate1.toDateString());  // e.g., "Mon Jan 23 2023"

let myCreatedDate2 = new Date(2023, 0, 23, 5, 3);
// console.log(myCreatedDate2.toLocaleString());  // e.g., "1/23/2023, 5:03:00 AM"

let myCreatedDate3 = new Date("2023-01-23");
// console.log(myCreatedDate3.toLocaleString());  // e.g., "1/23/2023, 12:00:00 AM"

let myCreatedDate4 = new Date("01-14-2025");
// console.log(myCreatedDate4.toLocaleString());  // e.g., "1/14/2025, 12:00:00 AM"



// ************************** Time ********************************* //

let myTimeStamp = Date.now()

// console.log(myTimeStamp);
// console.log(myCreatedDate4.getTime());
// console.log(Math.floor(Date.now()/1000));


let newDate = new Date()
console.log(newDate);
console.log(newDate.getDay());
console.log(newDate.getMonth() + 1);

// `&{newDate.getDay()} and the time `

newDate.toLocaleDateString('Default',{
    weekday: "long"
})