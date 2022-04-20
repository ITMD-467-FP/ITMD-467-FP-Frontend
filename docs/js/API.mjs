export default class API {

    constructor() {}

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
}