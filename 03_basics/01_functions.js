// ************************** Functions *************************** //

function sayMyName() {
    console.log("H");
    console.log("M");
    console.log("D");
    console.log("R");
    console.log("A");
    console.log("W");
}

// sayMyName()

// function addTwoNumbers(number1, number2){
//     console.log(number1 + number2);
// }

// addTwoNumbers(4, 5)
// addTwoNumbers(4, "5")
// addTwoNumbers("a", 5)
// addTwoNumbers("a", null)

// const result = addTwoNumbers(8, 5)
// console.log("Result: ", result);

function addTwoNumbers(number1, number2) {

    // let result = number1 + number2
    // return result

    return number1 + number2
}

const result = addTwoNumbers(8, 5)
// console.log("Result: ", result);


function loginUserMessage(username){
    if(username === undefined){
        console.log("please enter a username");
        return
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("omkar"));
// console.log(loginUserMessage());


function calculateCardPrice(va1, val2, ...num1){             // ... called rest operator
    return num1
}

// console.log(calculateCardPrice(200, 400, 700, 300));

const user = {
    userid: "1",
    username: "omkar",
    prices: 999
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

// handleObject(user)

handleObject({
    username: "om",
    price: 599
})

const myNewArray = [200, 300, 500, 700]

function returnSecondValue(getArray){
    return getArray
}

console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([100, 200, 300, 400, 500, 600]));