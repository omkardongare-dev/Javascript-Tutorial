const tinderUser = new Object()          // single ton object
// console.log(tinderUser);

const tinderUser1 = {}
// console.log(tinderUser1);

tinderUser.id = "123abc"
tinderUser.name = "omkar"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email: "omkar951@gmail.com",
    fullname: {
        userfullname:{
            firstname: "omkar",
            lastname: "dongare"
        }
    }
}

// console.log(regularUser);
// console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}

// const obj3 = {obj1, obj2}

// const obj3 = Object.assign({}, obj1, obj2, obj4)

const obj3 = {...obj1, ...obj2, ...obj4}
//console.log(obj3);


const users = [
    {
        id: 1,
        email: "omkar951@gmail,com"
    },
    {
        id: 2,
        email: "yash745@gmail,com"
    },
    {
        id: 3,
        email: "sakshi2425@gmail,com"
    },
    {
        id: 4,
        email: "priya838@gmail,com"
    }
]

users[1].email
// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('id'))



const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "omkar"
}

// course.courseInstructor

const {courseInstructor: instructor} = course
// console.log(courseInstructor);
console.log(instructor);

const navbar = ({company}) => {
    
}

navbar(company = "omkar")
// console.log(navbar);


// {
//     id: "1",
//     "name": "omkar",
//     "course": "js in hindi",
//     "price": "999"
// }

[
    {},
    {},
    {}
]

