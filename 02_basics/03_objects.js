// singleton 

// object literals


const mySym = Symbol("key1")

const JsUser = {
    name: "omkar",
    "full name": "omkar dongare",
    age: 21,
    [mySym]: "mykey1",
    location: "pune",
    email: "omkar@google.com",
    isLoggedIn: false,
    lastLogindays: ["monday", "thusday", "saturday"]
}

// console.log(JsUser.age)
// console.log(JsUser["email"])
// console.log(JsUser["full name"])
// console.log(JsUser["mySym"])


JsUser.email = "omkar@github.com"
// Object.freeze(JsUser)
JsUser.email = "omkar@microsoft.com"
// console.log(JsUser);


JsUser.greeting = function(){
    console.log("Hello JS user");
}


JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());