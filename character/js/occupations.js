
 
//  getOccupation() - returns the Randomly Generated Occupation
function getOccupation(){
	var occupations = [
		
		{"occupation": "Tengu vagabond", "race": "Tengu", "trainedWeapon": "Stick (as club)", "damage": "1d4", "tradeGoods": "Bundle of ratty clothes"},
		{"occupation": "Tengu urchin", "race": "Tengu", "trainedWeapon": "Stick (as club)", "damage": "1d4", "tradeGoods": "Begging bowl"},
		{"occupation": "Tengu tea maker", "race": "Tengu", "trainedWeapon": "Knife (as dagger)", "damage": "1d4", "tradeGoods": "Jar of tea leaves"},
		{"occupation": "Tengu gambler", "race": "Tengu", "trainedWeapon": "Dagger", "damage": "1d4", "tradeGoods": "Playing cards"},
		{"occupation": "Tengu sake taster", "race": "Tengu", "trainedWeapon": "Wakazashi (short sword)", "damage": "1d6", "tradeGoods": "3 bottles of sake"},
		{"occupation": "Tengu fisherman", "race": "Tengu", "trainedWeapon": "Knife (as dagger)", "damage": "1d4", "tradeGoods": "Fishing rod"},
		{"occupation": "Tengu potter", "race": "Tengu", "trainedWeapon": "Staff", "damage": "1d4", "tradeGoods": "Clay pot"},
		{"occupation": "Tengu tea merchant", "race": "Tengu", "trainedWeapon": "Dagger", "damage": "1d4", "tradeGoods": "Sack filled with tea leaves"},
		{"occupation": "Tengu puppet maker", "race": "Tengu", "trainedWeapon": "Staff", "damage": "1d4", "tradeGoods": "3 puppets"},
		{"occupation": "Tengu silk merchant", "race": "Tengu", "trainedWeapon": "Staff", "damage": "1d4", "tradeGoods": "Silk, 3 yards"}
		];
		return occupations[Math.floor(Math.random() * 10)]; 
}
	
