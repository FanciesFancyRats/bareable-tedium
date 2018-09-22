function getPos(n){
	var ans = 0;
	if((n + 13) >= 26){
		ans = (13 - (26 - n));
	}
	else{
		ans = n + 13;
	}
	return ans;
}

function cipher(str){
	//creating alphabet string and turning it in to an array to sidestep strings being immutable.
	var alphabet1 = "abcdefghijklmnopqrstuvwxyz";
	var alphabet2 = alphabet1.toUpperCase();
	alphabet1 = alphabet1.split("");
	alphabet2 = alphabet2.split("");
	var initial = str.split("");
	var target = [];
	var n = 0;

	for (n = 0; n < initial.length; n++){
		console.log(initial[n] + alphabet1.indexOf(initial[n]));
		if(alphabet1.indexOf(initial[n]) > 0){
			console.log("pushing: " + (alphabet1[getPos(alphabet1.indexOf(initial[n]))]));
			target.push(alphabet1[getPos(alphabet1.indexOf(initial[n]))]);	
		}
		else if(alphabet2.indexOf(initial[n]) > 0){
			target.push(alphabet2[getPos(alphabet2.indexOf(initial[n]))]);
			console.log("pushing: " + (alphabet2[getPos(alphabet2.indexOf(initial[n]))]) + " at position: " + initial[n]  );
		}
		else{
			target.push(initial[n]);	
		}
	}
	console.log(target.join(""));
 

	
}
alphabet1 = "abcdefghijklmnopqrstuvwxyz";

console.log(getPos(26));
cipher("GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT.");
cipher("gur dhvpx oebja sbk whzcf bire gur ynml qbt.");
cipher('serr pbqr pnzc');
console.log(getPos(alphabet1.indexOf('a')));
