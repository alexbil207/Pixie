// Export functions
export const utilService = {
    makeId,
    getHumanTime,
}

// Define makeId() - creates random id in the length given (25 is default) 
function makeId(length = 25) {
    var id = ''
    var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'

    for (let i = 0; i < length; i++) {
        id += possible.charAt(Math.floor(Math.random() * possible.length))
    }

    return id
}

// gets timestamp, return human time

function getHumanTime(time) {
    const date = new Date(time);
    if (Date.now() - time < 86400000) return `${date.getHours() < 10 ? '0' + date.getHours() : date.getHours()}:${date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes()}`
    else if (Date.now() - time < 31556952000) return `${date.getDate()} ${date.toLocaleString('default', { month: 'short' })}`
    else return `${date.toLocaleString('default', { month: 'short' })} ${date.getFullYear()}`
}