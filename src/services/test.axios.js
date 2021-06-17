const axios = require('axios')

let responseData

axios.get('http://localhost:3000/projects')
  .then((response) => {
    responseData = response.data
  }).catch((err) => console.error(err))
  .finally(() => console.log(responseData))
