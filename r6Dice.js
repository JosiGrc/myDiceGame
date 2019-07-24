"use strict";

//so the game will start with the player clicking the Begin Game button
//once the player starts the game, the player will roll for the weapon
//needed, the amount of players, and the amount of enemies in the building.
//once everything is rolled, the player will get the choice of were to enter
//the building from. Once the player is in the building, there will choices 
//for which direction the player wants to take, each direction leading the player to a different 
//room where theres a roll for how many enemies are in said room.
// until either A) all enemies 
//are defeated B)All players are defeated or C)Time runs out(the totsal time being 
//20 minutes). 























function numberOfPlayers(one, six){
	let players = Math.floor(Math.random() * 6) + 1;
	console.log( players + " players are helping you out in this mission");						  
}
numberOfPlayers();

function weaponRoll(){
	let weapons = ["Shotgun","SMG","LMG","Assault Rifle"];
	let random = Math.floor(Math.random() * 3) + 0;
		if (random === 0){
			console.log("Ah yes the shotgun, trusty in this situation.");
		}
		if (random === 1){
			console.log("You got an SMG, shes a fast one.");
		}
		if (random === 2){
			console.log("The LMG, not enough bad guys for the bullets your carrying.");
		}
		if(random === 3){
			console.log("The Assault Rifle, a good balance of all weapons, an almost ensured victory.");
		}
}

weaponRoll();


function numberOfEnemies(min, max){
	let enemies = Math.floor(Math.random() * 50) + 1; 
	console.log("There's " + enemies + " enemies in the building, take care of them");
}
numberOfEnemies()

function numberOfEnemiesInRoom(){
	let enemiesPresent = Math.floor(Math.random() * 10) + 1;
	console.log("There's " + enemiesPresent + " in the room commander." )
}
numberOfEnemiesInRoom();

while (numberOfEnemies > 1){
	travelDirection();
}



function breachingLocation(door, window, wall) {
	let beginGame = prompt("Commander where do we begin basement, first floor, roof?");

	switch(beginGame){
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

	if(beginGame == "basement"){
		console.log("Breaching basement door in 3,2,1");
	}
	if(beginGame == "first floor"){
			let breachLocal = prompt("Where do we breach through Commander. Door, window or wall?");
	}
	if(beginGame == "roof"){
		console.log("Breaching roof hatch in 3,2,1");
	}
}

breachingLocation();
console.log("We're in.")




function travelDirection (){
	let movingDirection = prompt("Commander which direction do we go to first? left, foward or right")
	
	switch(movingDirection){
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
travelDirection();



function unconcealedDamage(){
			let nonStealthDamage = Math.floor(Math.random() * 100) + 0;
}
function unconcealedDamage(){
	let nonStealthDamage = Math.floor(Math.random() * 100) + 0;
	return nonStealthDamage
	}
	function stealthDamage(nonStealthDamage){
	let situationApproach = prompt("How should be elimatge the enemies, sneaky beaky like or guns blazing?")
	let stealthDamageTaken = Math.floor(Math.random() * 50) + 0;
	
		if(situationApproach == "sneaky beaky like"){
			console.log("Enemies eliminated at the cost of " + stealthDamage + " damage")
			}

		if (situationApproach == "guns blazing"){
			console.log("They're done for but we took " + nonStealthDamage + " damage")
			}
}
let thing = unconcealedDamage();
stealthDamage(thing);











































