
var lifeLine = 3
// document.getElementById("life").innerHTML = lifeLine
var flag = false
var points = 0
// document.getElementById("gameOverBox").style.display = "none"
document.getElementById("new").style.display = "none"

var audio = new Audio();
audio.src = "./s.mp3"

function move() {
    function getRandomInt(max) {
        return Math.floor(Math.random() * max);
    }

    var SmallBox = document.getElementById("small")
    SmallBox.setAttribute("src", `images/${getRandomInt(8)}.jpeg`)
    var position = 0
    var animation = setInterval(animate, 3)
    var pl = getRandomInt(420)


    function animate() {
        // document.getElementById("gameOverBox").style.display = `none !important`
        if (flag == true) {
            SmallBox.setAttribute("src", `images/${getRandomInt(8)}.jpeg`)
            SmallBox.style.left = getRandomInt(420) + "px";
            flag = false
        }
        if (SmallBox.style.display == "none") {
            position = 0
            SmallBox.style.display = "block"
        }

        if (position == 500) {
            SmallBox.setAttribute("src", `images/${getRandomInt(8)}.jpeg`)
            SmallBox.style.left = getRandomInt(420) + "px";
            position = 0
            lifeLine--
            if(lifeLine == 2) {
                document.getElementById("h-3").style.display = "none"
            }  
            if(lifeLine == 1) {
                document.getElementById("h-2").style.display = "none"
            } 
            if(lifeLine == 0) {
                document.getElementById("h-1").style.display = "none"
                document.getElementById("life").style.backgroundColor  = "transparent"
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
            // document.getElementById("InnerBox").style.display = "none"
            document.getElementById("new").style.display = "block"
            document.getElementById("scoreBoard").innerHTML = `SCORE : ${++points}`
            // document.getElementById("gameOverBox").style.display = `block !important`;
        }
        // document.getElementById("life").innerHTML = lifeLine
    }
}


// document.getElementById("small").position = none
function count() {
    document.getElementById("score").innerHTML = `SCORE : ${++points}`;
    document.getElementById("small").style.display = "none"
    // $( "#small" ).toggle( "explode" );
    flag = true
    // clearInterval(animation)
}


( document ).hover(function() {
    $( "#small" ).toggle( "explode" );
  });

