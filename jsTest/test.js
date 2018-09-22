function nextInLine(arr, item){
	arr.push(item);
	console.log('arr is: ' + arr);
	item = arr.pop();
	console.log('arr is: ' + arr);
	console.log('item is: ' + item);
	console.log('-------------------');
	return item;
}

nextInLine([], 5);
nextInLine([], 1);
nextInLine([2], 1);
nextInLine([5, 6, 7, 8, 9], 1);

