	// Spreat Operator
	const number = [1,2,3,4,5,6];

	const copyArrayNumber = [].concat(number);
	// Now Copied number object 
	console.log(copyArrayNumber);
	/*
	OUTPUT
	[1, 2, 3, 4, 5, 6]
	*/

	//ES6  can copy array to object
	const copyby_es6_method = {...number};
	console.log(copyby_es6_method);
	/*
	OUTPUT As Object
	{
    "0": 1,
    "1": 2,
    "2": 3,
    "3": 4,
    "4": 5,
    "5": 6
}
	*/

	// ES6
	const newArray = [...number];
	console.log(newArray);
	/*
	OUTPUT
	[1, 2, 3, 4, 5, 6]
	*/
