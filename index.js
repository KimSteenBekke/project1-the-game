
//functions getDieRoll1 and getDieRoll2 will return a random number between 1 and 6 

let getDieRoll1 = function() {

    console.log("first die:");
    return Math.ceil (6 * Math.random () );

    };

let getDieRoll2 = function() {

    console.log("second die:");
    return Math.ceil (6 * Math.random () );
  
    };

let firstDie = getDieRoll1 ();
console.log(firstDie);

let secondDie = getDieRoll2 ();
console.log(secondDie);

let totalMessage = "total:";
console.log(totalMessage);

//variable total will return the sum of firstDie and secondDie

let total = (firstDie + secondDie);
console.log(firstDie + secondDie);
return (total);

