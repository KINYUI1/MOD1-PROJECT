let guessedNumber = document.getElementById("GuessedNumber");
let submit = document.querySelector("#submit");
let responce = document.querySelector(".responce");
let randomNumber = Math.floor(Math.random()*50);
let count = document.querySelector('#count');
let wins = document.querySelector('#wins');
let loses = document.querySelector('#loses');
let level = document.querySelector('#level');
// background music
// window.addEventListener('click',()=>{
//     document.querySelector('#song').play();
// })

//temporal level variable
let templevel = 1;
// temporal wins variable
let tempWins = 0;
//temporal loses variable
let temploses = 0;
//temporal attemp count variable
count.textContent = 5;



console.log(randomNumber);

submit.addEventListener("click",()=>{
    document.querySelector('#click').play();
    count.textContent -= 1;
    if(guessedNumber.value > 50 || guessedNumber.value < 1){
        responce.textContent = "Number must be between 1 and 50.";
    }
    else if(guessedNumber.value < randomNumber){
        responce.textContent = "Your Guess is less than actual.";
    }else if(guessedNumber.value > randomNumber){
        responce.textContent = "Your guess is greater than actual.";
    }else if(guessedNumber.value == randomNumber){
        document.querySelector('#correct').play();
        setTimeout(() => {
            responce.textContent = "CORRECT.";
            tempWins = tempWins + 1;
            wins.textContent = tempWins;
            if(templevel === 1){
                count.textContent = 5;
            }else if(templevel === 2){
                count.textContent = 4;
            }else if(templevel === 3){
                count.textContent = 3;
            }
            
            randomNumber = Math.floor(Math.random()*50);
            console.log(randomNumber);
            }, 1);
        
    }
    if(templevel === 3 && tempWins === 3){
        document.querySelector('#win').play();
        setTimeout(() => {
            window.alert("HUURAY YOU'VE WON");
            location.reload();
        },1);
        
    }
    if(tempWins === 3){
        templevel +=1;
        level.textContent = templevel;
        tempWins = 0;
        if(templevel === 2){
            count.textContent = 4;
            temploses = 0;
        }else if(templevel === 3){
            count.textContent = 3;
            temploses = 0;
        }

        
    }
    
    if(count.textContent == 0){
        temploses += 1;
        randomNumber = Math.floor(Math.random()*50);
        console.log(randomNumber);
        loses.textContent = temploses;
        if((temploses === 1 && templevel ===2) || (temploses === 2 && templevel === 2)){
            count.textContent = 4;
        }else if((temploses === 1 && templevel ===3) || (temploses === 2 && templevel === 3)){
            count.textContent = 3;
        } else{
            count.textContent = 5;
        }
        
    }
    if(temploses === 3){
        document.querySelector('#fail').play();
        setTimeout(() => {
            window.alert(`SORRY YOU'VE LOST THE GAME`)
        location.reload();
        }, 1);
        
    }
})


