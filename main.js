$(document).on('ready', function() {

//   getName

var getName=function(obj){
	return obj.name;
};
console.log(getName({ name: 'Luisa', age: 25 }));


//   totalLetters

var totalLetters=function(amount){
	console.log(amount.join());
	return amount.join('').length;
};
totalLetters(['what', 'happened', 'to', 'my', 'function']);
console.log(totalLetters(['javascript', 'is', 'awesome']));



//    keyValue

var keyValue=function (city, name) {
	var object={};
	object[city]=name;
	return object;
};

console.log(keyValue('city', 'Denver'));



//    negativeIndex


var negativeIndex=function(a, b){
	var i= a.length + b;
	return a[i];

};
console.log(negativeIndex(['a', 'b', 'c', 'd', 'e'], -2));



//    removeM

var removeM=function(word){
	var replaceM=word.replace(/m/g, '');
	// for(i=0; i<word.length; i++){
	// 	if(i !='m'){
	// 		replaceM.push(i);
	// 		word.join(replaceM);	
	// }
	return replaceM;
};
removeM('family');
console.log(removeM);



//    **********printObject**********

var printObject=function(key, value){
	var items=[

		];
	return items
	
};
var listItems=_.each({})




//    **********vowels**********

var vowels=function(words){
	var newWords=[];
	// var vowlList= {
	// 	'a': true,
	// 	'e': true,
	// 	'i': true,
	// 	'o': true,
	// 	'u': true
	// };
	for(i=0; i<words.length; i++){
		if(words[i] === 'a' || 'e' || 'i' || 'o' || 'u'){
			newWords.push(words[i]);
		}
	}
	return words;
};
vowels('alabama');























});