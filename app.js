let userScore=0;
let compScore=0;
const userScorePara=document.querySelector("#user-score");
const compScorePara=document.querySelector("#comp-score")
const msg=document.querySelector("#msg");
const choices=document.querySelectorAll(".c");
const genCompChoice=()=>{
    let options=["rock","paper","scissor"];
    let ranIdx=Math.floor(Math.random()*3);
    return options[ranIdx];
}

const drawGame=()=>{
    console.log("game was draw");
    msg.innerText="game was draw! play again";
    msg.style.backgroundColor="#081b31"
}


const showWinner=(userWin,userChoice,compChoice)=>{
    if(userWin){
        console.log("you Win");
        msg.innerText=`you won! your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor="green";
        userScore++;
        userScorePara.innerText=userScore;
    }
    else{
        console.log("computer won")
        msg.innerText=`you loss! ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor="red"
        compScore++;
        compScorePara.innerText=compScore;
    }
}
const playGame=(userChoice)=>{
    console.log("user choice:",userChoice);
    //generate computer choice
    const compChoice=genCompChoice();
    console.log("computer choice:",compChoice)
    if(userChoice===compChoice){
        drawGame();
    }
    else{
        let userWin=true;
        if(userChoice==="rock"){
            userWin=compChoice==="scissor"?false:true;
        }
        else if(userChoice==="paper"){
            userWin=compChoice==="scissor"?false:true;
        }
        else{
            userWin=compChoice==="rock"?false:true;
        }
        showWinner(userWin,userChoice,compChoice);
    }
   
}



choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userChoice=choice.getAttribute("id");
        //console.log(userChoice,"was clicked");
        playGame(userChoice);

    });
});