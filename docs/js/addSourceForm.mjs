import API from './API.mjs'

var api = new API();

const addSourceForm = document.getElementById("add_source_form");
addSourceForm.addEventListener('submit', event => {
    event.preventDefault();

    var url = document.getElementById("add_source_url_field").value;
    
    if(url === "")
    {
        window.alert("Empty input, try again")
        window.location.href = 'addsource.html';
    }
    
    var userId = JSON.parse(sessionStorage.getItem('userData')).id;
    
    //Immediately-invoked anonymous async function
    (async () => {
        const output = await api.addSource(userId, url);
        //console.log(output);
        window.location.href = 'home.html';
    })();
});

