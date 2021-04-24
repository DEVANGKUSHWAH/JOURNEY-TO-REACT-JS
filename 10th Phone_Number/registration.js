function alphanumeric(inputtext) {
	var letters = /^[0-9a-zA-Z]+$/;
	if (inputtext.value.match(letters)) {
		alert('Your registartion number have accepted :: You can try another');
		socument.form1.text1.focus();
		return true;
	} else {
		alert('Please input alphanumeric number');
		return false;
	}
}
