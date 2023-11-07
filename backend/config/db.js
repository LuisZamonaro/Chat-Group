const mongoose = require("mongoose")

// connection

const dbUser = process.env.DB_USER

const dbPassword = process.env.DB_PASSWORD

const conn = async () => {
    try {
        
        const dbConn = await mongoose.connect(`mongodb+srv://${dbUser}:${dbPassword}@cluster0.6def1i0.mongodb.net/`)

        console.log('Conectou ao banco!')

        return dbConn

    } catch (error) {
        console.log(error)
    }
}

conn()

module.exports == conn