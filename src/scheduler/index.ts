import cron from 'node-cron'

cron.schedule('* * * * *', () => {
    console.log('Example Scheduled Event')
})
