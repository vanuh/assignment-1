//Variables learner module function//
function variablecorrect(input) {
    if (input.startsWith('var myfirstvariable =') == true) {
        return document.write("Correct")
    } else {
        return document.write("Incorrect. Try Again")  
    }
}
function getString() {
    var userAnswer = prompt("Make the following variable a string: var thisIsAString = ")
    if ((userAnswer.substr(0, 1) == '\"' && userAnswer.substr(-1) == '\"') || (userAnswer.substr(0,1) == '\'' && userAnswer.substr(-1)) == '\'') {
        document.getElementById("stringResult").innerHTML = "Congratulations! You are correct!"
    } else {
        document.getElementById("stringResult").innerHTML = "That is not a string! Remember to use quotation marks when inputting strings. Click the button to try again."
    }
    document.getElementById("stringResult").innerHTML = "Your answer is " + userCorrect;
}

function getNumber() {
    var userAnswer = prompt("Make the following variable a number var thisIsANumber = ")
    if (isNaN(userAnswer)) {
        document.getElementById("numberResult").innerHTML = "Sorry that is not a number. Click the button to try again!"
    } else {
        document.getElementById("numberResult").innerHTML = "Congratulations! You are correct!"
    }
}
