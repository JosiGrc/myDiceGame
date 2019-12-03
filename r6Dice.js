"use strict";

//so the game will start with the player clicking the Begin Game button
//once the player starts the game, the player will roll for the weapon
//needed, the amount of players, and the amount of enemies in the building.
//once everything is rolled, the player will get the choice of were to enter
//the building from. Once the player is in the building, there will choices 
//for which direction the player wants to take, each direction leading the player to a different 
//room where theres a roll for how many enemies are in said room.
// until either A) all enemies 
//are defeated B)All players are defeated. 

// while (enemies > 1){
// 	numberOfEnemiesInRoom(); travelDirection(); situationDamage();   //the while loop 

//Master Function

$(document).ready(function(){
  $("p").click(function(){
    $(this).hide();
  });
});



function diceRoll(numberOfSides){
    let outcome = Math.floor(Math.random() * numberOfSides) + 1;
    return outcome;
}


//Player rolls for additional help
function numberOfPlayers(){
	let NumberOfPlayers = diceRoll(6);
	console.log( NumberOfPlayers + " players are helping you out in this mission");						  
}

//PLayer rolls for weapon
function weaponRoll(){
	let weapons = ["Shotgun","SMG","LMG","Assault Rifle"];
	let weaponRoll = diceRoll(3);
		if (weaponRoll === 0){
			console.log("Ah yes the shotgun, trusty in this situation.");
		}
		if (weaponRoll === 1){
			console.log("You got an SMG, shes a fast one.");
		}
		if (weaponRoll === 2){
			console.log("The LMG, not enough bad guys for the bullets your carrying.");
		}
		if(weaponRoll === 3){
			console.log("The Assault Rifle, a good balance of all weapons, an almost ensured victory.");
		}
}

//PLayer rolls for number of enemies in the game

function numberOfEnemies(){
	let NumberOfEnemies = diceRoll(70);
	console.log("There's " + NumberOfEnemies + " enemies in the building, take care of them.");
	return NumberOfEnemies;
}

//Begin match button is pressed

function playingTheGame(NumberOfEnemies){

		travelDirection();
		numberOfEnemiesInRoom();
		// situationDamage();
		remainingEnemies();

		if (NumberOfEnemies > 0){
			playingTheGame();
		}
		else{
			console.log("Congratulations you won.")
		}	
}

function travelDirection(){
	let travelDirection = prompt("Commander which direction do we go to first? left, foward or right")
	
	switch(travelDirection){
		case "left":
		console.log("Roger that turning left.");
		break;
		case "foward":
		console.log("Moving foward.")
		break;
		case "right":
		console.log("Turning right.");
		break;
		default:
		console.log("The clock is ticking Commander!")
		break;
	}
}


function numberOfEnemiesInRoom(NumberOfEnemies){
	let NumberOfEnemiesInRoom = diceRoll(NumberOfEnemies);
	console.log("There's " + NumberOfEnemiesInRoom + " enemies in the room commander." );
	return NumberOfEnemiesInRoom;
}


function situationDamage(){
	let situationApproach = prompt("How should be elimatge the enemies, sneaky beaky like or guns blazing?")
	let stealthDamageTaken = diceRoll(50);
	let nonStealthDamage = diceRoll(100);
	
		if(situationApproach == "sneaky beaky like"){
			console.log("Enemies eliminated at the cost of " + stealthDamageTaken + " damage")
			}

		if (situationApproach == "guns blazing"){
			console.log("They're done for but we took " + nonStealthDamage + " damage")
			}
}


function remainingEnemies(NumberOfEnemies, NumberOfEnemiesInRoom){

		NumberOfEnemies = NumberOfEnemies- NumberOfEnemiesInRoom
		if (NumberOfEnemies  == 0){
			console.log("It's a win, all enemies defeated");
		}
		else if (NumberOfEnemies > 0){
			console.log("Only " + NumberOfEnemies + " enemies remain.");
		}

		return NumberOfEnemies;
}


function initialBreach() {
	let breachingLocation = prompt("Commander where do we begin basement, first floor, roof?");

	switch(breachingLocation){
	case "basement":
		console.log("Roger, moving to basement");
		break;
	case "first floor":
		console.log("Roger, moving to first floor");
		break;
	case "roof":
		console.log("Roger, rapelling");
		break;
	default:
		console.log("Commander we have to move ASAP!");
		break;
	}
	if(breachingLocation == "basement"){
		console.log("Breaching basement door in 3,2,1");
	}
	if(breachingLocation == "first floor"){
			let breachLocal = prompt("Roger breaching main door in 3,2,1");
	}
	if(breachingLocation == "roof"){
		console.log("Breaching roof hatch in 3,2,1");
	}
	return console.log("We're in.");
}









