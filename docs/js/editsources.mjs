import API from './API.mjs'

var api = new API();

(async () => {
    const userData = await sessionStorage.getItem("userData");
    const jsonUserData = JSON.parse(userData)

    const sources = await api.getAllSources(jsonUserData.id);

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