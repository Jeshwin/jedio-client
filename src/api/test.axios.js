const axios = require('axios')

let responseData

axios.get('http://localhost:3000/projects')
  .then((response) => {
    console.log(response.data)
    responseData = response.data
  }).catch((err) => console.error(err))
  .finally(() => console.log(responseData))
