import API from './API.mjs'

var api = new API();

(async () => {
    const userData = await sessionStorage.getItem("userData");

    const jsonUserData = JSON.parse(userData)

    const sources = await api.getAllSources(jsonUserData.id);

    const search = await api.findTrends(jsonUserData.id);

    for (let i = 0; i < 30; i ++){

        if(isNaN(Object.keys(search)[i])){
            
            let kei = String(Object.keys(search)[i]);

            let count = search[kei].count;

            let url = search[kei].sources;

            const el = document.createElement("element");
            el.classList.add("trends");
            el.textContent = ("Term: " + "\'" + String(kei) + "\' " +  " ," + " Count: " + count 
            + " , " + " URLS: " + url);

            const holder = document.getElementById("trendsHold");

            holder.appendChild(el);
        }
        else {

        }
    }
    
})();
