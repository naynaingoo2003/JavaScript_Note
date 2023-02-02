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
	
	// strat for loop
	for (i=0; i < members.length; i++){
		// members arry -> object -> name {poroperty_name}
		let memberName = members[i].name ;
		// members arry -> object -> gender {poroperty_name}
		let memberGender = members[i].gender ;
		// Will skip id: "3",name:"Min Min", 
		if (i === 2 ) {
			continue;
		}
		console.log(memberName);
	}
