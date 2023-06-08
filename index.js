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