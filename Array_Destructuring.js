/*Array Destructuring */

	//Create Array
	const userNames = ['Mg Mg','Ko Maung','Ma Aye','May'];

	let firstName = userNames[0]; //Mg Mg

	let lastName = userNames[userNames.length - 1]; //May

	// ES6
	const [userOne,userTwo,userThree,userFour] = userNames ;

	/*userOne,userTwo,userThree,userFour are become variable */
	const [userOne_1, ,userThree_3,userFour_4] = userNames; 
	/* 
	will skip index[1] emelemt 'Ko Maung' variable value
	*/
	console.log(userOne_1); //Mg Mg
