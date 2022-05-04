   
import API from './API.mjs'

var api = new API();

 /*
    - Takes extedned information from the Find Trends 
      and displays it on the more info page with Trending Term, Source, and Statistics.
    */

fetch('https://www.cnbc.com/id/100727362/device/rss/rss.html')
  .then((response) => {
    if (response.ok) {
      return response.json();
    } else {
      throw new Error("NETWORK RESPONSE ERROR");
    }
  })
  .then(data => {
    console.log(data);
    displayCocktail(data)
  })
  .catch((error) => console.error("FETCH ERROR:", error));