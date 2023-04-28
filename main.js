
var lifeLine = 3
var flag = false
var points = 0
document.getElementById("new").style.display = "none"
document.getElementById("startAgain").style.display = "none"

var audio = new Audio();
audio.src = "./s.mp3"

function move1() {
   
    document.getElementById("life").style.backgroundColor = "#EEEEEE"
    document.getElementById("h-1").style.display = "block"
    document.getElementById("h-2").style.display = "block"
    document.getElementById("h-3").style.display = "block"
    document.getElementById("scoreBoard").style.display = "none"
    document.getElementById("score").innerHTML = `SCORE : 0`
     lifeLine = 3
     points = 0
    document.getElementById("new").style.display = "none"
    // console.log("dsf")
    move()
}


function move() {
    // document.getElementById("new").style.display = "none"
    function getRandomInt(max) {
        return Math.floor(Math.random() * max);
    }
    var time = 1
    var SmallBox = document.getElementById("small")
    SmallBox.setAttribute("src", `images/${getRandomInt(8)}.jpeg`)
    var position = 0
    var animation = setInterval(animate, time)
    var pl = getRandomInt(420)


    function animate() {

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
        
        $("#small").hide("explode", { pieces: 25 }, 1000);

    })
});


