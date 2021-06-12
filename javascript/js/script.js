// var x="Hello World";
// function orderChickenWith(sidedish="Whatever!") {
// 	console.log("Chicken with "+sidedish);
// }



// // //******Another way*******



// // function orderChickenWith(sidedish) {
// // 	sidedish=sidedish||"whatever!";
// // 	console.log("Chicken with "+sidedish);
// // }


// orderChickenWith("noodles");
// orderChickenWith();




//******************************************************




// //Object Creation
// var company = new Object();
// company.name = "facebook";
// company.ceo = new Object();
// company.ceo.firstname = "Mark";
// company.ceo.favcolor = "Blue";

// console.log(company);
// console.log("company CEO name is: " + company.ceo.firstname);

// console.log(company["name"]);
// var stockPropName = "Stock of company";
// company[stockPropName] = 110;

// console.log("Stock price is: " + company[stockPropName]);



//*****************************************************




// //Better way for object creation is Object litera
// var facebook = {
// 	name: "facebook",
// 	ceo: {
// 		firstname : "Mark",
// 		favcolor : "black"
// 	},
// 	"Stock of company": 110
// };

// console.log(facebook);
// console.log("ceo of facebook: " + facebook.ceo.firstname)
// console.log("Stock of company: " + facebook["Stock of company"])


//*****************************************************



// //Functions 
// function multiply(x,y){
// 	return x*y;
// }
// multiply.version = "v.1.0.0.0";
// console.log(multiply);
// console.log(multiply.version); // This proves that funcitons are alos objects



//*********************************************************




// //function factory
// function makeMultiplier(multiplier){
// 	var myFucn = function (x){
// 		return multiplier*x;
// 	};
// 	return myFucn;
// }
// MultiplyBy3 = makeMultiplier(3);
// console.log(MultiplyBy3(15));
// MultiplyBy2 = makeMultiplier(2);
// console.log(MultiplyBy2(100));



//*******************************************************



// //Function as arg
// function doOperation (x, operation){
// 	return operation(x);
// }

// result = doOperation(5, MultiplyBy3);
// console.log(result);
// result = doOperation(100, MultiplyBy2);
// console.log(result);



//************************************************************



// //function Constructor
// function Circle (rad){         //cap C is imp for func cons
// 	console.log(this);
// 	this.rad = rad;
// }
// Circle.prototype.getarea =
// 	function (){
// 		return Math.PI * Math.pow(this.rad, 2);
// 	}
// console.log(this);
// MyCircle = new Circle(15);
// console.log(MyCircle);
// console.log("Area of 1st circle: "+MyCircle.getarea());

// MyotherCircle = new Circle(20);
// console.log(MyotherCircle)
// console.log("Area of 2nd circle: "+MyotherCircle.getarea())



//****************************


// //Object literals and "this"
// var literalCircle = {
// 	radius : 10,
// 	getArea: function(){
// 		self = this;
// 		console.log("this keyword pointing to Inside getArea- "+this);
// 		console.log("self=this pointing to Inside getArea- "+self);
// 		var increaserad = function (){
// 			console.log("this keyword pointing to Inside increaserad inside getArea-" +this)
// 			console.log("self pointing to Inside increaserad Inside getArea- "+self);
// 			self.radius = 20
// 		};
// 		increaserad();
// 		console.log(this.radius);

// 		return Math.PI * Math.pow(this.radius, 2);
// 	}
// };

// console.log(literalCircle.getArea());

//**************************************

// //Arrays
// Myarray = new Array();
// Myarray[0] = "rachit";
// Myarray[1] = 7;
// Myarray[2] = function () {
// 	console.log("Hello this a function inside Myarray");
// }
// Myarray[3] = {
// 	name: "rachit",
// 	lastname: "Gupta"
// };

// console.log(Myarray);
// Myarray[2]();
// console.log(Myarray[3]);

//*******************************************

// //Shorthand Arrays
let name = ["rachit","kumar","gupta"];
console.log(name)
// for(var i=0; i< name.length; i++){
// 	console.log("Hello "+ name[i]);
// }
// names[100] = "John";
// for (var i = 0; i < names.length; i++){
// 		console.log("hello "+ names[i])
// }

//******************************************

// Object traversing through for loop

// Myobj = {
// 	firstname : "Rachit",
// 	lastname : "Gupta",
// 	branch : "I.T."
// };
// for (var prop in Myobj){
// 	console.log(Myobj[prop])
// }

// //Array obj traversing through for loop

// names = ["me", "you", "us"];
// for (var n in names) {
// 	console.log("hello " + names[n])
// }
// names.greeting = "GoodMorning";
// console.log("With greeting")
// for (var n in names) {
// 	console.log("hello " + names[n])
// }















































