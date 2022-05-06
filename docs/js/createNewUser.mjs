import API from './API.mjs'

var api = new API();


const loginForm = document.getElementById("signup_form");
loginForm.addEventListener('submit', event => {
    //console.log("newUser");
    event.preventDefault();

    var email = document.getElementById("signup_form_email").value;
    var password = document.getElementById("signup_form_password").value;
    var fname = document.getElementById("signup_form_fname").value;
    var lname = document.getElementById("signup_form_lname").value;

    //Immediately-invoked anonymous async function
    (async () => {
        const output = await api.newUser(email, password, fname, lname);
        console.log(output);
        window.location.href = 'index.html';
    })();
});

