function queue(ary){
	/*
		Takes array argument
	*/
	let size = ary.length;
	let placeHold = ary[size - 1];
	let destiny = [];

	for (let x = 0; x < size; x++){
		destiny[x] = placeHold;
		placeHold = ary[i];
	}
	return destiny
}
