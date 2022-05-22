img = document.getElementById("img1");
img2 = document.getElementById("img2")
img3 = document.getElementById("img3")
img4 = document.getElementById("img4")
img5 = document.getElementById("img5")
img6 = document.getElementById("img6")
img7 = document.getElementById("img7")
img8 = document.getElementById("img8")
par = document.getElementById("myPar")
btn = document.getElementById("btn");

function enlargeImg() {
    img.style.transform = "scale(1.5)";
    img.style.transition = "transform 0.25s ease";
}
function resetImg() {
    img.style.transform = "scale(1)"
    img.style.transition = "transform 0.25s ease"
}
function large(){
    img2.style.transform = "scale(1.5)";
    img2.style.transition = "transform 0.25s ease"
}
function reset() {
    img2.style.transform = "scale(1)"
    img2.style.transition = "transform 0.25s ease"
}
function largeImage() {
    img3.style.transform = "scale(1.5)"
    img3.style.transition = "transform 0.25s ease"
}
function resetImage() {
    img3.style.transform = "scale(1)"
    img3.style.transition = "transform 0.25s ease"
}
function large4() {
    img4.style.transform = "scale(1.5)"
    img4.style.transition = "transform 0.25s ease"
}
function reset4() {
    img4.style.transform = "scale(1)"
    img4.style.transition = "transform 0.25s ease"
}
function large5() {
    img5.style.transform = "scale(1.5)"
    img5.style.transition = "transform 0.25s ease"
}
function reset5() {
    img5.style.transform = "scale(1)"
    img5.style.transition = "transform 0.25s ease"
}
function large6() {
    img6.style.transform = "scale(1.5)"
    img6.style.transition = "transform 0.25s ease"
}
function reset6() {
    img6.style.transform = "scale(1)"
    img6.style.transition = "transform 0.25s ease"
}
function large7() {
    img7.style.transform = "scale(1.5)"
    img7.style.transition = "transform 0.25s ease"
}
function reset7() {
    img7.style.transform = "scale(1)"
    img7.style.transition = "transform 0.25s ease"
}
function large8() {
    img8.style.transform = "scale(1.5)"
    img8.style.transition = "transform 0.25s ease"
}
function reset8() {
    img8.style.transform = "scale(1)"
    img8.style.transition = "transform 0.25s ease"
}
$(function(){
    $("#myPar").css({display:"none"})
})
$(function(){
    $("#btn").on("click", function() {
        $("#myPar").toggle(1000)
    })
})
function openNav() {
    document.getElementById("myNav").style.width = "100%";
  }
  
  function closeNav() {
    document.getElementById("myNav").style.width = "0%";
  }


