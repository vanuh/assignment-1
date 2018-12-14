function getString() {
    var userAnswer = prompt("Make the following variable a string: var thisIsAString = ")
    var userCorrect = ""
    if ((userAnswer.substr(0, 1) == '\"' && userAnswer.substr(-1) == '\"') || (userAnswer.substr(0,1) == '\'' && userAnswer.substr(-1)) == '\'') {
        userCorrect = "correct!"
    } else {
        userCorrect = "incorrect :(";
    }
    document.getElementById("stringResult").innerHTML = "Your answer is " + userCorrect;
}

function getNumber() {
    var userAnswer = prompt("Make the following variable a number var thisIsANumber = ")
    var userCorrect = ""
    if (isNaN(userAnswer)) {
        userCorrect = "incorrect :("
    } else {
        userCorrect = "correct!"
    }
    document.getElementById("numberResult").innerHTML = "Your answer is " + userCorrect;
}