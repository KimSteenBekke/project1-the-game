//capture user input - getElementById
//const betQuantity = document.getElementById(`input`);
//console.log(betQuantity)

//roll the dies
//let button = document.getElementById('rollIt');
//button.onclick = function() {
//  console.log('adding an element to the list');
//};



//functions getDieRoll1 and getDieRoll2 will return a random number between 1 and 6 

let getDieRoll1 = function() {

    console.log("first die:");
    return Math.ceil (6 * Math.random () );

    };

let getDieRoll2 = function() {

    console.log("second die:");
    return Math.ceil (6 * Math.random () );
  
    };

//firstDie to be displayed in die1

let firstDie = getDieRoll1 ();
console.log(firstDie);

//secondDie to be displayed in die2

let secondDie = getDieRoll2 ();
console.log(secondDie);

let totalMessage = "total:";
console.log(totalMessage);

//variable total will return the sum of firstDie and secondDie

let total = (firstDie + secondDie);
console.log(firstDie + secondDie);


//win or loose - must compare with user input (not 6)

if(total == 6) {
    console.log("You win!");
}

else {
    console.log("You loose!");
}

//return total
//return (total);

//this will write "Roll it!" in the roll button

rollButton.innerHTML = "Roll it!";







