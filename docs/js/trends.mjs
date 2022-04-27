import API from './API.mjs'

var api = new API();

console.log("trends.mjs");

/*
- Grab trendsHold
- Call findTrends in api.
- Create html element for each trend.
- Add those elements to trendsHold.
*/

(async () => {
    const output = await api.findTrends(JSON.parse(sessionStorage.getItem('userData')).id);
    console.log(output);
    //resolve(output);
})();

