import { Request, Response } from 'express'
import Controller from './Controller.js'

export default class ExampleController extends Controller {
    constructor() {
        super()
    }

    public index(request: Request, response: Response) {
        response.send('Hello World')
    }
}
