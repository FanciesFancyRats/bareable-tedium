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
		//console.log(arr[i][1]);
		total += getCent(arr[i][1]);
	}
	return(getDollar(total));
}
function getDivisable(value){
	if (value === 'ONE HUNDRED'){
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
	else if (value === 'ONE'){
		return(1);	
	}
	else if (value === 'QUARTER'){
		return(0.25);	
	}
	else if (value === 'DIME'){
		return(0.1);	
	}
	else if (value === 'NICKEL'){
		return(0.05);	
	}
	else if (value === 'PENNY'){
		return(0.01);	
	}
	else{
		//console.log('A mistake was made with the getDivisable function');	
	}

}

function convertToFinacial(x){
	return Number.parseFloat(x).toFixed(2);
}
function notEnoughChange(price, cash, cid){
	//was expecting this to just be a predicate, but since I was already iterating through I figured we could just return the needed value
	//This takes the price, cash, and cash in drawer and returns an array of the change needed, if possible, otherwise it returns an array of 0s
	var changeNeeded = (cash - price);
	var changeGiven = [["PENNY", 0], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]];
	var loc = cid.length - 1;
	//console.log(cid[0][0]);
	while (changeNeeded > 0 && loc >= 0){
		changeNeeded = convertToFinacial(changeNeeded);
		//console.log('Change needed: ' + changeNeeded);
		if(cid[loc][1] < 0.01 || getDivisable(cid[loc][0]) > changeNeeded){
			//console.log('Moving the location ' + cid[loc][0] + ' ' + cid[loc][1]);

			loc--;	
		}
		else{
			//console.log('Taking: ' + cid[loc][0]);
			changeNeeded -= getDivisable(cid[loc][0]);
			cid[loc][1] -= getDivisable(cid[loc][0]);
			changeGiven[loc][1] += getDivisable(cid[loc][0]);
			//console.log(changeGiven);
		}
	}
	
	//console.log(changeNeeded);
	if (changeNeeded > 0){
		console.log('cannot make change !');
		return(false);

	}
	else{
		console.log('************************');
		console.log('successfully made change');	
		console.log(changeGiven);
		return(changeGiven);
	}
}
function getCidLeft(price, cash, cid){
	////console.log('*****************************');
	////console.log('Getting remaining cid');
	//console.log('*****************************');
	//This function performs the same as notEnoughChange, but returns cid instead of changeGiven so we can update cid
	var changeNeeded = (cash - price);
	var changeGiven = [["PENNY", 0], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]];
	var loc = cid.length - 1;
	//console.log(cid[0][0]);
	while (changeNeeded > 0 && loc >= 0){
		changeNeeded = convertToFinacial(changeNeeded);
		//console.log('Change needed: ' + changeNeeded);
		if(cid[loc][1] < 0.01 || getDivisable(cid[loc][0]) > changeNeeded){

			//console.log('Moving the location ' + cid[loc][0] + ' ' + cid[loc][1]);

			loc--;	
		}
		else{
			changeNeeded -= getDivisable(cid[loc][0]);
			changeNeeded = convertToFinacial(changeNeeded);
			cid[loc][1] -= getDivisable(cid[loc][0]);
			cid[loc][1] = convertToFinacial(cid[loc][1]);
			changeGiven[loc][1] += getDivisable(cid[loc][0]);
			changeGiven[loc][1] = convertToFinacial(changeGiven[loc][1]);

		}
	}

	return(cid);
}
	

function transaction(price, cash, cid){
	//First we'll check if there is actually enough cash in draw to make change.
	var changeGiven = [];
	if(getCidTotal(cid) < (cash - price)){
		//console.log('Insufficent funds');	
		return({status: "INSUFFICENT FUNDS", change: []});
	}
	changeGiven = (notEnoughChange(price, cash, cid))
	changeGiven = purge(changeGiven);
	cid = getCidLeft(price, cash, cid);	

	if(changeGiven){

	}

	
	else {
		return({status: "INSUFFICENT FUNDS", change: []});	
	}
	if((purge(cid)).length === 0){
		return({status: "CLOSED", change: changeGiven});
	}
	else{
		return({status: "OPEN", change: changeGiven});
	}
	
}
function purge(arr){
	//this function removes all elements that have a 0 value, this is for formmating the answer to the expected results
	var i = 0;
	var returnArr = [];
	var rejectArr = [];
	while(arr.length > 0){
		if(arr[arr.length - 1][1] > 0){
			returnArr.push(arr.pop());
		}
		else{
			rejectArr.push(arr.pop());	
		}
	}
	return(returnArr);
	
}
sample = [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]];
sample2 = [["PENNY", 0.01], ["NICKEL", 0.05], ["DIME", 0.1], ["QUARTER", 0.25], ["ONE", 00], ["FIVE", 00], ["TEN", 00], ["TWENTY", 00], ["ONE HUNDRED", 000]];

console.log(transaction(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]));
console.log(transaction(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]));
console.log(transaction(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]));

