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


// //Functions 
// function multiply(x,y){
// 	return x*y;
// }
// multiply.version = "v.1.0.0.0";
// console.log(multiply);
// console.log(multiply.version); // This proves that funcitons are alos objects

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

// //Function as arg
// function doOperation (x, operation){
// 	return operation(x);
// }

// result = doOperation(5, MultiplyBy3);
// console.log(result);
// result = doOperation(100, MultiplyBy2);
// console.log(result);