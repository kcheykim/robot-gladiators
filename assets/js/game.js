window.alert("Welcome to Robot Gladiators!");

//prompting interaction from the user
var playerName = window.prompt("what is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

// You can also log multiple values at once like this 
console.log(playerName, playerAttack, playerHealth);

//declaring the enemy values
//var enemyName = "Roborto";

//declaring an array of enemies
var enemyNames = ["Roborto", "Amy Andriod", "Robo Trumble"];
var enemyHealth = 50;
var enemyAttack = 12;
console.log(enemyNames, enemyAttack, enemyHealth);

var fight = function() {

    var promptFight = window.prompt("Would you like to FIGHT or SKIP battle? Enter 'FIGHT' or 'SKIP' to choose");
    console.log(promptFight);

    // if player choses to fight, then fight
    if (promptFight === "fight" || promptFight === "FIGHT") {
        // remove enemy's health by subtracting the amount set in the playerAttack variable
        enemyHealth = enemyHealth - playerAttack;
        console.log(
            playerName + " attacked " + enemyNames[i] + ". " + 
            enemyNames[i] + " now has " + enemyHealth + " health remaining.");
        
        //condition for enemy's health
        if(enemyHealth <= 0) {
            window.alert(enemyNames[i] + " has died!");
        }
        else {
            window.alert(enemyNames[i] + " stil has " + enemyHealth + " health left.");
        }

        playerHealth = playerHealth - enemyAttack;
        console.log(
        enemyNames[i] + " attacked " + playerName + ". " + playerName + " now has " 
        + playerHealth + " health remaining.");
        
        //condition for player's health
        if (playerHealth <= 0) {
            window.alert(playerName + " has died!");
        } else {
            window.alert(playerName + " still has " + playerHealth + " health left.");
        }
    } else if (promptFight === "skip" || promptFight === "SKIP") {
        // confirm player wants to skip
        var confirmSkip = window.confirm("Are you sure you'd like to quit?");

        // if yes (true), leave fight
        if (confirmSkip) {
            window.alert(playerName + " has decided to skip this fight. Goodbye!");
            // subtract money from playerMoney for skipping
            playerMoney = playerMoney - 2;
            console.log(playerName + " " + playerMoney);
        }
        // if no (false), ask question again by running fight() again
        else {
            fight();
        }
    } else {
        window.alert("You need to choose a valid option. Try again!");
    }
};

for(var i = 0; i < enemyNames.length; i++) {
    fight(enemyNames[i]);
}

/*FUNCTION EXPRESSION*/

//fight();

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