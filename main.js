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



//    printObject

function printObject (shitObj) {

	var keys = Object.keys(shitObj);
	var values = [];
	for (var i = 0; i < keys.length; i++) {
		var key = keys[i];
		values[i] = shitObj[key];
		console.log(keys[i] + ' is ' + values[i]);
	}
}

printObject({ a: 10, b: 20, c: 30 });
printObject({ firstName: 'fucketty', lastName: 'fuck' });




//    vowels

// var vowels=function(words){
// 	var newWords=[];
// 	// var vowlList= {
// 	// 	'a': true,
// 	// 	'e': true,
// 	// 	'i': true,
// 	// 	'o': true,
// 	// 	'u': true
// 	// };
// 	for(i=0; i<words.length; i++){
// 		if(words[i] === 'a' || 'e' || 'i' || 'o' || 'u'){
// 			newWords.push(words[i]);
// 		}
// 	}
// 	return words;
// };
// vowels('alabama');

var vowels=function(shitWord) {
	var vowelreturn = [];
	for (var i = 0; i < shitWord.length; i++){
		if (shitWord.charAt(i).toLowerCase() === 'a' || shitWord.charAt(i).toLowerCase() === 'e' || shitWord.charAt(i).toLowerCase() === 'i' || shitWord.charAt(i).toLowerCase() === 'o' || shitWord.charAt(i).toLowerCase() === 'u'  ) {
				var letter = shitWord.charAt(i);
				vowelreturn.push(letter);
		}
	} 
	return vowelreturn;
};

console.log(vowels('alabama'));
console.log(vowels('What lets in youth?'));



//    twins

function twins(shitArray){
	if (shitArray.length % 2 === 0) {
		for (var i = 0; i < shitArray.length; i += 2){
			if (shitArray[i] !== shitArray[i+1]) {
				return false;
			}
		}
		return true;
	}
	else{
		return false;
	}

}

console.log(twins(['a', 'a', 'b', 'b', 'c', 'c']));
console.log(twins(['a', 'a', 'b', 'z']));
console.log(twins(['a', 'a', 'b']));
console.log(twins(['a', 'a', 'b', undefined]));


//   or

function or (fuckingArray) {
	if (fuckingArray !== null) {
		for (var i = 0; i < fuckingArray.length; i++) {
			if (fuckingArray[i] === true) {
				return true;
			}
		}
		return false;
	}
	else {
		return false;
	}
}

console.log(or([false, false, true, false]));
console.log(or([false, false, false]));
console.log(or([]));


//    unique

function unique (fuckingArr){
	var temp = [];
	fuckingArr.sort();
	for (var i = 0; i < fuckingArr.length; i++){
		if (fuckingArr[i] !== fuckingArr[i+1]){
			temp[temp.length]=fuckingArr[i];
		}
	}
	return temp;
}

console.log(unique(['a', 'b', 'a', 'c', 'd', 'd']));
console.log(unique(['todd', 'avery', 'maria', 'avery']));
console.log(unique(['fuck', 'you', 'ass', 'hole']));








});