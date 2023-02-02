	const number = [1,2,3,4,5,6];
	const newArray = [...number]; 

	const newArray1 = [0,...number];
	/* Now, 0 is first element*/
	const newArray2 = [...number,7];
	/* Now, 0 is last element*/
	console.log(newArray1); //(7)[0, 1, 2, 3, 4, 5, 6]
	console.log(newArray2); //(7)[1, 2, 3, 4, 5, 6, 7]
