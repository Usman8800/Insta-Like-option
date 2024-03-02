var container = document.querySelector("#container")
var love = document.querySelector("i")


container.addEventListener("dblclick", function () {
    love.style.transform = "scale(1)"
    love.style.opacity = 0.8
    
    setTimeout(function(){
        love.style.opacity = 0
        
    }, 600);
    setTimeout(function () {
        love.style.transform = "scale(0)"
    }, 800);
})


