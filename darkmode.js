window.addEventListener('load', function () {
  

var x = document.getElementsByTagName("BODY")
// console.log(x[0])
document.body.style.backgroundColor = "black";
var divs = document.getElementsByTagName("DIV")
// console.log(divs)

var bottomA = document.querySelectorAll(".bottomlinks a")
bottomA[0].setAttribute("style","color:white;")

for(var i=0; i<divs.length;i++){
    // console.log(divs[i])
    divs[i].setAttribute("style", "color:white;")
}

// var paths = newSvg.getElementsByTagName('path');
// [].forEach.call(paths, function(path) {
//     path.setAttribute("fill", "#FF0000");
// });

var svgImages = document.querySelectorAll(".contact a img")
for(var i =0;i<svgImages.length;i++){
svgImages[i].setAttribute("style","filter: invert(1);")}

var sutdLogo = document.querySelectorAll(".logo img.sutd")
// console.log(sutdLogo)
sutdLogo[0].src = "/src/logo/sutd_logo_white.png"

var navLinks = document.querySelectorAll("li a span")

for(var i =0;i<navLinks.length;i++){navLinks[i].setAttribute('style','color:white;')}

})
