// function to generate a random numeric value
var randomNumber = function(min, max) {
    var value = Math.floor(Math.random() * (max - min + 1) + min);
  
    return value;
};

//function that made sure the user enters a robot name not leaving it blank
var getPlayerName = function() {
  var name = "";
  while (name === "" || name === null) {
    name = prompt("what is your robot's name?");
  }
  console.log("Your robot's name is " + name);
  return name;
};

//function that make sure the questions is not left blank or null
var test = function() {
  var response = prompt("Question?");
  if (response === "" || response === null) {
    window.alert("You need to provide a valid answer! Please try again."); 
    test();
  }
  return response;
};

var playerInfo = {
    name: getPlayerName(),
    health: 100,
    attack: 10,
    money: 10,
    reset: function() {
        this.health = 100;
        this.money = 10;
        this.attack = 10;
    },
    refillHealth: function() {
        if (this.money >= 7) {
          window.alert("Refilling player's health by 20 for 7 dollars.");
          this.health += 20;
          this.money -= 7;
        } 
        else {
          window.alert("You don't have enough money!");
        }
      },
      upgradeAttack: function() {
        if (this.money >= 7) {
          window.alert("Upgrading player's attack by 6 for 7 dollars.");
          this.attack += 6;
          this.money -= 7;
        } 
        else {
          window.alert("You don't have enough money!");
        }
      }
};
var getPlayerName = function() {
  var name = "";
  while (name === "" || name === null) {
    name = prompt("what is your robot's name?");
  }
  console.log("Your robot's name is " + name);
  return name;
};
/*
//prompting interaction from the user
var playerInfo.name = window.prompt("what is your robot's name?");

//intializing player's values
var playerInfo.health = 100;
var playerInfo.attack = 10;
var playerInfo.money = 10; */

// You can also log multiple values at once like this 
//console.log(playerInfo.name, playerInfo.attack, playerInfo.health);

//declaring the enemy values
//var enemy.name = "Roborto";

//declaring an array of enemies and the values
/*var enemy.names = ["Roborto", "Amy Andriod", "Robo Trumble"];
var enemy.health = 50;
var enemy.attack = 12; */
//console.log(enemy.names, enemy.attack, enemy.health);

var enemyInfo = [
    {
      name: "Roborto",
      attack: randomNumber(10, 14)
    },
    {
      name: "Amy Android",
      attack: randomNumber(10, 14)
    },
    {
      name: "Robo Trumble",
      attack: randomNumber(10, 14)
    }
  ];

  var fightOrSkip = function() {
    // ask player if they'd like to fight or skip using fightOrSkip function
    var promptFight = window.prompt('Would you like to FIGHT or SKIP this battle? Enter "FIGHT" or "SKIP" to choose.');

    // Enter the conditional recursive function call here!
    // Conditional Recursive Function Call
    if (promptFight === "" || promptFight === null) {
      window.alert("You need to provide a valid answer! Please try again.");
      return fightOrSkip();
    }
    
    promptFight = promptFight.toLowerCase();

    // if player picks "skip" confirm and then stop the loop
    if (promptFight === "skip" || promptFight === "SKIP") {
      // confirm player wants to skip
      var confirmSkip = window.confirm("Are you sure you'd like to quit?");
      
  
      // if yes (true), leave fight
      if (confirmSkip) {
        window.alert(playerInfo.name + " has decided to skip this fight. Goodbye!");
        // subtract money from playerMoney for skipping
        playerInfo.playerMoney = playerInfo.money - 10;

        // return true if player wants to leave
        return true;
      } 
    }
   
    return false;
  }

var fight = function(enemy) {

    while(playerInfo.health > 0 && enemy.health > 0) {

       // ask player if they'd like to fight or skip using fightOrSkip function
      if (fightOrSkip()) {
      // if true, leave fight by breaking loop
      break;
      }
        //generate random damage value based on player's attack power
        var damage = randomNumber(playerInfo.attack - 3, playerInfo.attack);

        enemy.health = Math.max(0, enemy.health - damage);
        
        console.log(
            playerInfo.name + " attacked " + enemy.name + ". " + 
            enemy.name + " now has " + enemy.health + " health remaining.");
            
            //condition for enemy's health
            if(enemy.health <= 0) {
                window.alert(enemy.name + " has died!");
                playerInfo.money = playerInfo.money + 20;
                break;
            } else {
                window.alert(enemy.name + " stil has " + enemy.health + " health left.");
            }

            playerInfo.health = Math.max(0, playerInfo.health - enemy.attack);
            console.log(
            enemy.name + " attacked " + playerInfo.name + ". " + playerInfo.name + " now has " 
            + playerInfo.health + " health remaining.");
            
            //condition for player's health
            if (playerInfo.health <= 0) {
                window.alert(playerInfo.name + " has died!");
                break;
            } else {
                window.alert(playerInfo.name + " still has " + playerInfo.health + " health left.");
            }
    }
};

//starting a game
var startGame = function() {

    playerInfo.reset();
// reset player stats
/*  playerInfo.health = 100;
  playerInfo.attack = 10;
  playerInfo.money = 10; */

    for (var i = 0; i < enemyInfo.length; i++) {
        if (playerInfo.health > 0) {
            // let player know what round they are in, remember that arrays start at 0 so it needs to have 1 added to it
            window.alert("Welcome to Robot Gladiators! Round " + (i + 1));
        
            // pick new enemy to fight based on the index of the enemy.names array
            var pickedEnemyObj = enemyInfo[i];
        
            // reset enemy.health before starting new fight
            //enemy.health = 50;
            //enemy.health = Math.floor(Math.random() * 21) + 40;
            pickedEnemyObj.health = randomNumber(40, 60);
        
            // use debugger to pause script from running and check what's going on at that moment in the code
            // debugger;KC
        
            // pass the pickedenemy.name variable's value into the fight function, where it will assume the value of the enemy.name parameter
            fight(pickedEnemyObj);

            // if player is still alive and we're not at the last enemy in the array
            if (playerInfo.health > 0 && i < enemyInfo.length - 1) {
                var storeConfirm = window.confirm("The fight is over, visit the store before the next round?");
                if(storeConfirm) {
                shop();
                }
            } 
        }
        else {
            window.alert("You have lost your robot in battle! Game Over!");
            break;
            }
        }

    endGame();
  /* var pickedenemy.name = enemy.names[i];
    enemy.health = 50;
    fight(pickedenemy.name); */
};


//endGame function
var endGame = function() {
    window.alert("The game has now ended. Let's see how you did!");

    // if player is still alive, player wins!
    if (playerInfo.health > 0) {
      window.alert("Great job, you've survived the game! You now have a score of " + playerInfo.money + '.');
    } else {
      window.alert("You've lost your robot in battle!");
    }
    // ask player if they'd like to play again
    var playAgainConfirm = window.confirm("Would you like to play again?");

    if (playAgainConfirm) {
    // restart the game
    startGame();
    } 
    else {
    window.alert("Thank you for playing Robot Gladiators! Come back soon!");
    }
};

//shop function
var shop = function() {
    // ask player what they'd like to do
    var shopOptionPrompt = window.prompt(
      "Would you like to REFILL your health, UPGRADE your attack, or LEAVE the store? Please enter one: 'REFILL', 'UPGRADE', or 'LEAVE' to make a choice.");
    // use switch to carry out action
    switch (shopOptionPrompt) {
        case 'REFILL':
        case 'refill':
            playerInfo.refillHealth();
            break;
        case 'UPGRADE':
        case "upgrade":
            playerInfo.upgradeAttack();
            break;
        case 'LEAVE':
        case 'leave':
            window.alert('Leaving the store.');
            // do nothing, so function will end
            break;
    default:
    window.alert('You did not pick a valid option. Try again.');
        // call shop() again to force player to pick a valid option
        shop();
        break;
    }
};


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
console.log("Our robot's name is " + playerInfo.name); */

//This pass a message that JavaScript is running
//window.alert("This is an alert! JavaScript is running!");
//calling the function
//fight();

//calling the startGame function
startGame();