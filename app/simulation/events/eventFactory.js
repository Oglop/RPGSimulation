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
const travelEventsBadlands = require('./travelEventsBadlands')
const generic = require('./generic')

/**
 * 
 * @param {object} party 
 * @param {object} date 
 * @param {ENUM_EVENT_TYPE} eventType 
 * @param {ENUM_BIOMES} biome 
 */
const rollEvent = (party, date, eventType, biome, runId) => {
    /*
        REST
    */
    if (eventType === ENUM_EVENT_TYPE.restEvent) {
        const i = Math.floor(Math.random() * 4)
        switch (i) {
            case 0: restEvents.darkNight(party, runId); break;
            case 1: restEvents.perfectSleep(party, runId); break;
            case 2: restEvents.storyTime(party, runId); break;
            case 3: restEvents.traveler(party, runId); break;
        }
        return
    }
    /*
        PLAINS
    */
    if (eventType === ENUM_EVENT_TYPE.travelEvent && biome === ENUM_BIOMES.plains) {
        const i = Math.floor(Math.random() * 6)
        switch (i) {
            case 0: return travelEventsPlains.rainStorm(party, date, eventType, biome, runId)
            case 1: return travelEventsPlains.stream(party, date, eventType, biome, runId)
            case 2: return travelEventsPlains.farm(party, runId)
            case 3: return travelEventsPlains.fruitTrees(party, date, ENUM_EVENT_TYPE.travelEvent, biome, runId)
            case 4: return travelEventsPlains.river(party, date, eventType, biome, runId)
            case 5: return generic.travelingMerchant(party, date, eventType, biome, runId)
            case 6: return travelEventsPlains.weather(date)
        }
    }
    /*
        BAD LANDS
    */
    if (eventType === ENUM_EVENT_TYPE.travelEvent && biome === ENUM_BIOMES.badlands) {
        const i = Math.floor(Math.random() * 3)
        switch (i) {
            case 0: return generic.travelingMerchant(party, date, eventType, biome, runId)
            case 1: return travelEventsBadlands.blazingSun(party, date, runId)
            case 2: return travelEventsBadlands.thunderStorm(party, runId)
        }
    }
    /* 
        DESERT
    */
   if (eventType === ENUM_EVENT_TYPE.travelEvent && biome === ENUM_BIOMES.dessert) {
    const i = Math.floor( Math.random() * 1)
    switch (i) {
            case 0: return generic.travelingMerchant(party, date, eventType, biome, runId)
        }
    }
    /* 
        FOREST
    */
    if (eventType === ENUM_EVENT_TYPE.travelEvent && biome === ENUM_BIOMES.forest) {
        const i = Math.floor(Math.random() * 1)
        switch (i) {
            case 0: return generic.travelingMerchant(party, date, eventType, biome, runId)
        }
    }
    /*
        HILLS
    */
    if (eventType === ENUM_EVENT_TYPE.travelEvent && biome === ENUM_BIOMES.hills) {
        const i = Math.floor(Math.random() * 1)
        switch (i) {
            case 0: return generic.travelingMerchant(party, date, eventType, biome, runId)
        }
    }
    /*
        MOUNTAIN
    */
   if (eventType === ENUM_EVENT_TYPE.travelEvent && biome === ENUM_BIOMES.mountains) {
        const i = Math.floor(Math.random() * 1)
        switch (i) {
            case 0: return generic.travelingMerchant(party, date, eventType, biome, runId)
        }
    }
    /* 
        SWAMP
    */
    if (eventType === ENUM_EVENT_TYPE.travelEvent && biome === ENUM_BIOMES.swamp) {
        const i = Math.floor(Math.random() * 1)
        switch (i) {
            case 0: return generic.travelingMerchant(party, date, eventType, biome, runId)
        }
    }

}

module.exports = {
    rollEvent
}