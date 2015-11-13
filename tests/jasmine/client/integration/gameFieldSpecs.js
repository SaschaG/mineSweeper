//Integration

describe("Game Field", function(){
	it("16 divs with class field should exist", function(){
		expect($("div.field").length).toBe(16);
	})
	it("4 br should exist", function(){
		expect($("br").length).toBe(4);
	})
});