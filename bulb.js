let  bulb = document.querySelector("#bulb")
let btn = document.querySelector("button")


let turn = "off";


btn.addEventListener("click", function() {
    if(turn == "off"){
        bulb.style.backgroundColor = "rgb(255, 255, 0)"
        bulb.style.boxShadow = "0px 0px 230px rgb(255, 255, 0)"
        console.log("clicked")
        turn ="on"
    }

    else {
        bulb.style.backgroundColor = "black"
        bulb.style.boxShadow = "0px 0px 0px black"
        console.log("clicked")
        turn = "off"

    }





})
    
