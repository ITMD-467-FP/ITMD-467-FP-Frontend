console.log("Test API!")

import API from './API.mjs'
var api = new API();

(async () => {
  const output = await api.basicFetchExample('https://itmd-467-fp-web-app-express.azurewebsites.net/userLogin');
  console.log(output);

})();
