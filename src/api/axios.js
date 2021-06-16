const axios = require('axios')

let projects = []

axios.get('http://localhost:3000/projects')
  .then((response) => {
    projects = response.data
  })
  .catch((err) => console.error(err))
  .finally(() => {
    module.exports = projects
  })

module.exports = projects
