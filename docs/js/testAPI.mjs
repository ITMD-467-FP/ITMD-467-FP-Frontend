console.log("Test API!");
//This class is for testing the class in API.mjs along side development. It also serves as an example for other developers to follow. - Dan Tiberi

import API from './API.mjs'

var api = new API();


//Immediately-invoked anonymous async function
(async () => {
	//const output = await api.basicFetchExample("https://mysafeinfo.com/api/data?list=englishmonarchs&format=json");
    //console.log(output);

    const userData = await api.userLogin("dtiberi@hawk.iit.edu", "hunter123");
    console.log(userData);

    const sources = await api.getAllSources(userData.id);
    console.log(sources[0]);
    console.log("CheckpointA");

    console.log(userData.id);
    const search = await api.findTrends(userData.id);
    console.log(search); 
    console.log("CheckpointB")

        
    console.log("CheckpointC")

})();

