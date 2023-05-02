
var lifeLine = 3
var flag = false
var points = 0
var running = true
document.getElementById("new").style.display = "none"
document.getElementById("startAgain").style.display = "none"
document.getElementById("stop").style.display = "none"


var audio = new Audio();
audio.src = "./s.mp3"

var SmallBox = document.getElementById("small")

function stop() {
    
    document.getElementById("startAgain").style.display = "block"
    document.getElementById("stop").style.display = "none"
    document.getElementById("start").style.display = "none"
    // lifeLine = 3
    console.log("enlu")
    flag = false
    // points = 0
    running = false
    document.getElementById("scoreBoard").style.display = "block"
    document.getElementById("scoreBoard").innerHTML = `SCORE : ${points}`
    document.getElementById("new").style.display = "block"
    
    document.getElementById("transperent").style.backgroundColor = "#00ADB5"
    // document.getElementById("h-1").style.display = "block"
    // document.getElementById("h-2").style.display = "block"
    // document.getElementById("h-3").style.display = "block"
    document.getElementById("score").innerHTML= `SCORE : ${points}`
    document.getElementById("life").style.backgroundColor = "#EEEEEE"
    SmallBox.style.display = "none"
    // document.getElementById("startAgain").style.display = "none"
}

function reset() {
    document.getElementById("small").style.display = "none"
    lifeLine = 3
    console.log("enlu")
    flag = false
    points = 0
    running = false
    document.getElementById("scoreBoard").style.display = "none"
    // document.getElementById("scoreBoard").innerHTML = `SCORE : ${points}`
    document.getElementById("new").style.display = "none"
    document.getElementById("start").style.display = "block"
    document.getElementById("transperent").style.backgroundColor = "#00ADB5"
    document.getElementById("h-1").style.display = "block"
    document.getElementById("h-2").style.display = "block"
    document.getElementById("h-3").style.display = "block"
    document.getElementById("score").innerHTML= "SCORE : 0"
    document.getElementById("life").style.backgroundColor = "#EEEEEE"
    document.getElementById("startAgain").style.display = "none"

}
function move() {
    document.getElementById("start").style.display = "none"
    document.getElementById("stop").style.display = "block"
    document.getElementById("startAgain").style.display = "none"
    document.getElementById("new").style.display = "none"
    document.getElementById("scoreBoard").style.display = "none"
    function getRandomInt(max) {
        return Math.floor(Math.random() * max);
    }
    var time = 1
    
    SmallBox.setAttribute("src", `images/${getRandomInt(8)}.jpeg`)
    var position = 0
    var animation = setInterval(animate, time)
    var pl = getRandomInt(420)
    running = true
    

    function animate() {
        if(running == false) {
            if(document.getElementById("small").style.display == "block" ){
                SmallBox.style.display = "none" 
                console.log("1684615")
            }
            SmallBox.style.display = "none" 
            clearInterval(animation)
            running = true
            console.log("fdonguhmgi")
            
            // stop()
            // move()
        }

        
        if (flag == true) {
            SmallBox.setAttribute("src", `images/${getRandomInt(8)}.jpeg`)
            SmallBox.style.left = getRandomInt(420) + "px";
            flag = false
        }
        if (SmallBox.style.display == "none") {
            position = 0
            SmallBox.style.display = "block"
        }

        if (position == 700) {
            SmallBox.setAttribute("src", `images/${getRandomInt(8)}.jpeg`)
            SmallBox.style.left = getRandomInt(420) + "px";
            position = 0
            lifeLine--
            if (lifeLine == 2) {
                document.getElementById("h-3").style.display = "none"
            }
            if (lifeLine == 1) {
                document.getElementById("h-2").style.display = "none"
            }
            if (lifeLine == 0) {
                document.getElementById("h-1").style.display = "none"
                document.getElementById("life").style.backgroundColor = "transparent"
                document.getElementById("transperent").style.backgroundColor = "#00ADB5"
                document.getElementById("stop").style.display = "none"
            }
        }
        else {
            position++;
            SmallBox.style.top = position + "px";
        }
        if (lifeLine == 0) {
            clearInterval(animation)
            SmallBox.style.display = "none"
            document.getElementById("new").style.display = "block"
            document.getElementById("scoreBoard").style.display = "block"
            document.getElementById("scoreBoard").innerHTML = `SCORE : ${points}`
            document.getElementById("startAgain").style.display = "block"
            document.getElementById("start").style.display = "none"
            // move()
        }
    }
}


function count() {

    // document.getElementById("small").style.display = "none"
    // $( "#small" ).toggle( "explode" );
    
    // clearInterval(animation)
}

console.log($)

$(document).ready(function () {
    
    $("#small").hover(function () {
        flag = true
        document.getElementById("score").innerHTML = `SCORE : ${points+=0.5}`;
        console.log("hellloo")
        console.log(points)
        $("#small").hide("explode", { pieces: 50 }, 1000);

    })
});


