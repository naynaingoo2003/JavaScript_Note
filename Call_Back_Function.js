	// call back function
	const myDataOne = (callback) =>{
		console.log('header here');

		callback(); //footer here!

		console.log('Body here');	
	}
	// global scope funtion
	const myDataThree = () =>{

		// local scope funtion
		const myDataTwo = () =>{
		console.log('footer here!');
	}
		myDataOne(myDataTwo);
	}
		myDataThree();
	/*
	Program Output ->
					header here
					footer here!
					Body here
	*/
