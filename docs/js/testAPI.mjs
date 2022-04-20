console.log("Test API!");
//This class is for testing the class in API.mjs along side development. It also serves as an example for other developers to follow. - Dan Tiberi

import API from './API.mjs'

var api = new API();


//Immediately-invoked anonymous async function
(async () => {
	const output = await api.basicFetchExample("https://mysafeinfo.com/api/data?list=englishmonarchs&format=json");
    console.log(output);
})();

