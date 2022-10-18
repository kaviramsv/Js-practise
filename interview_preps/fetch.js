const fetch = require("node-fetch");
// import fetch from 'node-fetch'
// globalThis.fetch = fetch
const fetchPromise =
  fetch('https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json');

fetchPromise
  .then(response => respose.json())
  .then(data => console.log(data))
  .catch(err => console.log(err))