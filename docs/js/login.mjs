import API from './API.mjs'

var api = new API();


const loginForm = document.getElementById("login_form");
loginForm.addEventListener('submit', event => {
    event.preventDefault();

    var email = document.getElementById("login_email_field").value;
    var password = document.getElementById("login_password_field").value;

    //Immediately-invoked anonymous async function
    (async () => {
        const output = await api.userLogin(email, password)
        //console.log(output);
        window.location.href = 'home.html';
    })();
});

