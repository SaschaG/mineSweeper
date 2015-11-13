if (Meteor.isClient) {

	Template.gameField.helpers({
		gameField: function(){
			var gameField = [];
			var amountOfMines = 2;

			//create game field
			for(var y = 0; y < 4; y++){
				for(var x = 0; x <4; x++){
					gameField.push({id: y + "_" + x, 
						active: false, 
						text: ".", 
						value: "",
						mine: false});
				}
			}

			//Add mines
			for(var i =0; i < amountOfMines; i++){
				//get a random index of game field and check if mine is false
				if(gameField[getRandomInt(0,gameField.length-1)].mine === false){
					gameField[getRandomInt(0,gameField.length-1)].mine = true;
				}
				//if already true do it again
				else{
					i--;
				}
			}
			return gameField;
		},
		newLine: function(){
			if(this.id.split("_")[1] == 3){
				return true;
			}
		}
	});

	Template.gameField.events({
		"click .field": function(){

			this.text = mineOrNotMine(this);
			$("#"+this.id).text(this.text);
			return this.text;
		}
	})
}

mineOrNotMine = function (field){
	console.log(field.mine);
	if(field.mine === true){
		return "X";
	}else{
		return "O";
	}
	return "";
}

function getRandomInt(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

