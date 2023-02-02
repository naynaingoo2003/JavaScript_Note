//Array Filter
	let members = [
		{id: "1",name:"Nay Naing Oo", gender:"Male", email:"naynaingoo@gmail.com"},
		{id: "2",name:"May Thu", gender:"Female", email:"maythu77@gmail.com"},
		{id: "3",name:"Min Min", gender:"Male", email:"minmin789@gmail.com"},
		{id: "4",name:"Yan Naing Ko", gender:"Male", email:"yannaingoo@gmail.com"},
		{id: "5",name:"Ko Htet",gender:"Male", email:"kokohtet7@gmail.com"},
		{id: "6",name:"Myo Win", gender:"Male", email:"myowin1998@gmail.com"},
		{id: "7",name:"Thiha", gender:"Male", email:"thiha70@gmail.com"},
		{id: "8",name:"Chaw Chaw",  gender:"Female", email:"chaw@gmail.com"},
		];
	

	const isMale = (arrElement) =>{
		// arrElement is become object 
		return arrElement.gender === "Male";
	}

	let maleMember = members.filter(isMale);

	console.log(maleMember);
	/*
	Will output all gender:"Male" array element
	*/
