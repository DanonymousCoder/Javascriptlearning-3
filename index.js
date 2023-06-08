function myFunction() {
  let text = document.getElementById("demo").innerHTML; 
  document.getElementById("demo").innerHTML =
  text.replace("Microsoft","W3Schools");
}
let texts = "I love cats. Cats are very easy to love. Cats are very popular."
texts = texts.replaceAll("Cats","Dogs");
texts = texts.replaceAll("cats","dogs");
document.write(texts)