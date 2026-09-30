
       // 1. Lift capacity check
let currentLiftPassengers = 7;
let maxLiftCapacity = 8;
console.log("Is Safe to Add One More Passenger (<=):", currentLiftPassengers <= maxLiftCapacity);

// 2. File size upload check
let uploadFileSizeMB = 5;
let maxAllowedFileSizeMB = 5;
console.log("Is Upload Allowed (<=):", uploadFileSizeMB <= maxAllowedFileSizeMB);

// 3. Junior category eligibility
let participantAgeYears = 12;
let maxJuniorAgeYears = 12;
console.log("Qualifies as Junior (<=):", participantAgeYears <= maxJuniorAgeYears);

// 4. Data limit check
let dataUsedGB = 9.5;
let dataLimitGB = 10;
console.log("Within Data Limit (<=):", dataUsedGB <= dataLimitGB);

// 5. Classroom capacity check
let currentClassStrength = 40;
let maxClassCapacity = 40;
console.log("Is Class at Valid Capacity (<=):", currentClassStrength <= maxClassCapacity);
    