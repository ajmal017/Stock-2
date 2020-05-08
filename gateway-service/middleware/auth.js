const jwt = require('jsonwebtoken')

const auth = async (req, res, next) => {
    try {
        const token = req.headers.authorization
        if (!token) return res.sendStatus(401)
        console.log('token exists')

        const decodedToken = await jwt.verify(token, process.env.JWT_SECRET, {
            algorithms: "HS256",
            complete: true
        })

        console.log(decodedToken)


        if (decodedToken.header.alg !== "HS256") return res.sendStatus(401)
        req.body = { ...req.body, ...decodedToken.payload }
        console.log(req.body)

        next()

    } catch (error) {
        console.log(error)
        res.clearCookie("Authorization");
        return res.sendStatus(500)
    }
}

module.exports = auth