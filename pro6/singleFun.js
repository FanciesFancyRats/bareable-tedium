function Pali(str){
	var alphabet = "abcdefghijklmnopqrstuvwxyz";
	var alphabet2 = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
	var numbers = "012345789";
	var i = 0;
	var target = [];
	var inital = str.split("");
	var isPal = true;

	//This works except for diffrent cases. It should be as easy as making another alphabet and pushing lowercase when found.
	
	for (i = 0; i < inital.length; i++){
		if(alphabet2.indexOf(inital[i]) > 0){
			inital[i] = inital[i].toLowerCase();
			console.log(inital);
					
		}
	}
	for (i = 0; i < inital.length; i++){
		if((alphabet.indexOf(inital[i]) > 0) || (numbers.indexOf(inital[i]) > 0)){
			target.push(inital[i]);	
			console.log(target);
		}
	}
	i = 0;

	while ((isPal) && (target.length > 1)){
		if(target[0] === target[target.length - 1]){
			target.shift();
			target.pop();
			console.log(target);
		}	
		else{
			isPal = false;	
		}
	}
	return(isPal);

}

console.log(Pali('eyE'));
