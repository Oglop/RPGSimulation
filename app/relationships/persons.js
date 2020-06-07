const { copyObject } = require('../lib/utils')
const person = {
    points: 0,
    id:''
}

const getKnownPersonObject = id => {
    const p = copyObject(person)
    p.id = id
    return p
}

module.exports = {
    getKnownPersonObject
}