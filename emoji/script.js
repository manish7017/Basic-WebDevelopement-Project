

function clickCount() {
    button.clickcount = Number(button.clickcount) + 1

    document.getElementsByClassName("demo").innerHTML = "You have clicked the button" + button.clickcount + "times."
 }