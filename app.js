let choices=document.querySelectorAll(".choice");
let user=0;
let comp=0;
let msg=document.querySelector("#msg");
const compchoice=()=>{
    let options=["rock","paper","scissors"];
    let index=Math.floor(Math.random()*3);
    return options[index];
}

const drawGame=(compChoice)=>{
    console.log("Draw");
    msg.innerText=`User and Comp choise is ${compChoice} so Game is Draw`;
}
const showWinner=(userWin,userChoice,compChoice)=>{
    if(userWin){
        console.log("user won");
        msg.innerText=` User choice is ${userChoice} Comp choice is ${compChoice} so user won`
    }
    else{
        console.log("comp won");
        msg.innerText=`User choice is ${userChoice} Comp choce is ${compChoice} so comp won`;
    }
}
let playGame=(userChoice)=>{
    console.log("user choice is",userChoice);
    const compChoice=compchoice();
    console.log("comp choice is",compChoice);
    if(userChoice===compChoice){
        drawGame(compChoice);
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

