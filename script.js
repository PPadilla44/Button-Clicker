var help = document.getElementById("help");
var n = 0;
function spin() {
    if(n ==0 ){
        n = 180;
        help.textContent = "Help!"

    } else {
        n= 0;
    help.textContent = "Thank you!"

    }
    help.style.transform = "rotate("+n+"deg)"
    help.style.boxShadow = "4px 4px 10px black";
}
var clicks = 1;
function countClicks() {
    console.log(clicks);
    clicks++;
}