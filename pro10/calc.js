function getDivisable(value){
	if (value === 'ONE HUNDRED'){
		return(100 * 100);	
	}
	else if (value === 'TWENTY'){
		return(20 * 100);	
	}
	else if (value === 'TEN'){
		return(10 * 100);
	}
	else if (value === 'FIVE'){
		return(5 * 100);	
	}
	else if (value === 'ONE'){
		return(1 * 100);	
	}
	else if (value === 'QUARTER'){
		return(0.25 * 100);	
	}
	else if (value === 'DIME'){
		return(0.1 * 100);	
	}
	else if (value === 'NICKEL'){
		return(0.05 * 100);	
	}
	else if (value === 'PENNY'){
		return(0.01 * 100);	
	}
	else{
		console.log('A mistake was made with the getDivisable function');	
	}

}


//Some small functions to help get over floating point errors
function convertToCent(arr){
	var i = 0;
	for (i = 0; i < arr.length; i++){
		arr[i][1] = Math.round(arr[i][1] * 100);
	}
	return(arr);
}
function convertToDol(arr){
		var i = 0;
	for (i = 0; i < arr.length; i++){
		arr[i][1] = arr[i][1] / 100;

	}
	return(arr);
}
function convertItemCent(item){
	return(Math.round(item * 100));
}
function convertItemDol(item){
	return(Math.round(item) / 100);
}

function getTotal(arr){
	//Gets the total cash in drawer
	var i = 0;
	var total = 0;
	for (i = 0; i < arr.length; i++){
		total += arr[i][1];
	}
	return(total);
}

function enoughCidQ(price, cash, cid){
	///Predicate, is there enough cash in drawer to make the change required?
	if(getTotal(cid) < (cash - price)){
		return(false);	
	}
	else{
		return(true);	
	}
}

function makeChange(price, cash, cid){

	//iterates through the cid array and determins if it can make change with the 'bills' that are avaliable. Returns change if successful, false otherwise
	var loc = cid.length - 1;
	var changeNeeded = (cash - price);	
	var changeReturned = [["PENNY", 0], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]

	while((changeNeeded > 0)&&(loc >= 0)){
		if((getDivisable(cid[loc][0]) > changeNeeded) || (cid[loc][1] === 0)){

			loc--;	
		}
		else{
			
			changeNeeded -= getDivisable(cid[loc][0]);	
			cid[loc][1] -= getDivisable(cid[loc][0]);
			changeReturned[loc][1] += getDivisable(cid[loc][0]);
		}
	}
	console.log("change needed is: " + changeNeeded);
	if(changeNeeded > 0){
		//If we still have change left to make, we couldn't make change
		return(false);	
	}
	else{
		return(changeReturned);
	}


}

function updateCid(cid, change){
	//iterates through cid and subtracts change made from makeChange function
	var i = 0;
	for (i = 0; i < cid.length; i++){
		cid[i][1] -= change[i][1];	
	}
	return(cid);
}

function purge(arr){
	//removes any item with a value of 0, for formating
	var returnArr = [];
	var rejectArr = [];

	while(arr.length > 0){
		if(arr[arr.length - 1][1] === 0){
			rejectArr.push(arr.pop());	
		}
		else{
			returnArr.push(arr.pop());	
		}
	}
	return(returnArr);
} 

function transaction(price, cash, cid){
	convertToCent(cid);
	price = convertItemCent(price);
	cash = convertItemCent(cash);
	if(enoughCidQ(price, cash, cid)){
		
		var change = makeChange(price, cash, cid);
		console.log("transaction change is: " + change);
		cid = purge(cid);
		if(change){
		change = convertToDol(change);
		//change = purge(change);
		}

		console.log((change !== false)&&(cid.length > 0));
		if((change !== false) &&(cid.length > 0)){
			change = purge(change);
			console.log('Open, made change');
			console.log('change is: ' + change);
			return({status: "OPEN", change: change});
		}
		else if((change !== false) &&(cid.length === 0)){
			console.log('Closed, made change');	
			return({status: "CLOSED", change: change});
		}
		else{
			console.log('Failed, made no change');	
			return({status: "INN", change: []});
		}
	}	
	else{
		console.log('Failed');
		return({status: "INN", change: []});
	}
}

console.log(transaction(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]));
console.log(transaction(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 1], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]));
console.log(transaction(19.5, 20, [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]));


