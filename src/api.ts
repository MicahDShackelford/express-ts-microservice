import Express, {Router} from 'express'

export default class Api {
    public router: any

    constructor (app: any) {
        this.router = Router()
        app.use('/api', this.router)
        this.router.use(Express.json())
    }

    public async boot () {
        this.router.get('/example-route', await this.apiMethod('ExampleController.index'))
    }

    /**
     * @param slug Api Method slug with format: [CONTROLLER_NAME].[METHOD_NAME]
     * @returns The requested method
     */
    public async apiMethod (slug:string):Promise<any> {
        const split = slug.split('.')
        const controllerName = split[0]
        const methodName = split[1]

        const controllerImport = await import(`./http/controllers/${controllerName}.js`)
        const Controller = new controllerImport.default() // eslint-disable-line

        return Controller[methodName]
    }
}
