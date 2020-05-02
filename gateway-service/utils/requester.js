const axios = require('axios')

class Requester {
    constructor() {
        this.requester = axios
    }

    async post(req, res, URL, API) {
        try {
            const data = req.body
            const response = await this.requester.post(
                `${URL}${API}`,
                data,
                { headers: req.headers })
            console.log(response)
            res.headers = { ...response.headers }
            return res.send()
        } catch (error) {
            console.log(URL, API, 'failed', error)
            return res.status(500).json({ message: error })
        }
    }

    async get(req, res, URL, API) {
        try {
            const response = await this.requester.post(`${URL}${API}`, { headers: req.headers })
            res.cookie = response.cookie
            return res.send(response)
        } catch (error) {
            console.log(URL, API, 'failed')
            return res.status(500).json({ message: error })
        }
    }

}

module.exports = Requester