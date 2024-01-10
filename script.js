console.log("WELCOME TO GUESS MY NUMBER GAME!")

// Generating a number
let randomNumber= Math.round(Math.random()*(20-1));
randomNumber+=1;
let guessedNumber=-1;
let score= 20;
let hScore= 0;
let turns= 0;
document.querySelector(".score").innerHTML= score;
document.querySelector(".hScore").innerHTML= hScore;

let displayRules= false;

const rulesButton= document.querySelector('#rulesButton')

rulesButton.addEventListener('click',()=>{
    
    let overlay=document.querySelector('.overlay')
    
    if(displayRules) {
        displayRules= false;
        overlay.style.display= "none";
    }
    else{
        displayRules= true;
        overlay.style.display= "flex";
    }
    
    console.log(displayRules);
})

const close= document.querySelector('.rules')

close.addEventListener('click',()=>{
    let overlay=document.querySelector('.overlay')
    displayRules= false;
    overlay.style.display= "none";
    console.log(displayRules);
})


// play again game
const restart= document.querySelector('#againButton');

restart.addEventListener('click',()=>{
    const checkButton= document.querySelector(".numInput");
    const answer= document.querySelector('.answer');

    randomNumber= Math.round(Math.random()*(20-1));
    randomNumber+=1;
    console.log(randomNumber);
    checkButton.value= "none"
    answer.innerHTML="?"
    document.querySelector(".numInput").disabled=false;
    score=20;
    document.querySelector(".score").innerHTML= score;
    document.querySelector("#gameCommnt").innerHTML="🙂 Start guessing..."
    document.body.style.backgroundColor="#1f1f1f"
})

console.log(randomNumber)

// escape rules window
document.addEventListener('keydown',(e)=>{
    if (e.key=="Escape") {
        let overlay=document.querySelector('.overlay')
        displayRules= false;
        overlay.style.display= "none";   
    }
})

// game logic

let checkButton= document.querySelector("#checkButton");

checkButton.addEventListener('click',()=>{

    let numInput= document.querySelector(".numInput");

    guessedNumber=numInput.value;

    if(guessedNumber==randomNumber){
        if(score>hScore){
            hScore= Math.max(hScore,score);
            document.querySelector(".hScore").innerHTML= hScore;
        }
        const answer= document.querySelector('.answer');
        answer.innerHTML= guessedNumber
        document.querySelector("#gameCommnt").innerHTML="🥳 Correct Guess!"
        numInput.disabled= true;
        console.log("Correct Guess!")
        document.body.style.backgroundColor="green"
    }
    else if (score>0 && guessedNumber<randomNumber) {
        console.log("to less!")
        document.querySelector("#gameCommnt").innerHTML="📉 To Less!"
        score--;
    }
    else if(score>0 && guessedNumber>randomNumber){
        console.log("to high!")
        document.querySelector("#gameCommnt").innerHTML="📈 To High!"
        score--;
    }
    if(score==0){
        document.querySelector("#gameCommnt").innerHTML="😿 Lost Game Try Again!"
        document.body.style.backgroundColor="#b20000"
        numInput.disabled= true;
        score=0;
    }
     document.querySelector(".score").innerHTML= score;
})