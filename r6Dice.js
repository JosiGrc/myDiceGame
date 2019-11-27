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


function currentSituation(){
	numberOfPlayers();
	numberOfEnemies();
}

//Player rolls for additional help
function numberOfPlayers(){
	let numberOfPlayers = Math.floor(Math.random() * 6) + 0;
	console.log( numberOfPlayers + " players are helping you out in this mission");						  
}
// numberOfPlayers();

//PLayer rolls for weapon
function weaponRoll(){
	let weapons = ["Shotgun","SMG","LMG","Assault Rifle"];
	let weaponRoll = Math.floor(Math.random() * 4) + 0;
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
// weaponRoll();

//PLayer rolls for number of enemies in the game

function numberOfEnemies(){
	let numberOfEnemies = Math.floor(Math.random() * 60) + 1; 
	console.log("There's " + numberOfEnemies + " enemies in the building, take care of them.");
	return numberOfEnemies;
}
// numberOfEnemies();

// function LetsPlay(){
// 	numberOfEnemiesInRoom(); 
// 	travelDirection();
// 	situationDamage();
// 	enemiesGone();
// }

// LetsPlay();

//Begin match button is pressed

function playingTheGame(){

	for (let i = 0; numberOfEnemies < 0; i++){
	travelDirection();
	numberOfEnemiesInRoom();
	situationDamage();
	enemiesGone();
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


function numberOfEnemiesInRoom(){
	let numberOfEnemiesInRoom = Math.floor(Math.random() * 10) + 1;
	console.log("There's " + numberOfEnemiesInRoom + " enemies in the room commander." );
	return numberOfEnemiesInRoom;
}


function situationDamage(){
	let situationApproach = prompt("How should be elimatge the enemies, sneaky beaky like or guns blazing?")
	let stealthDamageTaken = Math.floor(Math.random() * 50) + 0;
	let nonStealthDamage = Math.floor(Math.random() * 100) + 0;
	
		if(situationApproach == "sneaky beaky like"){
			console.log("Enemies eliminated at the cost of " + stealthDamageTaken + " damage")
			}

		if (situationApproach == "guns blazing"){
			console.log("They're done for but we took " + nonStealthDamage + " damage")
			}
}


function enemiesGone(){
		numberOfEnemies - numberOfEnemiesInRoom
		if (numberOfEnemies  == 0){
			console.log("It's a win, all enemies defeated")
		}
		console.log("Only " + numberOfEnemies + " enemies remain.")
}



