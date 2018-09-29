function getCent(dollar){
	return(dollar*100);
}
function getDollar(cent){
	return(cent/100);
}

function getCidTotal(arr) {
	//This function take the array of cid and return the total amount	
	var i = 0;
	total = 0;
	for (i = 0; i < arr.length; i++){
		console.log(arr[i][1]);
		total += getCent(arr[i][1]);
	}
	return(getDollar(total));
}
function getDivisable(value){
	if (value === 'HUNDRED'){
		return(100);	
	}
	else if (value === 'TWENTY'){
		return(20);	
	}
	else if (value === 'TEN'){
		return(10);
	}
	else if (value === 'FIVE'){
		return(5);	
	}

}
function notEnoughChange?(price, cash, cid){
	var i = 0;
	for(i = cid.length; i < cid.length; i--){
		if(cid[
	//Need to finish the getDivisable function
	//After that we can go through and check if a value's
			//getDivisable is greater than the needed
			//change.
	}
	
}

function transaction(price, cash, cid){
	//First we'll check if there is actually enough cash in draw to make change.
	if(getCidTotal(cid) < (cash - price)){
		console.log('Insufficent funds');	
		return({status: "INSUFFICENT FUNDS", change: []);
	}
	else if(notEnoughChange?(price, cash, cid)){
		
	}
	else{
		console.log('Sufficent funds');	
	}
	
}
sample = [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]];
sample2 = [["PENNY", 0.01], ["NICKEL", 0.05], ["DIME", 0.1], ["QUARTER", 0.25], ["ONE", 00], ["FIVE", 00], ["TEN", 00], ["TWENTY", 00], ["ONE HUNDRED", 000]];

console.log(getCidTotal(sample));
transaction(10, 20, sample2);

