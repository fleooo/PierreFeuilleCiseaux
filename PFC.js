
let ordi = ['P','F','C'];
let scoreJ = 0
let scoreO = 0

while(scoreJ != 2 && scoreO != 2){
let joueur = prompt('pierre(P), feuille(F), ciseaux(C)??');
let rOrdi = Math.floor(Math.random() * ordi.length);
let rValue = ordi[rOrdi];
let resultat = "";
alert(rValue)
if(joueur === rValue) {
    resultat = "égalité";
    alert(resultat);
} else if((joueur === "P" && rValue === "C") || (joueur === "F" && rValue === "P") || (joueur === "C" && rValue === "F")) {
    resultat = "manche gagnée";
    scoreJ++;
    alert(resultat);
} else {
    resultat = "manche perdue";
    scoreO++;
    alert(resultat);
}

}
if(scoreJ === 2) {
alert("Vous avez gagné la partie !");
} else {
alert("L'ordinateur a gagné la partie !");
}
