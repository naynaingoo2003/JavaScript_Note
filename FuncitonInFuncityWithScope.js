const numberTestWithScope = () => {
		var number = 9 ;

		if (number == 9) {
			// GolbalScope
			a = 1 ;
			var b = 2;
			// LocalScope
			let c = 3;
			const d = 4;
		}

		console.log(a); //1
		console.log(b); //2
		
		console.log(c); //error
		console.log(d); //error

		// Created internalFunction 
		const internalFunction = () =>{
			console.log(a); //1
			console.log(b); //2

			console.log(c); //error
			console.log(d); //error
		}
		// return internalFunction
		internalFunction();

	}
	numberTestWithScope();
