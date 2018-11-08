const { MongoClient } = require('mongodb')

const MONGO_URL = 'mongodb://localhost:27017'

const client = new MongoClient(MONGO_URL, { useNewUrlParser: true })

client.connect(err => {
    if (err) throw err

    const db = client.db('skylab')

    const users = db.collection('users')

    // users.insertOne({ name: 'Ele', surname: 'Fante'}, (err, res) => {
    //     if(err) throw err

    //     debugger
    // })

    users.find().toArray()
        .then(users => {
            debugger

            console.log(users)
        })

    client.close()
})