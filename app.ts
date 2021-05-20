import dotenv from 'dotenv'
import express from 'express'
import Api from './src/api.js'

dotenv.config()

const app = express()
new Api(app)

app.listen(process.env.PORT, () => {
    console.log(`[Service] Started Server at: ${process.env.HOST}:${process.env.PORT}`)
})
