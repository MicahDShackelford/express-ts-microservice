import dotenv from 'dotenv'
import express from 'express'
import Api from './src/api.js'
import Scheduler from './src/scheduler/index.js'

dotenv.config()

if(process.argv.find(arg => arg.includes('runtype')).includes('app')) {
    const app = express()
    new Api(app)
    
    app.listen(process.env.PORT, () => {
        console.log(`[API Service] Started Server at: ${process.env.HOST}:${process.env.PORT}`)
    })
}

else if (process.argv.find(arg => arg.includes('runtype')).includes('scheduler')) {
    new Scheduler()

    console.log(`[Scheduler Service] Started Server`)
}