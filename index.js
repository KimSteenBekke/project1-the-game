//getDieRoll1 and getDieRoll2 will return a random number between 1 and 6 
let getDieRoll1 = function() {
    return Math.ceil (6 * Math.random () );
};

let getDieRoll2 = function() {
    return Math.ceil (6 * Math.random () );
};

//roll the dies and play the music
let rollDiceButton = document.getElementById("rollIt");
rollDiceButton.onclick = function() {

var myAudio = document.getElementById("myAudio");
myAudio.play();  

let userBet = document.getElementById("bet").value;

//firstDie to be displayed in die1
let firstDie = getDieRoll1 ();

//secondDie to be displayed in die2
let secondDie = getDieRoll2 ();

//write "total" on the screen
let totalMessage = "total:";

//variable total will return the sum of firstDie and secondDie
let total = (firstDie + secondDie);

//win or loose - compare total with userBet and pass message
console.log("userbet: "+ userBet);

if(total != userBet) {
    document.getElementById('message').innerHTML = 'Bro, You Loose!';
}

else {
    document.getElementById('message').innerHTML = 'Bro, You Win!';
}   

//pass values from firstDie and secondDie to die1 and die2 on the screen
die1.innerHTML=firstDie;
die2.innerHTML=secondDie;

};





