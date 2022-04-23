fetch('https://itmd-467-fp-web-app-express.azurewebsites.net/welcome?name=Dan')
.then(res => res.json())
.then(JSON => {
    document.getElementById("editSource").addEventListener("click",
    event => {
        document.getElementById("h").innerHTML = JSON.name;
    })
})

document.getElementById("add").addEventListener("click",
event => {
console.log(event.target.value)
})


const data = { username: 'example' };

fetch('https://example.com/profile', {
  method: 'POST', // or 'PUT'
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(data),
})
.then(response => response.json())
.then(data => {
  console.log('Success:', data);
})
.catch((error) => {
  console.error('Error:', error);
});


var word = document.getElementById("label").value;

document.getElementById("test").addEventListener("click",
event => {
  
  document.getElementById("g").innerHTML
})