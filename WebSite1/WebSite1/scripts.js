//Variables learner module function//
function variablecorrect(input) {
    if (input.startsWith('var myfirstvariable =') == true) {
        return document.write("Correct")
    } else {
        return document.write("Incorrect. Try Again")  
    }
}

/*Gets a string from the user and checks that it has been input with the correct syntax for a JS string*/
function getString() {
    var userAnswer = prompt("Make the following variable a string: var thisIsAString = ")
    /*Checks if the user has started their string with correct quotation marks*/
    if ((userAnswer.substr(0, 1) == '\"' && userAnswer.substr(-1) == '\"') || (userAnswer.substr(0,1) == '\'' && userAnswer.substr(-1)) == '\'') {
        document.getElementById("stringResult").innerHTML = "Congratulations! You are correct!"
    }
    /*If incorrect input is given returns a tip on how to correct themselves*/
    else {
        document.getElementById("stringResult").innerHTML = "That is not a string! Remember to use quotation marks when inputting strings. Click the button to try again."
    }
    document.getElementById("stringResult").innerHTML = "Your answer is " + userCorrect;
}

/*Gets a number input from the user and confirms that it is a number*/
function getNumber() {
    var userAnswer = prompt("Make the following variable a number var thisIsANumber = ")
    /*If input is not a number (NaN) suggests the user tries again*/
    if (isNaN(userAnswer)) {
        document.getElementById("numberResult").innerHTML = "Sorry that is not a number. Click the button to try again!"
    } else {
        document.getElementById("numberResult").innerHTML = "Congratulations! You are correct!"
    }
}
