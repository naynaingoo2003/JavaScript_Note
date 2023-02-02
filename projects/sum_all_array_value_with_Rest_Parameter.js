// Rest_Parameter	
// Calculate Array value
	const xy = (...abc) => {
		let total = 0;
		for (i = 0; i < abc.length; i++){
			total += abc[i];
		}
		return total ;
	}
	let result = xy(1,2,3,4,5);
	console.log(result); //15
