import API from './API.mjs'

var api = new API();

const apiUrl = 'https://itmd-467-fp-web-app-express.azurewebsites.net';


async function listPosts(postContainerElementId) {
    const postContainerElement = document.getElementById
        (postContainerElementId);

    if (!postContainerElement) {
        return;
    }

    const trends = await api.getTrend(JSON.parse(sessionStorage.getItem('userData')).id);

}

function postElement(trends) {

    const anchorElement = document.createElement('a');
    anchorElement.setAttribute('href', `${apiUrl}/findTrends?userId=42/${trends.id}`);
    anchorElement.setAttribute('target', '_blank.');

    const ostTitleElement = document.createElement('h4');
    postTitleElement.appendChild(anchorElement);

    return postTitleElement;
}

listPosts();
postElement();