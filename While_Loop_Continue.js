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
	
	let i = 0;
	while (i < members.length) {
		let memberName = members[i].name;
		let memberGender = members[i].gender;
		//exit condition
		i++;
		if (memberGender == "Female") {
			//to skip
			continue;
		}
		//output
		console.log(`${memberName} is ${memberGender}.`);
		/*
		Nay Naing Oo is Male.
		Min Min is Male.
		Yan Naing Ko is Male.
		Ko Htet is Male.
		Myo Win is Male.
		Thiha is Male.
		*/
	}
