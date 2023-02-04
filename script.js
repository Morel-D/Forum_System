var loginBtn = document.querySelector('#Logbtn');
var loginForm = document.forms['inputForm'];


var EmailForm = loginForm.querySelector('#email');
var PasswordForm = loginForm.querySelector('#password');

loginBtn.addEventListener('click', function(item){
    item.preventDefault();
    var Email = loginForm.querySelector('#email').value;
    var Password = loginForm.querySelector('#password').value;

    if(Email == "" && Password == "")
    {
        PasswordForm.style.borderColor = 'red';
        EmailForm.style.borderColor = 'red';
    }else if(Email == "") 
    {
        EmailForm.style.borderColor = 'red';
    }else if(Password == "")
    {
        PasswordForm.style.borderColor = 'red';
    }else {
        alert('okay bro');
    }
})
