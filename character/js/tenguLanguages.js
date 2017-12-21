/*
addBonusLanguages() - returns Randomly selected tengu Bonus Languages
*/
function addBonusLanguages() {
	var bonusLanguages = [
		{"language": "Amabie"},
		{"language": "Bakemono"},
		{"language": "Hibagon"},
		{"language": "Kappa"},
		{"language": "Karura"},
		{"language": "Kitsune"},
		{"language": "Komainu"},
		{"language": "Koropokuru"},
		{"language": "Mikoshi-nyūdō"},
		{"language": "Mizuchi"},
		{"language": "Mujina"},
		{"language": "Namahage"},
		{"language": "Nekomata"},
		{"language": "Ningyo"},
		{"language": "Nue"},
		{"language": "Ogre-magi"},
		{"language": "Oni"},
		{"language": "Onikuma"},
		{"language": "Shojo"},
		{"language": "Ryuu"}
			];
    return bonusLanguages[Math.floor(Math.random() * bonusLanguages.length)]; 
}