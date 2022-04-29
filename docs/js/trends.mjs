import API from './API.mjs'

var api = new API();

function beginTrendLoad(){
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