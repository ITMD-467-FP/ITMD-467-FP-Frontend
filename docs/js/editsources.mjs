import API from './API.mjs'

var api = new API();

(async () => {
	//const output = await api.basicFetchExample("https://mysafeinfo.com/api/data?list=englishmonarchs&format=json");
    //console.log(output);
    const userData = await sessionStorage.getItem("userData");
    const jsonUserData = JSON.parse(userData)
    console.log(userData);
    console.log(jsonUserData)



})();