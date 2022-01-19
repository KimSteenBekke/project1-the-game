//getDieRoll1 and getDieRoll2 will return a random number between 1 and 6 
let getDieRoll1 = function() {

    //console.log("first die:");
    return Math.ceil (6 * Math.random () );

    };

let getDieRoll2 = function() {

    //console.log("second die:");
    return Math.ceil (6 * Math.random () );
  
    };

//roll the dies
let rollDiceButton = document.getElementById("rollIt");
rollDiceButton.onclick = function() {

let userBet = document.getElementById("bet").value;
//console.log(userBet);

//firstDie to be displayed in die1
let firstDie = getDieRoll1 ();
console.log(firstDie);

//secondDie to be displayed in die2
let secondDie = getDieRoll2 ();
console.log(secondDie);

//write "total"
let totalMessage = "total:";
//console.log(totalMessage);

//variable total will return the sum of firstDie and secondDie
let total = (firstDie + secondDie);
console.log("result:")
console.log(total);


//win or loose - compare total with userBet - SOMETHING WRONG HERE!
console.log("userbet: "+ userBet);
if(total != userBet) {
    //console.log("You loose!");
    youLoose.innerHTML = "You Loose!"
    
}

else {
    function clear() {
        document.getElementById("youLoose").innerHTML = "";
    }
  //console.log("You win!");
  youWin.innerHTML = "You win!"
  
}   

die1.innerHTML=firstDie;
die2.innerHTML=secondDie;


};







//return total
//return (total);

//this will write "Roll it!" in the roll button

//rollButton.innerHTML = "ROLL!";

//capture user input - getElementById

//const betQuantity = document.getElementById(`input`);
//console.log(betQuantity)





