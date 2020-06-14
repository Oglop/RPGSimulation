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
        return r
    } else if (X === 14 && Y === 16) {
        const r = undradale(copyObject(room))
        return r
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

const undradale = room => {
    room.biome = ENUM_BIOMES.city
    room.x = 14
    room.y = 16
    room.description = 'The town of Undradale. This is the last outpost for merchant caravans trading with Zetes in the south and the Rooguan empire in the east. Low clay houses protects the citizens from the sandstorms from the dessert.'

    return room
}

module.exports = {
    getSpecialRoom
}

