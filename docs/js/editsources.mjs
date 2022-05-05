import API from './API.mjs'

var api = new API();

(async () => {
	//const output = await api.basicFetchExample("https://mysafeinfo.com/api/data?list=englishmonarchs&format=json");
    //console.log(output);
    const userData = await sessionStorage.getItem("userData");
    const jsonUserData = JSON.parse(userData)
    console.log(userData);
    console.log(jsonUserData)

    const sources = await api.getAllSources(jsonUserData.id);
    console.log(sources);
    console.log("CheckpointA");

    for (let i = 0; i < Object.keys(sources).length; i ++)
    {
        var kei = String(Object.keys(sources)[i])
        console.log(kei)

        let url = sources[kei].url
        console.log(url)

        const el = document.createElement("element");
        el.classList.add("container2");
        el.textContent = (parseInt([i]) + 1 + " " + url + "")

        const holder = document.getElementById("sourcesHold");

        let btn = document.createElement("button")
        btn.innerHTML = "Delete"
        let sourceID = sources[kei].id
        let userID = jsonUserData.id

        btn.onclick = function () {
            console.log("Source ID: " + sourceID);
            console.log("User ID: " + userID);
        };

        holder.appendChild(el);
        holder.appendChild(btn);

    }

})();