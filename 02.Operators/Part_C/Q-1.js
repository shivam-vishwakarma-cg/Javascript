
       // 1. Loose password match (type coercion allows string to match number)
let storedPassword = 1234;
let enteredPasswordString = "1234";
console.log("Password Matches (==):", storedPassword == enteredPasswordString);

// 2. Compare 0 and false (type coercion treats 0 as falsy)
let userAnsNumber = 0;
let defaultAnsBool = false;
console.log("User answer equals false (==):", userAnsNumber == defaultAnsBool);

// 3. Compare empty string and false
let userInputText = "";
let emptyFlagBool = false;
console.log("Empty text equals false (==):", userInputText == emptyFlagBool);

// 4. Compare null and undefined (both represent no value in loose equality)
let backendData = null;
let frontendData = undefined;
console.log("Null equals Undefined (==):", backendData == frontendData);

// 5. Device scores comparison
let deviceScoreNum = 500;
let deviceScoreStr = "500";
console.log("Scores Equal (==):", deviceScoreNum == deviceScoreStr);
    