

//function checkAnswer (correctAnswer, incorrectAnswer) {
//    console.log(correctAnswer ='4', "Correct! Well done.")
//    console.log(incorrectAnswer =   '22', '3', "That's incorrect. Try again!");
//}

//checkAnswer(correctAnswer)
//checkAnswer(incorrectAnswer)


function checkAnswer () {
    const correctAnswer = '4';
    const userAnswer = document.querySelector('input[name="quiz"]:checked')?.value;

    if (!userAnswer) {
        document.getElementById("feedback").textContent = "please submit an answer before submitting";
        return; 
    }

    if (userAnswer === correctAnswer) {
        document.getElementById("feedback").textContent = "Correct! Well done.";
    }

    else {
        document.getElementById("feedback").textContent = "That's incorrect. Try again!";
    }
}

document.getElementById("submit-answer").addEventListener ("click", checkAnswer);








