import { Router } from 'express'

/*
|--------------------------------------------------------------------------
| Base Controller
|--------------------------------------------------------------------------
|
| Here we will set up the base controller instance. This will house all
| shared functionality among all the controllers.
|
*/

export default abstract class Controller  {
    public router: Router = Router()

    constructor() {}
}
