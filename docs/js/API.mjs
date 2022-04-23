export default class API {

    /*
    Example POST request
    https://stackoverflow.com/questions/29775797/fetch-post-json-data

    fetch(url, {
        method: 'POST',
        headers: {
            [userId]: JSON.parse(sessionStorage.getItem('userData')).current_secret_token
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            a: 1,
            b: 'Textual content'
        })
    });
    */

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
    async userLogin(email, password) {
        return new Promise((resolve, reject) => {
            fetch(this.cloudUrl + `/userLogin?email=${email}&password=${password}`)
                .then(response => response.json())
                .then(data => {
                    if (data.hasOwnProperty('error')) //Invalid login.
                    {
                        console.log(data.error);
                        return false;
                    } else {
                        sessionStorage.setItem('userData', JSON.stringify(data));
                        resolve(data);
                    }
                });
        });
    }

    /**
     * Calls the getAllSources request. Promise rejected if user is not logged in. 
     * @param {*} userId 
     * @returns Json array of source entries.
     */
    async getAllSources(userId) {
        if (typeof userId === 'string' || userId instanceof String){
            userId = parseInt(userId);
        }
        return new Promise((resolve, reject) => {
            if (typeof (sessionStorage.getItem("userData")) == 'undefined' || sessionStorage.getItem("userData") == null) {//If not logged in
                reject();
            } else {
                fetch(this.cloudUrl + `/getAllSources?userId=${userId}`, {
                        method: 'GET',
                        headers: {
                            [userId]: JSON.parse(sessionStorage.getItem('userData')).current_secret_token,  //Authentication 
                            'Accept': 'application/json',
                            'Content-Type': 'application/json'
                        },
                    })
                    .then(response => response.json())
                    .then(data => {
                        resolve(data);
                    });
            }
        });
    }

    /**
     * Uses FormData API
     * @param {*} event 
     */
    async handleSubmit(event) {
        event.preventDefault();
      
        const data = new FormData(event.target);
      
        /*return a plain Javascript Object which is compatible with JSON.stringify*/
        const value = Object.fromEntries(data.entries());
      
        console.log({ value });
      }


      async addSource(userId) {
        if (typeof userId === 'string' || userId instanceof String){
            userId = parseInt(userId);
        }
        
        const data = { username: 'Rey' };

        return new Promise((resolve, reject) => {
            if (typeof (sessionStorage.getItem("userData")) == 'undefined' || sessionStorage.getItem("userData") == null) {//If not logged in
                reject();
            } else {
                fetch(this.cloudUrl + 'addSource', {
                        method: 'POST',
                        headers: {
                            [userId]: JSON.parse(sessionStorage.getItem('userData')).current_secret_token,  //Authentication 
                            'Accept': 'application/json',
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify(data),
                    })
                    .then(response => response.json())
                    .then(data => {
                        resolve(data);
                    });
            }
        });
    }

}