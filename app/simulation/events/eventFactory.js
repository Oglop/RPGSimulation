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
const travelEventsPlains = require('./travelEventsPlains')

/**
 * 
 * @param {object} party 
 * @param {object} date 
 * @param {ENUM_EVENT_TYPE} eventType 
 * @param {ENUM_BIOMES} biome 
 */
const rollEvent = (party, date, eventType, biome, runId) => {
    if (eventType === ENUM_EVENT_TYPE.restEvent) {
        const i = Math.floor( 1 + Math.random() * 100)
        switch (i) {
            case 0: restEvents.darkNight(party, runId); break;
            case 2: restEvents.perfectSleep(party, runId); break;
            case 3: restEvents.storyTime(party, runId); break;
            case 4: restEvents.traveler(party, runId); break;
        }
        return
    }
    
    if (eventType === ENUM_EVENT_TYPE.travelEvent && biome === ENUM_BIOMES.plains) {
        const i = Math.floor( 1 + Math.random() * 100)
        switch (i) {
            case 0: return travelEventsPlains.rainStorm(party, date, eventType, biome, runId)
            case 1: return travelEventsPlains.stream(party, date, eventType, biome, runId)
        }
    }
}

module.exports = {
    rollEvent
}