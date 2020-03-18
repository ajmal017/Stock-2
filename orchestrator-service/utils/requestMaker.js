
const axios = require('axios')

const requestMaker = (url, data) => {
    const request = async () => await axios.post(url, data)
    return request
}

module.exports = requestMaker