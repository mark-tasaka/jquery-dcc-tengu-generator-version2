	  
/*
hitPointAdjustPerLevel (luckySign, luckModifier)- returns the additional/minus hit points
the character received per level from their Stamina modifier and whether they have the Lucky Sign "Bountiful Harvest".
*/
function hitPointAdjustPerLevel (luckySign, luckModifier) {
   var adjust = 0;
    if (luckySign != undefined && luckySign.luckySign === "Bountiful Harvest"){
        adjust = luckModifier;
     }
	return adjust;
}
	  
// getBaseArmourClass(agilityModifier)- returns the base armour class of the character
function getBaseArmourClass(agilityModifier){
	var armourClass = 10;
	baseArmourClass = armourClass + agilityModifier;
	return baseArmourClass;
}	  


function addModifierSign (modifier) {
	if(modifier >= 0 ) {
		return "+" + modifier;
	}
	else {
		return modifier;
	}
}
	  
/*addSign (modifier) Adds a + sign to value if value is 1 or greater.  If value is 0, then a empty String "" is returned.
*/
function addSign (modifier) {
	if(modifier > 0 ) {
		return "+" + modifier;
	}
	else if(modifier === 0) {
		return "";
	}
	else {
		return modifier;
	}
}
	
	  
/*
getBonusLanguages() returns the bonus languages that a character may have due to high intelligence or the Lucky Sign of Bird Song.  A for loop is used to prevent duplicates of languages.
*/
function getBonusLanguages (intelligenceModifier, luckySign, luckModifier) {
	var bonusLanguages = 0;
	if(bonusLanguages  != undefined && typeof bonusLanguages === 'number') {
		bonusLanguages = intelligenceModifier;
	}
	else {
		return "";
	}
	
	if(luckySign != undefined && luckySign.luckySign === "Birdsong") {
		bonusLanguages += luckModifier;
	}
	
	if(bonusLanguages <=0) {
		return "";
	}
	var result = ", " + addBonusLanguages().language, newLanguage = "";
	
	// loop
	for(var i = 1; i < bonusLanguages; i++){
		// 1) get a random lang
		newLanguage = addBonusLanguages().language;
		// 2) check the new lang is not repeative
		if(result.indexOf(newLanguage) != -1){
			i--;
			// if yes continue;
			continue;
		} else{
			// if not, add the new lang into the result
			result += ", " + newLanguage;
		}

	}
	return result;
}
	  
/*
meleeAdjust (luckySign, luckModifier) - adds bonus/penality to Melee attack based on whether the character possesses specific Lucky Signs
*/
function meleeAdjust (luckySign, luckModifier) {
   var adjust = 0;
    if (luckySign.luckySign != undefined && luckySign.luckySign === "Harsh winter"){
        adjust = luckModifier;
     }
	else if (luckySign.luckySign != undefined && luckySign.luckySign === "The bull") {
		adjust = luckModifier;
	}
	return adjust;
}

/*
rangeAdjust (luckySign, luckModifier) - adds bonus/penality to Range attack based on whether the character possesses specific Lucky Signs
*/	  
function rangeAdjust (luckySign, luckModifier) {
   var adjust = 0;
    if (luckySign.luckySign != undefined && (luckySign.luckySign === "Harsh winter" || luckySign.luckySign === "Fortunate date")){
        adjust = luckModifier;
     }
	return adjust;
}

/*
adjustRef (luckySign, luckModifier) - add bonus/penality to Saving Throw based on Lucky Sign
*/
function adjustRef (luckySign, luckModifier) {
   var adjust = 0;
    if (luckySign.luckySign != undefined && (luckySign.luckySign === "Luck sign" || luckySign.luckySign === "Struck by Lightning")){
        adjust = luckModifier;
     }
	return adjust;
}
	 
/*
adjustFort (luckySign, luckModifier) - add bonus/penality to Saving Throw based on Lucky Sign
*/
function adjustFort (luckySign, luckModifier) {
   var adjust = 0;
    if (luckySign.luckySign != undefined && (luckySign.luckySign === "Luck sign" || luckySign.luckySign === "Lived through famine")){
        adjust = luckModifier;
     }
	return adjust;
}
	  
/*
 addLuckToSpeed (luckySign, luckModifier) adds bonuses to the character's speed if they have a positive Luck Modifier and the Lucky Sign of Wild Child
*/
function addLuckToSpeed (luckySign, luckModifier) {
	var addSpeed = 0;
	if (luckySign.luckySign != undefined && luckySign.luckySign === "Wild child" && luckModifier == 1){
		addSpeed = 5;
	}
	else if (luckySign.luckySign != undefined && luckySign.luckySign === "Wild child" && luckModifier == 2){
		addSpeed = 10;
	}
	else if (luckySign.luckySign != undefined && luckySign.luckySign === "Wild child" && luckModifier == 3){
		addSpeed = 15;
	}
	return addSpeed;
}
	  
/*
adjustWill (luckySign, luckModifier) - add bonus/penality to Saving Throw based on Lucky Sign
*/
function adjustWill (luckySign, luckModifier) {
   var adjust = 0;
    if (luckySign.luckySign != undefined && (luckySign.luckySign === "Luck sign" || luckySign.luckySign === "Resisted temptation")){
        adjust = luckModifier;
     }
	return adjust;
}	 
	  
/*
adjustInit (luckySign, luckModifier) - add bonus/penality to Initiative based on Lucky Sign
*/
function adjustInit (luckySign, luckModifier) {
   var adjust = 0;
    if (luckySign.luckySign != undefined && luckySign.luckySign === "Speed of the Cobra"){
        adjust = luckModifier;
     }
	return adjust;
}	

	  
/*
adjustAC (luckySign, luckModifier) - add bonus/penality to AC based on Lucky Sign
*/
function adjustAC (luckySign, luckModifier) {
   var adjust = 0;
    if (luckySign.luckySign != undefined && luckySign.luckySign === "Charmed house"){
        adjust = luckModifier;
     }
	return adjust;
}	
	  
/*
adjustCrit (luckySign, luckModifier) - add bonus/penality to Crit based on Lucky Sign
*/
function adjustCrit (luckySign, luckModifier) {
   var adjust = luckModifier * 1;
    if (luckySign.luckySign != undefined && luckySign.luckySign === "Warrior's arm"){
        adjust = luckModifier * 2;
     }
	return adjust;
}	
	  
/*
adjustFumble (luckySign, luckModifier) - add bonus/penality to Fumble based on Lucky Sign
*/
function adjustFumble  (luckySign, luckModifier) {
   var adjust = luckModifier * -1;
    if (luckySign.luckySign != undefined && luckySign.luckySign === "The Broken Star"){
        adjust = luckModifier * -2;
     }
	return adjust;
}	

	  /*
adjustMeleeDamage  (luckySign, luckModifier) - add bonus/penality to Melee Damage based on Lucky Sign
*/
function adjustMeleeDamage (luckySign, luckModifier) {
   var adjust = 0;
    if (luckySign.luckySign != undefined && (luckySign.luckySign === "Born on the battlefield" || luckySign.luckySign === "Path of the bear")){
        adjust = luckModifier;
     }
	return adjust;
}	

	  /*
adjustRangeDamage  (luckySign, luckModifier) - add bonus/penality to Melee Damage based on Lucky Sign
*/
function adjustRangeDamage (luckySign, luckModifier) {
   var adjust = 0;
    if (luckySign.luckySign != undefined && (luckySign.luckySign === "Born on the battlefield" || luckySign.luckySign === "Hawkeye")){
        adjust = luckModifier;
     }
	return adjust;
}
  
/*
getHitsPoints (tengu, add1, add2) - retreives the number of hit points that the tengu will have based on their level (tengu), stamina modifier (add1) and Lucky Sign (add2)
*/
function hitPoints (tengu, add1, add2) {
	var hd = tengu.hd;
	var level = tengu.level;
	var hitPoints = 0;
	var zeroLevelHitPoints = Math.floor((Math.random() * 4) + 1) + add1 + add2;
	var hitPointsEachLevel = Math.floor((Math.random() * 6) + 1) + add1 + add2;
	
	if (level === 1) {
		hitPoints = zeroLevelHitPoints + hitPointsEachLevel;
		if (hitPoints <= 3) {
			hitPoints = 4;
		}
	}	
	else if (level === 2) {
		hitPoints = zeroLevelHitPoints + hitPointsEachLevel + hitPointsEachLevel;
		if (hitPoints <= 7) {
			hitPoints = 8;
		}
	}
	else if (level === 3) {
		hitPoints = zeroLevelHitPoints + hitPointsEachLevel + hitPointsEachLevel + hitPointsEachLevel;
		if (hitPoints <= 9) {
			hitPoints = 10;
		}
	}
	else if (level === 4) {
		hitPoints = zeroLevelHitPoints + hitPointsEachLevel + hitPointsEachLevel + hitPointsEachLevel + hitPointsEachLevel;
		if (hitPoints <= 13) {
			hitPoints = 14;
		}
	}
	else if (level === 5) {
		hitPoints = zeroLevelHitPoints + hitPointsEachLevel + hitPointsEachLevel + hitPointsEachLevel + hitPointsEachLevel
		 + hitPointsEachLevel;
		if (hitPoints <= 15) {
			hitPoints = 16;
		}
	}
	else if (level === 6) {
		hitPoints = zeroLevelHitPoints + hitPointsEachLevel + hitPointsEachLevel + hitPointsEachLevel + hitPointsEachLevel
		 + hitPointsEachLevel + hitPointsEachLevel;
		if (hitPoints <= 19) {
			hitPoints = 20;
		}
	}
	else if (level === 7) {
		hitPoints = zeroLevelHitPoints + hitPointsEachLevel + hitPointsEachLevel + hitPointsEachLevel + hitPointsEachLevel
		 + hitPointsEachLevel + hitPointsEachLevel + hitPointsEachLevel;
		if (hitPoints <= 22) {
			hitPoints = 23;
		}
	}
	else if (level === 8) {
		hitPoints = zeroLevelHitPoints + hitPointsEachLevel + hitPointsEachLevel + hitPointsEachLevel + hitPointsEachLevel
		 + hitPointsEachLevel + hitPointsEachLevel + hitPointsEachLevel + hitPointsEachLevel;
		if (hitPoints <= 25) {
			hitPoints = 26;
		}
	}
	else if (level === 9) {
		hitPoints = zeroLevelHitPoints + hitPointsEachLevel + hitPointsEachLevel + hitPointsEachLevel + hitPointsEachLevel
		 + hitPointsEachLevel + hitPointsEachLevel + hitPointsEachLevel + hitPointsEachLevel + hitPointsEachLevel;
		if (hitPoints <= 28) {
			hitPoints = 29;
		}
	}
	else if (level === 10) {
		hitPoints = zeroLevelHitPoints + hitPointsEachLevel + hitPointsEachLevel + hitPointsEachLevel + hitPointsEachLevel
		 + hitPointsEachLevel + hitPointsEachLevel + hitPointsEachLevel + hitPointsEachLevel + hitPointsEachLevel + hitPointsEachLevel;
		if (hitPoints <= 31) {
			hitPoints = 32;
		}
	}
	return hitPoints;
}	  
	  


/*
addCritBonus (tengu) - at bonuses to the tengu's Critical Hits when the tengu is at levels 8 (+2), 9 (+4_) and 10 (+6).  The bonuses are combined with the LuckyModifier value that is added to the Crit Die.
*/
function addCritBonus (tengu) {
	var critBonus = 0;
	if (tengu.level === 8) {
		critBonus = 2;
	}
	else if (tengu.level === 9) {
		critBonus = 4;
	}
	else if (tengu.level === 10) {
		critBonus = 6;
	}
	return critBonus;
}
  