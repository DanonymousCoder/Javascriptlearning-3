let texts = "I love cats. Cats are very easy to love. Cats are very popular.";
let textz = "I love cats. Cats are very easy to love. Cats are very popular.";
texts = texts.replaceAll("Cats","Dogs");
textz = textz.replaceAll(/Cats/g,"dogs");
alert(texts);
alert(textz);

function myFunction() {
  let text2 = document.getElementById("demo").innerHTML;
  document.getElementById("demo").innerHTML =
  text2.toUpperCase();
}

let text1 = "Hello";
let text2 = "World!";
let text3 = text1.concat(" ",text2);
alert(text3);

text = "Hello" + " " + "World!";
confirm(text);

let text4 = "     Hello World!     ";
let text5 = text4.trimStart();
console.log(text5)

let text6 = "     Hello World!     ";
let text7 = text1.trimEnd();
console.log (text7)

let t = "5";
let padded = t.padStart(4,"0");
console.log(padded);
 let padde = t.padEnd(4, "x");
 console.log(padde);

 let numb = 5;
 let text0 = numb.toString();
 let padding = text0.padEnd(4,"0")
 console.log(padding)

 let text01 = "HELLO WORLD";
let char = text01.charAt(2);
confirm(char);

let text001 = "HELLO WORLD";
let char1 = text001.charCodeAt(0);
confirm(char1);

let text02 = "HELLO WORLD";
let char2 = text02[0];
console.log(char2);

const string4 = new String("A String object");
confirm(string4);
"cat".charAt(1); // gives value "a"

const a = "a";
const b = "b";
if (a < b) {
  // true
  console.log(`${a} is less than ${b}`);
} else if (a > b) {
  console.log(`${a} is greater than ${b}`);
} else {
  console.log(`${a} and ${b} are equal.`);
}
function areEqualCaseInsensitive(str1, str2) {
  return str1.toUpperCase() === str2.toUpperCase();
}
const strPrim = "foo"; // A literal is a string primitive
const strPrim2 = String(1); // Coerced into the string primitive "1"
const strPrim3 = String(true); // Coerced into the string primitive "true"
const strObj = new String(strPrim); // String with new returns a string wrapper object.

console.log(typeof strPrim); // "string"
console.log(typeof strPrim2); // "string"
console.log(typeof strPrim3); // "string"
console.log(typeof strObj); // "object"

const s1 = "2 + 2"; // creates a string primitive
const s2 = new String("2 + 2"); // creates a String object
console.log(eval(s1)); // returns the number 4
console.log(eval(s2)); // returns the string "2 + 2"
console.log(eval(s2.valueOf())); // returns the number 4
console.log(eval(s2.valueOf())); // returns the number 4

const nullVar = null;
nullVar.toString(); // TypeError: nullVar is null
String(nullVar); // "null"
console.log("nullVar")

const undefined = undefined;
undefinedVar.toString(undefined); // TypeError: undefinedVar is undefined // "undefined"
console.log(undefined);

const areEqual = (str1, str2, locale = "en-US") =>
  str1.localeCompare(str2, locale, { sensitivity: "accent" }) === 0;

areEqual("ß", "ss", "de"); // false
areEqual("ı", "I", "tr"); // true

