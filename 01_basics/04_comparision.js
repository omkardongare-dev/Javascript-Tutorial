// consol.log(2 > 1);
// consol.log(2 >= 1);
// consol.log(2 < 1);
// consol.log(2 <= 1);
// consol.log(2 == 1);
// consol.log(2 != 1);

// console.log("2" > 1);
// console.log("2" > 1);

console.log(null > 0);
console.log(null == 0);      // we have avoid this type of conversions 
console.log(null >= 0);

console.log(undefined == 0);
console.log(undefined < 0);    // avoid because readiability is important in code
console.log(undefined > 0);

// the reason is that an equal check == and 
// comparisions > < >= <= work differently.

// comparisions convert null to a number,
// treating it as 0.
// that's why (3)null >= 0 => true
// and (1)null > 0 => false


// === called strict check

console.log("2" === 2);
