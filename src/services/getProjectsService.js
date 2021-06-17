const axios = require('axios')

export default {
  async getProjects () {
    const res = await axios.get('http://localhost:3000/projects').catch((err) => console.error(err))
    return res.data
  }
}
