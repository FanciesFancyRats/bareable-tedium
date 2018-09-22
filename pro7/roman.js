function roman(number){
	var answer = [];
	while(number > 0){
		if(number >= 1000){
			number -= 1000;
			answer.push('M');
			
		}
		else if(number >= 900){
			number -= 900;
			answer.push('CM');
		}
		else if(number >= 500){
			number -= 500;
			answer.push('D');
		}
		else if(number >= 400){
			number -= 400;
			answer.push('CD');
		}
		else if(number >= 100){
			number -= 100;
			answer.push('C');
		}
		else if(number >= 90){
			number -= 90;
			answer.push('XC');
		}
		else if(number >= 50){
			number -= 50;
			answer.push('L');
		}
		else if(number >= 40){
			number -= 40;
			answer.push('XL');
		}
		else if(number >= 10){
			number -= 10;
			answer.push('X');
		}
		else if(number >= 9){
			number -= 9;
			answer.push('IX');
		}
		else if(number >= 5){
			number -= 5;
			answer.push('V');
		}
		else if(number >= 4){
			number -= 4;
			answer.push('IV');
		}
		else if(number >= 1){
			number -= 1;
			answer.push('I');
		}
		console.log(answer);
	}
	answer = answer.join('');
	console.log(answer);
	return(answer);
}

roman(29);
