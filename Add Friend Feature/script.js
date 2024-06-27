var istatus = document.querySelector("h5");
var btn = document.querySelector("button");
var flag = 0;
btn.addEventListener("click", function () {
    if (flag == 0) {
        istatus.innerHTML = "Friend";
        istatus.style.color = "Green";
        
        btn.innerHTML="Remove Friend";
        btn.style.backgroundColor="#dadada";
        btn.style.color="#111";
        
        flag = 1;
    }
    else{
        istatus.innerHTML = "Stranger";
        istatus.style.color = "Red";
        
        btn.innerHTML="Add Friend";
        btn.style.backgroundColor="cadetblue";
        btn.style.color="white";

        flag = 0;
    }
})