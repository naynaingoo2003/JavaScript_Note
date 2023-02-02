/*Object Destructuring */
	// create number object
	const number = {
		one : '1',
		two : '2',
		three : '3',
		four : '4',
		five : '5'
	};
	let numberOne = number.one; //1

	let numberLength = number.length; //undefined "It is not array"

	//EC6 JS
	const {one , two , three, four, five } = number ; //Now,become variable

	console.log(two,three); //2 3
