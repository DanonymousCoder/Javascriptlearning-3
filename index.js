let texts = "I love cats. Cats are very easy to love. Cats are very popular.";
let textz = "I love cats. Cats are very easy to love. Cats are very popular.";
texts = texts.replaceAll("Cats","Dogs");
textz = textz.replaceAll(/Cats/g,"dogs");
alert(texts);
alert(textz);

function myFunction() {
  let text = document.getElementById("demo").innerHTML;
  document.getElementById("demo").innerHTML =
  text.toUpperCase();
}

let text1 = "Hello";
let text2 = "World!";
let text3 = text1.concat(" ",text2);
alert(text3);