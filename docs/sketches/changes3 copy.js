//Change
fetch('https://itmd-467-fp-web-app-express.azurewebsites.net/welcome?name=Dan')
.then(res => res.json())
.then(JSON => {
    document.getElementById("add").addEventListener("click",
    event => {
        document.getElementById("h").innerHTML = JSON.name;
    })
})

document.getElementById("add").addEventListener("click",
event => {
console.log(event.target.value)
})

