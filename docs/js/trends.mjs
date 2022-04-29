import API from './API.mjs'

var api = new API();

const apiUrl = 'https://itmd-467-fp-web-app-express.azurewebsites.net';
async function beginTrendLoad(){
    try{
    const response = await fetch(`${apiUrl}/findTrends?userId=42`);
    if(!response.ok) {
        throw new Error(`Failed to fetch posts: ${response.status}`);
    }
    return response.json();
}
    catch(e) {
    console.log(e);
}



    /*
    - Grab trendsHold
    - Call findTrends in api.
    - Create html element for each trend.
    - Add those elements to trendsHold.
    */

    const newEl = document.createElement("newEl");
    newEl.classList.add("trends");
    newEl.textContent = ("Hi");

    console.log('mid');

    const trendsContainer = document.getElementById("trendsHold");

    trendsContainer.appendChild(newEl);

    console.log(newEl.getAttribute("class"));

    console.log('end');
}


console.log("CheckpointC")
