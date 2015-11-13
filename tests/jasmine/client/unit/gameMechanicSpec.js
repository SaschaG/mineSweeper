describe("gameField [click] event", function(){
	var field;
	beforeEach(function(){
		field = $("div.field").eq(0);
	});

	it("should call click function", function(){
		field.click();
		expect(field.text()).not.toEqual("");
	})
});

describe("Test if a field is a mine or not", function(){
	var mine = {id: 1 + "_" + 1, 
						active: false, 
						text: ".", 
						value: "",
						mine: true};
	it("should be a mine", function(){
		expect(mineOrNotMine(mine)).toEqual("X");
	})

	var noMine = {id: 1 + "_" + 1, 
						active: false, 
						text: ".", 
						value: "",
						mine: false};

	console.log(noMine.mine + " " + mineOrNotMine(noMine));
	it("shouldn't be a mine", function(){
		expect(mineOrNotMine(noMine)).toEqual("O");
	})


});