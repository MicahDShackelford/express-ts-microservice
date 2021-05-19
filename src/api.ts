import express, { Request, Response } from 'express'
import * as ExampleController from './http/controllers/ExampleController.js'

const router = express.Router()

router.use(express.json())

router.get('/health', function (request: Request, response: Response) {
    response.send('Ok')
})

router.get('/example-route', ExampleController.index)

export default router
