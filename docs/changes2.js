function submitInfo(){
    let form = document.forms["myForm"];
    let fd = new FormData(form);
    let data = {};
    for (let [key, prop] of fd) {
      data[key] = prop;
    }
    VALUE = JSON.stringify(data, null, 2);
    console.log(VALUE);
    
    
    fetch('http://example_website/api/login', {
        method: 'POST',
        body: VALUE
    })
    
    .then(data => data.json())
    .then(data =>  { console.log(data) }) 
    .catch((err) => {
        console.error(err);
    })
    
    }