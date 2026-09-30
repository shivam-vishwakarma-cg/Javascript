
        let isStudent = true;
let isSenior = false;
isBanned = true;
let getDiscount = (isStudent || isSenior) && !isBanned;
console.log("Get Discount:", getDiscount);
	