import dotenv from 'dotenv'
import Express from 'express'
import getRunType from './src/utils/GetRuntype.js'
import Api from './src/api.js'
import Scheduler from './src/scheduler/index.js'

/*
|--------------------------------------------------------------------------
| Bootstrap Microservice
|--------------------------------------------------------------------------
|
| Here you can bootstrap the microservice. Add any neccessary components
| to make the microservice operate properly.
|
| This is also where you define different runtypes.
|
*/
dotenv.config()

const runType = getRunType()

switch (runType) {
/**
 * Application Run Type
 */
case 'app': {
    const app = Express()
    const api = new Api(app)

    api.boot()

    app.listen(process.env.PORT, () => {
        console.log(`[API Service] Started Server at: ${process.env.HOST}:${process.env.PORT}`)
    })
    break
}

/**
 * Scheduler Run Type
 */
case 'scheduler': {
    const scheduler = new Scheduler()

    scheduler.boot()

    console.log('[Scheduler Service] Started Server')
    break
}

/**
 * Undefined Run Type
 */
default: {
    console.error(`Error starting run type: ${runType}. Available types are 'app' or 'scheduler'`)
    break
}
}
