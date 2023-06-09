const game  = () =>{
    let pscore = 0;
    let cscore = 0;


    // *start the game 
    const startGame = ()=>{
        const playBtn = document.querySelector(".intro button");
        const introScreen = document.querySelector(".intro");
        const match = document.querySelector(".match")
        

        playBtn.addEventListener("click", ()=>{
            introScreen.classList.add("fadeOut");
            match.classList.add("fadeIn")
        });

    };
    //* play match
    const playMatch = () =>{
        const options = document.querySelectorAll(".options button");
        const playerHand = document.querySelector(".player-hand");
        const computerHand = document.querySelector(".computer-hand");
        
        // *computer option
        const computerOptions =["rock", "paper", "scissors"];

        options.forEach(option =>{
            option.addEventListener("click", function(){
        // *computer choice
                const computerNumber = Math.floor(Math.random() * 3);
                const computerChoice = computerOptions[computerNumber];
            // * here is whwre we call compare hands
            compareHands(this.textContent, computerChoice);

            // *update the images
            playerHand.src = `./assets/${this.textContent}.png`;
            computerHand.src = `./assets/${computerChoice}.png`; 

                

            });
        });        

    };
            


    const updateScore = ()=>{
        const playerScore = document.querySelector(".player-score p")
        const computerScore = document.querySelector(".computer-score p")
        playerScore.textContent = pscore;
        computerScore.textContent = cscore;
    }

    const compareHands = (playerChoice, computerChoice)=>{
        
        // * update the text
        const winner = document.querySelector(".winner");


        // * checking for a tie
        if(playerChoice === computerChoice){
            winner.textContent = "It's a tie!!!"; 
            return;
        }
        // *check  for rock
        if(playerChoice === "rock"){
            if(computerChoice === "scissors"){
                winner.textContent = "Player Wins!!";
                pscore++
                updateScore();
                return;
            }else{
                winner.textContent = "Computer Wins!!";
                cscore++
                updateScore();
                return;
            }
        }
        //* check for paper
        if(playerChoice === "paper"){
            if(computerChoice === "scissors"){
                winner.textContent = "Computer Wins!!";
                cscore++
                updateScore();
                return;
            }else{
                winner.textContent = "Player Wins!!";
                pscore++
                updateScore();
                return;
            }
        }
        // *check  for scissors
        if(playerChoice === "scissors"){
            if(computerChoice === "rock"){
                winner.textContent = "Computer Wins!!";
                cscore++
                updateScore();
                return;
            }else{
                winner.textContent = "Player  Wins!!";
                pscore++
                updateScore();
                return;
            }
        }
    }
        



    //* it calls all the inner function
    startGame();
    playMatch();
};
// *this will start the game  
game();