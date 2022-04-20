export default class API {

    constructor() {
        this.cloudUrl = "https://itmd-467-fp-web-app-express.azurewebsites.net";
    }

    /**
     * Example function for an async fetch request to a given url.
     * @param {*} url The url to fetch from
     * @returns data fetched from the url parameter
     */
    async basicFetchExample(url) {
        return new Promise((resolve, reject) => {
            fetch(url)
                .then(response => response.json())
                .then(data => resolve(data));
        });
    }

    /**
     * Returns the user's app_user row upon successful login. Stores this data in session storage under the key "userData".
     * Returns false if the login is invalid. 
     * @param {*} email 
     * @param {*} password 
     */
    async userLogin(email, password){
        return new Promise((resolve, reject) => {
            fetch(this.cloudUrl+`/userLogin?email=${email}&password=${password}`)
                .then(response => response.json())
                .then(data => {
                    if(data.hasOwnProperty('error'))//Invalid login.
                    {
                        console.log(data.error);
                        return false;
                    }
                    else{
                        sessionStorage.setItem('userData', data);
                        resolve(data);
                    }
                });
        });
    }
}

