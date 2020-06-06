const { copyObject } = require('../lib/utils')
const { ENUM_SKILL_NAMES } = require('../constants')
const room = {
    x:0,
    y:0,
    description:'',
    biome: '',
    skillChecks: [],
    event: [],
    environment: {}
}
/**
 * returns a room with coordinates
 * @param {int} x 
 * @param {int} y 
 */
const getRoom = (x, y) => {
    const r = copyObject(room)
    r.x = x
    r.y = y
    return r
}


module.exports = {
    room, getRoom
}