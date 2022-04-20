export default class API {

    constructor() {
        this.requestTimeout = 3000; //ms
    }

    /**
     * Example function for an async fetch request to a given url.
     * @param {*} url The url to fetch from
     * @returns data fetched from the url parameter
     */
    async basicFetchExample(url) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                fetch(url)
                    .then(response => response.json())
                    .then(data => resolve(data));
            }, this.requestTimeout);
        });
    }
}