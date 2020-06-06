const { 
    ENUM_BIOMES, 
    ENUM_PERSONALITY_TRAITS, 
    ENUM_LANGUAGES, 
    ENUM_RACE_NAMES, 
    ENUM_SEASONS,
    ENUM_EVENT_TYPE
} = require('../../constants')
const { getSeason } = require('../../world/time')
const restEvents = require('./restEvents')

/**
 * 
 * @param {object} party 
 * @param {object} date 
 * @param {ENUM_EVENT_TYPE} eventType 
 * @param {ENUM_BIOMES} biome 
 */
const rollEvent = (party, date, eventType, biome) => {
    if (eventType === ENUM_EVENT_TYPE.restEvent) {
        const i = Math.floor( 1 + Math.random() * 100)
        switch (i) {
            case 1: restEvents.darkNight(party); break;
            case 2: restEvents.perfectSleep(party); break;
        }
    }
    return
}

module.exports = {
    rollEvent
}