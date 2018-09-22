function isTel(str){

}

function isNum(ele){
	console.log(typeof(ele));
	if (typeof(ele) === "number" && ele != NaN){
	console.log('that is a number');	
	console.log(parseInt(ele));
}
}
isNum(Number('a'));
console.log(typeof('a'));

//try using isNaN()
console.log(isNaN('a'));
