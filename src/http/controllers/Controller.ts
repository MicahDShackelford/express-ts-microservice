import { Router } from 'express'

/**
 * ============================================================
 *  Base Controller
 * 
 *  All the shared controller functionality is stored here
 * ============================================================
 */

export default abstract class Controller  {
    public router: Router = Router()

    constructor() {}
}
