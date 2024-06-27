var elem=document.querySelectorAll(".elem");

/*
var elemimg=document.querySelector("#elem1 img");

elem1.addEventListener("mousemove",function(dets){
    elemimg.style.opacity = "1"; 
    elemimg.style.left = dets.x + "px";
    elemimg.style.top = dets.y + "px";
    
})*/

elem.forEach(function(val) {
    val.addEventListener("mousemove",function(dets){
        val.childNodes[3].style.left = dets.x + "px";
        
        
    })
    val.addEventListener("mouseenter",function() {
        val.childNodes[3].style.opacity = "1";
    })
    val.addEventListener("mouseleave",function() {
        val.childNodes[3].style.opacity = "0";
    })
})