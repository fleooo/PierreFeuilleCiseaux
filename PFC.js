let wins =0;
let loses=0;
const choices =["papier","caillou","ciseaux"];
const gamesStatus = document.getElementById("gameStatus")
const gamesScore = document.getElementById("gameScore")
const gameResult = document.getElementById("gameResult")
const paper = document.getElementById("paper")
const rock = document.getElementById("rock")
const scissors = document.getElementById("scissors")

paper.addEventListener("click",()=>runGame("papier"))
rock.addEventListener("click",()=>runGame("caillou"))
scissors.addEventListener("click",()=>runGame("ciseaux"))

function runGame(userchoice){
    const computerChoice = choices[Math.floor(Math.random()*choices.length)]
switch(userchoice +'_'+ computerChoice){
    case 'papier_ciseaux':
    case 'caillou_papier':
    case 'ciseaux_caillou':
            loses++;
            gamesStatus.innerHTML= `Moi: ${userchoice} | Ordi: ${computerChoice}`
            gameResult.innerHTML = `Perdu!`
      break;
        case 'papier_caillou':
        case 'caillou_ciseaux':
        case 'ciseaux_papier':
                wins++;
                gamesStatus.innerHTML= `Moi: ${userchoice} | Ordi: ${computerChoice}`
                gameResult.innerHTML = `Gagné!`
        break;
            case 'papier_papier':
            case 'caillou_caillou':
            case 'ciseaux_ciseaux':
                    gamesStatus.innerHTML= `Moi: ${userchoice} | Ordi: ${computerChoice}`
                    gameResult.innerHTML = `Egalité!`
            break;
            
    }
    gamesScore.innerHTML = `Moi: ${wins} | Ordi: ${loses}`
    if (wins === 2) {
        gamesStatus.innerHTML = 'Tu as gagné la partie';
        setTimeout(resetGame, 2000); 
    }
    if (loses === 2) {
        gamesStatus.innerHTML = 'Tu as perdu la partie';
        setTimeout(resetGame, 2000); 
    }
}
function resetGame() {
    wins = 0;
    loses = 0;
    gamesStatus.innerHTML = 'Selctionnez votre arme!';
    gameResult.innerHTML = ''
    gamesScore.innerHTML = `Moi: ${wins} | Ordi: ${loses}`;
}