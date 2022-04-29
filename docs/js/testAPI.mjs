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


    const trends = beginTrendLoad();

    console.log(sources[0].id);
    console.log(search.gas.count);
    console.log(Object.keys(search).length);
    console.log(Object.keys(search)[0]);
    console.log(userData.id);
    console.log("CheckpointC");


    for (let i = 0; i < 20; i ++){

        let kei = String(Object.keys(search)[i]);
        console.log(kei);

        let count = search[kei].count;
        console.log(count);

        let url = search[kei].sources;
        console.log(url);

        const el = document.createElement("element");
        el.classList.add("trends");
        el.textContent = (String(kei) + "\t" + count + "\t" + url);
        console.log(el.textContent);
        console.log("mid point");
        
        console.log(el.getAttribute("class"));

        const holder = document.getElementById("trendsHold");
        
        holder.appendChild(el);
    }
    


})();

