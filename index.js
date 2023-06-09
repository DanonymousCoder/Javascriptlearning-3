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
confirm(string4)
