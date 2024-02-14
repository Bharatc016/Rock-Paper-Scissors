let choices=document.querySelectorAll(".choice");
let user=0;
let comp=0;
let msg=document.querySelector("#msg");
let userScore=document.querySelector("#user");
let compScore=document.querySelector("#comp");
const compchoice=()=>{
    let options=["rock","paper","scissors"];
    let index=Math.floor(Math.random()*3);
    return options[index];
}

const drawGame=(compChoice,userChoice)=>{
    console.log("Draw");
    msg.innerText=`Your choice is ${userChoice} and comp choice is ${compChoice} so Game is Draw`;
}
const showWinner=(userWin,userChoice,compChoice)=>{
    if(userWin){
        user++;
        userScore.innerText=user;
        console.log("user won");
        msg.innerText=`Your choice ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor="green";
    }
    else{
        comp++;
        compScore.innerText=comp;
        console.log("comp won");
        msg.innerText=`comp choice ${compChoice} beats ${userChoice}`;
        msg.style.backgroundColor="red";
    }
}
let playGame=(userChoice)=>{
    console.log("user choice is",userChoice);
    const compChoice=compchoice();
    console.log("comp choice is",compChoice);
    if(userChoice===compChoice){
        drawGame(compChoice,userChoice);
    }
    else{
        let userWin=true;
        if(userChoice==="rock"){
            userWin=compChoice==="paper" ? false:true;
        }
        else if(userChoice==="paper"){
            userWin=compChoice==="scissors" ? false:true;
        }
        else{
            userWin=compChoice==="rock" ? false:true;
        }
        showWinner(userWin,userChoice,compChoice);
    }
}

choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userChoice=choice.getAttribute("id");
        playGame(userChoice);
    });
});

