import Cron from 'node-cron'

/*
|--------------------------------------------------------------------------
| Scheduler
|--------------------------------------------------------------------------
|
| Here we setup the sceduled functionality. Using the 'schedule'
| functionality we can define functionality that will be executed based
| on the crontab expression that you define
|
*/

export default class Scheduler {
    private cron:any

    constructor () {
        this.cron = Cron
    }

    public boot () {
        this.cron.schedule('* * * * *', () => {
            console.log('Example Scheduled Event')
        })
    }
}
