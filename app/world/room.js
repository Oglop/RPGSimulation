const { copyObject } = require('../lib/utils')
const room = {
    x:0,
    y:0,
    description:'',
    biome: '',
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