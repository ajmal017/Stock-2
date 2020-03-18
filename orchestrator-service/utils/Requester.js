const axios = require('axios')


class GetData {
    constructor() { }
    async post(url, data) {
        try {
            const res = await axios.post(url, data)
            return res.data
        } catch (error) {
            throw error
        }
    }
    async get(url) {
        try {
            const res = await axios.get(url)
            return res.data
        } catch (error) {
            throw error
        }
    }
    async multiplePost(requests) {
        try {
            const res = await axios.all(requests)
            return res.data
        } catch (error) {
            throw error
        }
    }
}

module.exports = GetData