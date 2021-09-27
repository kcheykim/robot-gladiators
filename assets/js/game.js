//prompting interaction from the user
var playerName = window.prompt("what is your robot's name?");
var playerHealth = 100;
var playerAttack = 50;

// You can also log multiple values at once like this 
console.log(playerName, playerAttack, playerHealth);

var enemyName = "Roborto";
var enemyHealth = 50;
var enemyAttack = 12;

var fight = function() {
    window.alert("Welcome to Robot Gladiators!");
    enemyHealth = enemyHealth - playerAttack;
    console.log(
        playerName + " attacked " + enemyName + ". " + 
        enemyName + " now has " + enemyHealth + " health remaining.");

    playerHealth = playerHealth - enemyAttack;
    console.log(
        enemyName + " attacked " + playerName + ". " + 
        playerName + " now has " + playerHealth + " health remaining.");
    
    //condition for enemy's health
    if(enemyHealth <= 0) {
        window.alert(enemyName + " has died!");
    }
    else {
        window.alert(enemyName + " stil has " + enemyHealth + " health left.");
    }

    //condition for player's health
    if (playerHealth <= 0) {
        window.alert(playerName + " has died!");
      } 
      else {
        window.alert(playerName + " still has " + playerHealth + " health left.");
      }
};

/*FUNCTION EXPRESSION*/

fight();

/*FUNCTION DECL
function fight() {
    window.alert("The fight has begun!");
} */

/*
console.log("This logs a string, good for leaving yourself a message");
// this will do math and log 20
console.log(10 + 10);
// what is this?
console.log("Our robot's name is " + playerName); */

//This pass a message that JavaScript is running
//window.alert("This is an alert! JavaScript is running!");
//calling the function
//fight();