
	// Spreat Operator
	const number = {
		one : '1',
		two : '2',
		three : '3',
		four : '4',
		five : '5'
	}; 

	const copyObjectNumber = Object.assign({},number);
	// Now Copied number object 
	console.log(copyObjectNumber);
	/*
	OUTPUT
	 {
    "one": "1",
    "two": "2",
    "three": "3",
    "four": "4",
    "five": "5"
	}
	*/

	//ES6 
	const copyby_es6_method = {...number};
	console.log(copyby_es6_method);
	/*
	OUTPUT
	 {
    "one": "1",
    "two": "2",
    "three": "3",
    "four": "4",
    "five": "5"
	}
	*/
