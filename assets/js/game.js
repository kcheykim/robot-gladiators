

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

var fight = function(enemyName) {

    while(playerHealth > 0 && enemyHealth > 0) {

        var promptFight = window.prompt(
            "Would you like to FIGHT or SKIP battle? Enter 'FIGHT' or 'SKIP' to choose");
        console.log(promptFight);

        // if player picks "skip" confirm and then stop the loop
        if (promptFight === "skip" || promptFight === "SKIP") {
            // confirm player wants to skip
            var confirmSkip = window.confirm("Are you sure you'd like to quit?");
    
            // if yes (true), leave fight
            if (confirmSkip) {
            window.alert(playerName + ' has decided to skip this fight. Goodbye!');
            // subtract money from playerMoney for skipping
            playerMoney = playerMoney - 10;
            console.log("playerMoney", playerMoney)
            break;
            }
        }
        // remove enemy's health by subtracting the amount set in the playerAttack variable
        enemyHealth = enemyHealth - playerAttack;
        console.log(
            playerName + " attacked " + enemyNames[i] + ". " + 
            enemyNames[i] + " now has " + enemyHealth + " health remaining.");
            
            //condition for enemy's health
            if(enemyHealth <= 0) {
                window.alert(enemyNames[i] + " has died!");
                break;
            } else {
                window.alert(enemyNames[i] + " stil has " + enemyHealth + " health left.");
            }

            playerHealth = playerHealth - enemyAttack;
            console.log(
            enemyNames[i] + " attacked " + playerName + ". " + playerName + " now has " 
            + playerHealth + " health remaining.");
            
            //condition for player's health
            if (playerHealth <= 0) {
                window.alert(playerName + " has died!");
                break;
            } else {
                window.alert(playerName + " still has " + playerHealth + " health left.");
            }
    }
};
      

for(var i = 0; i < enemyNames.length; i++) {
    if (playerHealth > 0) {
        // let player know what round they are in, remember that arrays start at 0 so it needs to have 1 added to it
        window.alert("Welcome to Robot Gladiators! Round " + (i + 1));
    
        // pick new enemy to fight based on the index of the enemyNames array
        var pickedEnemyName = enemyNames[i];
    
        // reset enemyHealth before starting new fight
        enemyHealth = 50;
    
        // use debugger to pause script from running and check what's going on at that moment in the code
        // debugger;
    
        // pass the pickedEnemyName variable's value into the fight function, where it will assume the value of the enemyName parameter
        fight(pickedEnemyName);
     } 
    else {
        window.alert("You have lost your robot in battle! Game Over!");
        break;
    }
  /* var pickedEnemyName = enemyNames[i];
    enemyHealth = 50;
    fight(pickedEnemyName); */
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