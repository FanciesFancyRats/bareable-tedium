
//Making arrfor acceptable alpha-numeric characters
alphabet = "abcdefghijklmnopqrstuvwxyz";
alphabet = alphabet.split("");
numbers = "1234567890";
numbers = numbers.split("");

//Spliting those strings into arrays so we can address the individual items;

function strip(str){
	str = str.toLowerCase(str);
	str = str.split("");
	var target = [];

	for(n = 0; n < str.length; n++) {
		if(alphabet.indexOf(str[n]) >= 0 || numbers.indexOf(str[n]) >= 0){
			target.push(str[n]);
		}
	}
	return(target);
}

function isPal(str){
	if(typeof str === "string"){
		str = strip(str);
	}
	if((str.length === 1)||(str.length === 0)){
		console.log("is pal should return true!");
		return(true);	
	}
	else if(str[0] === str[(str.length -1)]){
		console.log('recursing');
		str.shift();
		str.pop();
		console.log(str);
		isPal(str);
	}
	else{
		console.log('not pal');
		return(false);	
	}
	
}
console.log(isPal('a'));
	
