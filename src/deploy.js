const render = require('render');

const FRONTEND_ID = 'srv-cn0248ud3nmc73898oq0';
const API_KEY = 'rnd_lofeQiog8fgtwengsVsLwrnRsg6H';
const COMMIT_SHA = process.env.GITHUB_SHA;

render.deploy({
  serviceId: FRONTEND_ID,
  apiKey: API_KEY,
  gitCommit: COMMIT_SHA,
}).then(() => {
  console.log('Deployment successful!');
}).catch((error) => {
  console.error('Deployment failed:', error);
});
