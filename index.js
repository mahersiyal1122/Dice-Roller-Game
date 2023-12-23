//................Random Player 1..................
var randomNumber1=(Math.floor(Math.random() * 6)) + 1;
if (randomNumber1===1){
    document.querySelector(".randomplayer1").setAttribute("src","images/dice1.png");
}
else if (randomNumber1===2){
    document.querySelector(".randomplayer1").setAttribute("src","images/dice2.png");
}
else if (randomNumber1===3){
    document.querySelector(".randomplayer1").setAttribute("src","images/dice3.png");
}
else if (randomNumber1===4){
    document.querySelector(".randomplayer1").setAttribute("src","images/dice4.png");
}
else if (randomNumber1===5){
    document.querySelector(".randomplayer1").setAttribute("src","images/dice5.png");
}
else {
    document.querySelector(".randomplayer1").setAttribute("src","images/dice6.png");
}

//................Random Player 2..................
var randomNumber2=(Math.floor(Math.random() * 6)) + 1;
if (randomNumber2===1){
    document.querySelector(".randomplayer2").setAttribute("src","images/dice1.png");
}
else if (randomNumber2===2){
    document.querySelector(".randomplayer2").setAttribute("src","images/dice2.png");
}
else if (randomNumber2===3){
    document.querySelector(".randomplayer2").setAttribute("src","images/dice3.png");
}
else if (randomNumber2===4){
    document.querySelector(".randomplayer2").setAttribute("src","images/dice4.png");
}
else if (randomNumber2===5){
    document.querySelector(".randomplayer2").setAttribute("src","images/dice5.png");
}
else {
    document.querySelector(".randomplayer2").setAttribute("src","images/dice6.png");
}

//........ Who Will Win ........
if (randomNumber1===randomNumber2){
    document.querySelector("h1").textContent= "Draw, Try Again";
}
else if (randomNumber1>randomNumber2){
    document.querySelector("h1").textContent= "🥳 Player 1 Win";
}
else {
    document.querySelector("h1").textContent= "Player 2 Win 🥳";
}

