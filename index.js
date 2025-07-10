let code1 = 20 + 5 * 3;        // 35
let code2 = (100 - 20) / 2;    // 40
let code3 = 100 % 61;          // 39


//Message String
let message = "The vault has been secured. The combination is:";

//Combination String?
let fullCode = code1 + " " + code2 + " " + code3;

//Message + Combination
let finalmessage = message + " " + fullCode;

//Print of the final message
console.log(finalmessage);