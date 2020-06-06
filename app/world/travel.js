const { room } = require('../world/factorys/roomFactory')
const { echo } = require('../lib/utils')
const { ENUM_EXPLORE_DIR } = require('../constants')
/**
 * 
 * @param {object} party 
 * @param {array} grid 
 */
const move = (party) => {
    const dir = party.journey[0]
    if (dir !== undefined) {
        if (dir === ENUM_EXPLORE_DIR.north) {
            echo(`The party is traveling north`)
            party.location[0] -= 1
        } else if (dir === ENUM_EXPLORE_DIR.east) {
            echo(`The party is traveling east`)
            party.location[1] += 1
        } else if (dir === ENUM_EXPLORE_DIR.south) {
            echo(`The party is traveling south`)
            party.location[0] += 1
        } else if (dir === ENUM_EXPLORE_DIR.west) {
            echo(`The party is traveling west`)
            party.location[1] -= 1
        }
        party.journey.shift()
    } else {
        throw new Error('new location undefined')
    }
    return party
}

module.exports = {
    move
}
