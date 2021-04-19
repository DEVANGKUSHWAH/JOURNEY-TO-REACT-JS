function required() {
	var empt = document.forms['form1']['text1'].value;
	if (empt == '') {
		alert('please input a value');
		return false;
	} else {
		alert('code has accepted: You can try another ');
		return true;
	}
}
