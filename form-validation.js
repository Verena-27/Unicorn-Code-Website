function formValidation(){ 


	var name = document.registration.name;
	var age = document.registration.age;
	var gender = document.registration.genderRadio;
	var email = document.registration.email;
	var laptop = document.registration.laptop;
	var interest = document.registration.descr;
	var note = document.registration.note;

	const linebreak = `%0D%0A`;
	var subj = `${name.value} Anmeldung Unicorns`;
	var mailbody = `Name: ${name.value}${linebreak}
	Alter: ${age.value}${linebreak}
	Identifikation als FINTA*: ${gender.value}${linebreak}
	Email: ${email.value}${linebreak}
	Interesse an: ${interest.value}${linebreak}
	Bemerkungen: ${note.value}`;
	window.location.href = `mailto:anmeldung@unicornsco.de?subject=${subj}&body=${mailbody}`;
	return true;
	
	//Laptop: ${laptop.value}${linebreak}
	
	/*var name = document.registration.name;
	var age = document.registration.age;
	var gender = document.registration.gender;
	var email = document.registration.email;
	var laptop = document.registration.laptop;
	var interest = document.registration.desc;
	var note = document.registration.note;

	if(allLetter(name)){
		if(allnumeric(age)){
			if(genderselect(gender)){
				if(validateEmail(email)){
					if(validateText(laptop)){
						if(validateText(desc)){
							if(validateText(note)){
								window.location.href = "mailto:anmeldung@unicornsco.de";
								return true;
							}
						}
					}
				}
			}
		}
	}
	return false;*/
} 


function allLetter(textInput){ 
	var letters = /^[A-Za-z]+$/;
	if(textInput.value.match(letters)){
		return true;
	}else{
		alert('Darf nur aus Buchstaben bestehen.');
		textInput.focus();
		return false;
	}
}


function allnumeric(numInput){ 
	var numbers = /^[0-9]+$/;
	if(numInput.value.match(numbers)){
		return true;
	}else{
		alert('Darf nur aus Zahlen bestehen.');
		numInput.focus();
		return false;
	}
}


function genderselect(genderInput){
	if(genderInput.value == "Default"){
		alert('Bitte gib etwas an.');
		genderInput.focus();
		return false;
	}
	return true;
}


function validateEmail(mailInput){
	var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
	if(mailInput.value.match(mailformat)){
		return true;
	}else{
		alert("Ungültige Email.");
		mailInput.focus();
		return false;
	}
} 


function validateText(textInput){
	if(textInput == ""){
		alert("Bitte gib etwas an.");
		textInput.focus();
		return false;
	}
	return true;
}
