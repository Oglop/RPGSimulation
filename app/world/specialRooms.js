const { ENUM_EXPLORE_STATUS, ENUM_BIOMES } = require('../constants')
const {} = require('../simulation/events/cityEvents')
const { copyObject } = require('../lib/utils')
const room = {
    x: 0,
    y: 0,
    description: '',
    biome: '',
    skillChecks: [],
    event: [],
    environment: {}
}

const getSpecialRoom = (X, Y) => {
    if (X === 3 && Y === 11) {
        const r = tegea(copyObject(room))

    }

    return undefined
}

const tegea = room => {
    room.biome = ENUM_BIOMES.city
    room.x = 3
    room.y = 11
    room.description = 'The town of Tegea lies by Sillos lake. Narrow streets makes a maze between small white houses stretching all the way down to the harbour district. The governors castle is located on a cliff on the east side overseing the lake.'

    return room
}

module.exports = {
    getSpecialRoom
}

