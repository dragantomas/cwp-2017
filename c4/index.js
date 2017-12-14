console.log("Hello!");

var niza = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

var five = "5";

console.log(five - 1);

var math = {

	a: null,
	b: null,

	add: function(){
		return this.a + this.b;
	},

	sub: function() {
		return this.a - this.b;
	},

	div: function() {
		return this.a / this.b;
	},

	mul: function() {
		return this.a * this.b;
	}
};

math.a = 4;
math.b = 9;

console.log(math.add());
console.log(math.sub());
console.log(math.div());
console.log(math.mul());

math.a = 10;
math.b = 5;

console.log(math.add());
console.log(math.sub());
console.log(math.div());
console.log(math.mul());

