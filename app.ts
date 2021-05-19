import dotenv from 'dotenv'
import express from 'express'
import api from './src/api.js'

dotenv.config()

const app = express()

app.use('/api', api)

app.listen(process.env.PORT, () => {
    console.log(`[Service] Started Server at: ${process.env.HOST}:${process.env.PORT}`)
})
