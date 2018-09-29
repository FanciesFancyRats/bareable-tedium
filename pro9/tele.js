function varify(str){
	//Start by varifying if 'str' has the requriered number of digits for a valid phone number
	var i = 0;
	var numberCount = 0;
	var parenLoc = -1;
	var parenLoc2 = -1;
	for(i = 0; i < str.length; i++){
		if(isNumber(str[i])){
			numberCount++;	
		}
		//Also checking if one of the characters is a ) so later after we have varified the numbers we can check if parenthes are correct
		else if(str[i] === ')'){
			parenLoc = i;		
		}
		else if(str[i] === '('){
			parenLoc2 = i;		
		}
		//As we are intereating through the string we are also looking that it is only complosed with valid characters.
		else if(isInvalid(str[i])){
			return(false);	
		}
	}
	//check if we have the correct amount of numbers
	if((numberCount < 10) || (numberCount > 11))
	{
		return(false);
	}
	//check if parentheses follow the format (###) 
	else if ((parenLoc >= 0) || (parenLoc2 >= 0)){
		if((parenLoc < 0) || (parenLoc2 < 0)){
			return(false);	
		}
		else if(parenLoc2 !== parenLoc - 4){
			return(false);
		}

	}

	//check if an 11 digit number 1 is the first number
	if((numberCount === 11) && str[0] !== '1'){
		return(false);	
	}

	else{
		return(true);	
	}
	console.log(numberCount);


}
function isNumber(Char){
	//This function checks if the value 'Char' is in the string 0123456789 if not returns false
	var numbers = '0123456789';
	numbers = numbers.split('');
	if(numbers.indexOf(Char) >= 0){
		return(true);	
	}
	else{
		return(false);	
	}
}
function isInvalid(Char){
	var validChar = '0123456789-() ';
	validChar = validChar.split('');
	if(validChar.indexOf(Char) >= 0){
		return(false);			
	}
	else{
		return(true);	
	}
}
console.log(varify('1 (555) 555-5555'));
console.log(isInvalid('?'));
