// Dimensional Array
	const numberOne = [1,2,3,4,5,6,7,8]; //One Dimensional Array

	const numberTwo = [[1,2], [3,4], [5,6], [7,8]]; //Two Dimensional

	for(let i =0; i < numberTwo.length; i++){
		let currentArray = numberTwo[i]; //[1,2]

		for (let i = 0; i < currentArray.length; i++) {
			let currentElement = currentArray[i];
			console.log(currentElement); // 1 2 3 4 5 6 7 8 
		}	
	}
