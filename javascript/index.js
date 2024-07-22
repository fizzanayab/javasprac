
var topSide = 10
var leftSide = 10
var test = document.getElementById('test')

onkeydown = (e) => {

    if (e.key == "ArrowDown") {
        test.style.top = topSide + "px"
        topSide += 10

    }
    if (e.key == "ArrowUp") {
        test.style.top = leftSide + "px"
        topSide -= 10

    }

    if (e.key == "ArrowLeft") {
        test.style.left = leftSide + "px"
        leftSide -= 10

    }

    if (e.key == "ArrowRight") {
        test.style.left = leftSide + "px"
        leftSide += 10

    }


}







