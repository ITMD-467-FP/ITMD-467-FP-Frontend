import API from './API.mjs'

var api = new API();

const apiUrl = 'https://itmd-467-fp-web-app-express.azurewebsites.net';
async function beginTrendLoad(){
    try{
    const response = await fetch(`${apiUrl}/findTrends?userId=42`);
    if(!response.ok) {
        throw new Error(`Failed to fetch posts: ${response.status}`);
    }
    return response.json();
}
    catch(e) {
    console.log(e);
}



    /*
    - Grab trendsHold
    - Call findTrends in api.
    - Create html element for each trend.
    - Add those elements to trendsHold.
    */
}

function listPosts(postContainerElementId) {
const postContainerElement = document.getElementById
(postContainerElementId);

if(!postContainerElement){
    return;
}

beginTrendLoad()
.then((posts) => {
if (!posts) {
    postContainerElement.ineerHTML = 'No posts';
    return;

}
for (const trends of posts) {
    postContainerElement.appendChild(postElement(post));
}
})

.catch((e) => {
    console.log(e);
});

}

function postElement(trends){
    const anchorElement = document.createElement('a');
    anchorElement.setAttribute('href', `${apiUrl}/findTrends?userId=42/${trends.id}`);
    anchorElement.setAttribute('target', '_blank.');

    const ostTitleElement = document.createElement('h3');
    postTitleElement.appendChild(anchorElement);

    return postTitleElement;
}
