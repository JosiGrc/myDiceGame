
//Have a timer start at 20 min once player begins the game, it will have either --
//add 10 min or sub 5 min depending on the players choices

//add health bar(2) with HP that decreases according to a specific role







function weaponRoll(){
	let weapons = ["Shotgun","SMG","LMG","Assault Rifle"];
	let random = Math.floor(Math.random() * 3) + 0;
		if (random === 0){
			console.log("You get a shotgun trusty in this situation.");
		}
		if (weapons === 1){
			console.log("You got an SMG, careful with the recoil.");
		}
		if (weapons === 2){
			console.log("Ah yes the LMG, not enough bad guys for the bullets your carrying.");
		}
		if(weapons === 3){
			console.log("A good balance of all weapons, an almost ensured victory.");
		}
}

weaponRoll();


function numberOfEnemies(min, max){
	let enemies = Math.floor(Math.random() * 50) + 1;   //Needs to be linked to a button 
	console.log (enemies);
}
numberOfEnemies();


function numberOfPlayers(one, six){
	let players = Math.floor(Math.random() * 6) + 1;  //Needs to be linked to a button
	console.log (players);							  //Will also need a health bar per player
}
numberOfPlayers();


function numberOfEnemiesInRoom(){
	let enemiesPresent = Math.floor(Math.random() * 10) + 1;
	console.log(enemiesPresent);
}
numberOfEnemiesInRoom();


function stealthDamage(){
	let stealthDamageTaken = Math.floor(Math.random() * 30) + 0;
	console.log(stealthDamageTaken);
}
stealthDamage();


function unconcealedDamage(){
	let nonStealthDamage = Math.floor(Math.random() * 100) + 0;
}
unconcealedDamage();

// function whichWayPlayerGoes(){
// 	let direction1 = left
// 	let direction2 = foward
// 	let direction3 = right
// 		if player input = left{
// 			console.log("Moving left")
// 		}
// 		else if player input = foward{
// 			console.log("Roger moving foward")
// 		}
// 		else player input = right{
// 			console.log("Moving right")
// 		}
// }













// function beginLocation() {
// 	let option1 = basement;
// 	let option2 = first floor;
// 	let option3 = roof;
// 	let breachOpt1 = door
// 	let breachOpt2 = wall
// 	let breach Opt3 = //window is a function but also an option 

// 	let beginLocal = prompt ("Commander, where do wew begin our assault?");
// 		if beginLocal = basement{ 
// 			console.log("Rogger breaching wall")
// 		}
// 		else if beginLocal = first floor{
// 			prompt("")
// 		}
// }
































// function breachingLocation(door, window, wall) {
// 	let beginGame = prompt("Commander where do we begin basement, first floor, roof?")
// 	let breachLocal = prompt("Where do we breach through Commander. Door, window or wall?")

// 	switch(beginGame){
// 	case "basement":
// 		console.log("Roger, moving to basement");
// 		break;
// 	case "first floor":
// 		console.log("Roger, moving to first floor");
// 		break;
// 	case "roof":
// 		console.log("Roger, rapelling");
// 		break;
// 	default:
// 		console.log("Commander we have to move ASAP!");
// 		break;

// 	if (beginGame == "roof");{
// 		console.log("Breaching roof access in 3,2,1")

// 	else if (beginGame == "first floor");{
// 		prompt("Commander, do we infiltrate through a window or a door?")

// }
// }

// breachingLocation();












