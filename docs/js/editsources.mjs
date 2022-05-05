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
        let kei = String(Object.keys(sources)[i])
        console.log(kei)

        let url = sources[kei].url
        console.log(url)

        const el = document.createElement("element");
        el.classList.add("container2");
        el.textContent = ([i] + " " + url)

        const holder = document.getElementById("sourcesHold");

        holder.appendChild(el);

    }

})();