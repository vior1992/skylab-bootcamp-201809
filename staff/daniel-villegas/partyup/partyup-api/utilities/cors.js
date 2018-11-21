function cors(req, res, next) {
    res.set({
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'Content-Type, Authorization',
        'Access-Control-Allow-Methods': 'DELETE, PUT, PATCH'
        // 'Access-Control-Allow-Origin': 'http://localhost:3000'

    })

    next()
}

module.exports = cors