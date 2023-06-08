let text = "Please visit Microsoft!";
function myFunction(){
    let text = document.getElementById("demo") .innerHTML;
    document.getElementById("demo") .innerHTML =
     text.replace(/MICROSOFT/i, "W3Schools");
}