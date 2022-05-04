import API from './API.mjs'

var api = new API();

(async () => {
	//const output = await api.basicFetchExample("https://mysafeinfo.com/api/data?list=englishmonarchs&format=json");
    //console.log(output);
    //const userData = await api.userLogin("rey3@gmail.com", "secure");
    const userData = await sessionStorage.getItem("userData");
    const jsonUserData = JSON.parse(userData)
    console.log(userData);
    console.log(jsonUserData)

    const sources = await api.getAllSources(jsonUserData.id);
    console.log(sources[0]);
    console.log("CheckpointA");

    console.log(jsonUserData.id);
    const search = await api.findTrends(jsonUserData.id);
    console.log(search); 
    console.log("CheckpointB")




    console.log("CheckpointC");


    for (let i = 0; i < 30; i ++){

        if(isNaN(Object.keys(search)[i])){
            
            let kei = String(Object.keys(search)[i]);
            console.log("Key: " + kei);

            let count = search[kei].count;
            console.log("Count: " + count);

            let url = search[kei].sources;
            console.log("Urls: " + url);

            const el = document.createElement("element");
            el.classList.add("trends");
            el.textContent = ("Term: " + "\'" + String(kei) + "\' " +  " ," + " Count: " + count 
            + " , " + " URLS: " + url);

            console.log(el.getAttribute("class"));

            const holder = document.getElementById("trendsHold");

            holder.appendChild(el);
        }
        else {

        }
    }
    
})();