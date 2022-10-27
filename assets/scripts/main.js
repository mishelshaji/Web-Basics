function validate(e) {  
    e.preventDefault();
    var nameValue = document.forms['loginform']['name'].value;
    if(nameValue.length <= 2) {
        document.getElementById('name').style.borderColor = 'red';
        document.getElementById('error-name').innerText = "Invalid Name";
    }
}
