//Variables learner module function//
function variablecorrect() {
    var userAnswer = prompt("Write your answer in the following input box:")
    /*Checks if the user has started their string with correct quotation marks*/
    if (userAnswer.startsWith('var myfirstvariable =')) {
        document.getElementById("variableResult").innerHTML = "Congratulations! This is a correct variable!"
    } else {
        document.getElementById("variableResult").innerHTML = "That is not the correct format for a variable. Go over the examples till your are confident, then try again!"
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

/*Asks user for answer to question about combining conditions*/
function combineVariable() {
    var userAnswer = prompt("What is needed in an if statement to require that two conditions are true before the block is run? ")
    /*If user inputs && then they are correct*/
    if (userAnswer == "&&") {
        document.getElementById("combineResult").innerHTML = "Congratulations! You are correct!"
    } else {
        document.getElementById("combineResult").innerHTML = "Sorry that is not correct. Have a look at the section of if statements if you are stuck!<br />Click the button to try again!"
    }
}

/*function to test users knowledge of condition statements*/
function ifStatementQuestion() {
    var userAnswer = prompt("Type your answer here. Hint: Enter your answer as the section of code which will run")
    /*If user inputs "sing in the rain" then they are correct*/
    if (userAnswer.toLowerCase() == "sing in the rain") {
        document.getElementById("statementResult").innerHTML = "Congratulations! You are correct!"
    } else {
        document.getElementById("statementResult").innerHTML = "Sorry that is not correct. Make sure you enter your answer as it appears in the code block (not case sensitive)"
    }
}

/*function to test users knowledge of string methods*/
function sliceString() {
    var userAnswer = prompt("Type your answer here.")
    /* If user inputs Giraffe then answer is correct*/
    if (userAnswer == "Giraffe") {
        document.getElementById("sliceResult").innerHTML = "Congratulations! You are correct!"
    } else {
        document.getElementById("sliceResult").innerHTML = "Sorry that is not correct. Click to try again!"
    }
}

/*function to test users knowledge of string methods*/
function getGlobal() {
    var userAnswer = prompt("Type your answer here.")
    if (userAnswer == "/g") {
        document.getElementById("globalResult").innerHTML = "Congratulations! You are correct!"
    } else {
        document.getElementById("globalResult").innerHTML = "Sorry that is not correct. Click to try again!"
    }
}
    
/*function to test users knowledge of loops */
function loopcorrect() {
    var userAnswer = prompt("Write your answer in the following input box:")
    if (userAnswer == "10") {
        document.getElementById("variableResult").innerHTML = "Congratulations! You are correct!"
    } else {
        document.getElementById("variableResult").innerHTML = "That is not correct, try again!"
    }
}

/*function to display knowledge of loops and to test user understanding of loops*/
function ForLoop() {
    var magicword = ["Abra", "Kadabra", "Alakazam"];
    var i = 0;
    var text = "";
    while (magicword[i]) {
        text += magicword[i] + "<br>";
        i++;
    }
    document.getElementById("Looper").innerHTML = text
}

/*function to test users knowledge of functions*/
function localVarTest() {
    var userAnswer = prompt("Type your answer here.")
    if (userAnswer == "False") {
        document.getElementById("localVarResult").innerHTML = "Congratulations! You are correct!"
    } else {
        document.getElementById("localVarResult").innerHTML = "Sorry that is not correct. Read over the section on local variables to ensure you understand this."
    }

}