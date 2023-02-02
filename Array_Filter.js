	//Array Filter
	let members = [
		// naynaingoo object
		{id: "1",name:"Nay Naing Oo", gender:"Male", email:"naynaingoo@gmail.com"},
		// maythu object
		{id: "2",name:"May Thu", gender:"Female", email:"maythu77@gmail.com"},
		// minmin object
		{id: "3",name:"Min Min", gender:"Male", email:"minmin789@gmail.com"},
		// yannaingko object
		{id: "4",name:"Yan Naing Ko", gender:"Male", email:"yannaingoo@gmail.com"},
		// kohtet object
		{id: "5",name:"Ko Htet",gender:"Male", email:"kokohtet7@gmail.com"},
		// myowin object
		{id: "6",name:"Myo Win", gender:"Male", email:"myowin1998@gmail.com"},
		// thiha object
		{id: "7",name:"Thiha", gender:"Male", email:"thiha70@gmail.com"},
		// chaw object
		{id: "8",name:"Chaw Chaw",  gender:"Female", email:"chaw@gmail.com"},
		];
	

	const isMale = (arrElement) =>{
		// arrElement is become object 
		return arrElement.gender === "Male";
	}

	const isEmail = (arrEmail) =>{
		// arrEmail is become object 
		return arrEmail.email.length === 14;
	}
	/*
	arrow key function
	const isMale = arrElement => arrElement.gender === "Male";
	const isEmail = arrEmail =>arrEmail.email.length === 14; 
	*/

	let maleMember = members.filter(isMale);
	let emailMaleMember = members.filter(isEmail);

	console.log(maleMember);
	/*
	Will output all gender:"Male" array element
	*/
	console.log(emailMaleMember);
	/*
	will output chaw object 
	*/
