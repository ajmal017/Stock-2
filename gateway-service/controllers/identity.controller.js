const axios = require('axios')
const { IDENTITY_SERVICE } = process.env


exports.getGoogle = async (req, res) => {
    try {
        console.log('identity service in gateway')
        const response = await axios.get(`${IDENTITY_SERVICE}/google`)
        console.log('response from identity')
        return response
    } catch (error) {
        console.log('error in identity logged in gateway')
    }
}
