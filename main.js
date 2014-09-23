$(document).on('ready', function() {

//   getName

// var getName=function(obj){
// 	return obj.name;
// };
// console.log(getName({ name: 'Luisa', age: 25 }));


//   totalLetters

// var totalLetters=function(amount){
// 	console.log(amount.join());
// 	return amount.join('').length;
// };
// totalLetters(['what', 'happened', 'to', 'my', 'function']);
// console.log(totalLetters(['javascript', 'is', 'awesome']));



//    keyValue

var keyValue=function (city, name) {
	var object={};
	object[city]=name;
	return object;
};

console.log(keyValue('city', 'Denver'));
});