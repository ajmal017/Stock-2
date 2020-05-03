const jwt = require('jsonwebtoken')

const auth = async (req, res, next) => {
    try {
        const token = req.cookies.Authorization
        if (!token) return res.sendStatus(401)

        const decodedToken = await jwt.verify(token, process.env.JWT_SECRET, {
            algorithms: "HS256",
            complete: true
        })

        if (decodedToken.header.alg !== "HS256") return res.sendStatus(401)
        req.body = { ...req.body, ...decodedToken.payload }

        next()

    } catch (error) {
        res.clearCookie("Authorization");
        return res.sendStatus(500)
    }
}

module.exports = auth