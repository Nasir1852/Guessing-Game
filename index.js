totalAttempts = 5;
attempts = 0;
totalWons = 0;
totalLosts = 0;
//finding elements
const cardBody = document.querySelector(".card-body");
const form = document.querySelector("form");
const guessingNumber = form.querySelector("#guessingNumber");
const checkButton = form.querySelector("#check");
const resultText = cardBody.querySelector(".resultText");
const remainingAttempts = cardBody.querySelector(".remainingAttempts");
const lostwonMessage = document.createElement("p");
// console.log(Object);

form.addEventListener("submit",function(event){
    event.preventDefault();
    // console.log(guessingNumber.value);
    attempts++;
    if(attempts==5){
        guessingNumber.disabled = true;
        checkButton.disabled = true;
    }
    if(attempts<6){
        let guessNumber = Number(guessingNumber.value);
        checkResult(guessNumber);
        remainingAttempts.innerHTML = `Remaining Attempts: ${totalAttempts-attempts}`;
    }
    guessingNumber.value = "";
})

function checkResult(value){
    const randomNumber = getRandomNumber(5);
    if(value==randomNumber){
        resultText.innerHTML=`You won`;
        totalWons++;
    }else{
        resultText.innerHTML = `You lost, random number was ${randomNumber}`;
        totalLosts++;
    }
    lostwonMessage.innerHTML = `Won: ${totalWons}, Lost: ${totalLosts}`;
    lostwonMessage.classList.add("large-text");
    cardBody.appendChild(lostwonMessage);

}

function getRandomNumber(limit){
    return Math.floor(Math.random()*limit)+1;
}