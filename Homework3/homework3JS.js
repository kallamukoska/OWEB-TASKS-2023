var arrayOfWords = ["orange", "lawyer", "crown", "midnight", "flower", "door", "plane", "enter",  "temperature", "network", "robot", "phone",
                     "math", "cookie", "engineering", "solution", "exam" , "story", "address", "animal"];
var n = arrayOfWords.length;
var randomWordValue;
var randomWordLength;
var randomWordIndex;
var count = 0;
var left = 5;
var myWordSpace;
var inputElements;
var randoml1 = 0;
var randoml2 = 0;
var randoml3 = 0;
var l1, l2, l3;
var timerId;
var gameEnded = false;


function guess()
{
    if (gameEnded) {
        return;
    }

    ++count;
    var flag;
    var guessedLetters = new Array();
    for(var i = 0; i < randomWordLength; ++i){
        if(i == randoml1 || i == randoml2 || i==randoml3){
            continue;
        }else{
            guessedLetters[i] = document.getElementById("let"+i).value;
            if(guessedLetters[i] == randomWordValue.charAt(i)){
                flag = true;
            }else{
                flag = false;
                break;
            }
        }
    }

    if(flag == true){
        gameEnded = true;
        if(count == 1){
            alert("CONGRATULATIONS! YOU GUESSED THE WORD IN " + 1 + " TRY." );
        }else{
            alert("CONGRATULATIONS! YOU GUESSED THE WORD IN " + count + " TRIES." );
        }
        clearTimeout(timerId);
    }else if(flag==false && left != 1){
        --left;
        if(left == 1){
            alert("TRY AGAIN! BE CAREFUL YOU HAVE ONLY " + 1 + " TRY LEFT.");
        }else{
            alert("TRY AGAIN! BE CAREFUL YOU HAVE ONLY " + left + " TRIES LEFT.");
        }
    }else if(left == 1){
        gameEnded = true;
        alert("GAME OVER :(");
        clearTimeout(timerId);
    }
}

function timer() {
    if (gameEnded) {
        return;
    }
    alert("A TIMER HAS BEEN SET FOR 15 SECONDS. YOU'D BETTER HURRY! YOU HAVE ONLY 5 TRIES!");
    timerId = setTimeout(timerFunction, 15000);
}

function timerFunction() {
    if (!gameEnded) {
        alert("TIME'S UP! YOU DIDN'T COMPLETE THE GAME, BUT YOU'RE GOOD!");
    }
}


function start()
{
    randomWordIndex = Math.floor(Math.random() * n);
    randomWordValue = arrayOfWords[randomWordIndex];
    randomWordLength = arrayOfWords[randomWordIndex].length;

    myWordSpace = document.getElementById("word");
    inputElements = myWordSpace.getElementsByClassName("letter");

    var let = 3;
    if(inputElements.length < randomWordLength){
        var howmany = randomWordLength - inputElements.length;
        while(howmany){
            let++;
            var addLetter = document.createElement("input");
            addLetter.setAttribute("type", "text");
            addLetter.setAttribute("class", "letter");
            addLetter.setAttribute("id", "let" + let);
            myWordSpace.appendChild(addLetter);
            howmany--;
        }
    }

    // picking 3 random letters indexes
    while(randoml1 == randoml2 || randoml1 == randoml3 || randoml2 == randoml3 ){
        randoml1 = Math.floor(Math.random() * randomWordLength);
        randoml2 = Math.floor(Math.random() * randomWordLength);
        randoml3 = Math.floor(Math.random() * randomWordLength);
    }

    // taking the letters from the word
    l1 = randomWordValue.charAt(randoml1);
    l2 = randomWordValue.charAt(randoml2);
    l3 = randomWordValue.charAt(randoml3);

    document.getElementById("let"+randoml1).value = l1;
    document.getElementById("let"+randoml2).value = l2;
    document.getElementById("let"+randoml3).value = l3;


    var startBtn = document.getElementById("startBtn");
    startBtn.addEventListener("click", timer, false);
    var tryBtn = document.getElementById("tryBtn");
    tryBtn.addEventListener("click", guess, false);

}

window.addEventListener("load", start, false);


