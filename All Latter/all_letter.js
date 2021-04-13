function allLetter(inputtxt)
{
    var letters = /^[A-Za-z]+$/;
    if(inputtxt.value.match(letters))
    {
        alert('your name have accepted : you can try another');
        return true;
    }
    else
    {
        alert('Please inpute alphabet cheracters only');
        return false;
    }
}