export default function getRunType ():string {
    const arg = process.argv.find(arg => arg.includes('runtype'))
    return arg.replace('--runtype=', '')
}
