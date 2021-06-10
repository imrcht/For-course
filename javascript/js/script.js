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

//Object Creation
var company = new Object();
company.name = "facebook";
company.ceo = new Object();
company.ceo.firstname = "Mark";
company.ceo.favcolor = "Blue";

console.log(company);
console.log("company CEO name is: " + company.ceo.firstname);

console.log(company["name"]);
var stockPropName = "Stock of company";
company[stockPropName] = 110;

console.log("Stock price is: " + company[stockPropName]);
