const gateway = require('fast-gateway')
const authentication = require('express-jwt')

// const midd = (req, res, next) => {
//     console.log(req)
//     return next()
// }



const server = gateway({
    routes: [{
        prefix: '/api/service/calculator',
        target: `http://${process.env.calculator}:80`,
        middlewares: [(req, res, next) => {
            console.log(req)
            return next()
        }]
    }]
})


const PORT = process.env.PORT || 80
server.start(PORT).then(server => {
    console.log(`API Gateway listening on ${PORT} port!`)
})
