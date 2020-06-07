const { rollEvent } = require('./events/eventFactory')
const { getPercetage } = require('../lib/utils')
const { getPartyMaxCurHpStamina } = require('../party/party')
const { rest } = require('../simulation/events/generic')
const { room } = require('../world/factorys/roomFactory')
const { checkIfLost, move } = require('../world/travel')
const { getSeason } = require('../world/time')
const { 
    ENUM_BIOMES, 
    ENUM_PERSONALITY_TRAITS, 
    ENUM_LANGUAGES, 
    ENUM_RACE_NAMES, 
    ENUM_SEASONS,
    ENUM_EVENT_TYPE
} = require('../../constants')

/**
 * 
 * @param {object} party 
 * @param {object} date 
 */
const takeTurn = (party, date) => {
    

    // TODO CHECK IF IN TOWN OR QUEST EVENT


    if (true) {
        // check for rest => rest events (friendship test and actions)
        const restForTheDay = false
        if (getPercetage(party.maxAdventurers * 7, party.food) <= 10) {
            restForTheDay = true
        }
        if (restForTheDay === false) {
            const maxPart = getPartyMaxCurHpStamina(party)
            if(getPercetage(maxPart.sumTotalHp, maxPart.sumCurrentHp) <= 10 || 
                getPercetage(maxPart.sumTotalStamina, maxPart.sumCurrentStamina) <= 10) {
                    restForTheDay = true
            }
        }


        if (restForTheDay === true) {
            const r = room(party.location[0],party.location[1]);
            rest(party, r.biome, getSeason(date))
            rollEvent(party, date, ENUM_EVENT_TYPE.restEvent, r.biome)
        } else {
            const i = 0
            // if not rest search for quest => go to town
            
            if (party.journey.length <= 0) {

            } else {
                // if not quest travel => check for getting lost ? => travel event
                const lost = checkIfLost(party, r.biome)
                if (lost === false) {
                    move(party)
                }
            }

            // at goal do quest => quest event
        }
    }
    

    
    
    
    // check character status and add history
    // pass day
}

module.exports = {
    takeTurn
}