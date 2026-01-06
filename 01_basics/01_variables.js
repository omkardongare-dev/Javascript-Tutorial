const accountId = 144774
let accountEmail = "omkar951@google.conm"
var accountPassword = "12234"
accountCity = "pune"

let accountState;
// accountId = 2   // Not allowed

accountEmail = "hstsr@google.com"
accountPassword = "336636"
accountCity = "mumbai"

/*
Prefere not to use var
because of issue in block scope and functional scope
*/
console.log(accountId)

console.table([accountId, accountEmail, accountPassword, accountCity,accountState])