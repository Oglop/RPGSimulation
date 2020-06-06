const { rollEvent } = require('./events/eventFactory')
const { getPercetage } = require('../lib/utils')
const { getPartyMaxCurHpStamina } = require('../party/party')
const { rest } = require('../simulation/events/generic')
const { room } = require('../world/factorys/roomFactory')
const { getSeason } = require('../world/time')

/**
 * 
 * @param {object} party 
 * @param {object} date 
 */
const takeTurn = (party, date) => {
    

    // TODO CHECK IF IN TOWN OR QUEST EVENT
    if (true) {
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
        }
    }
    

    // check for rest => rest events (friendship test and actions)
    // if not rest search for quest => go to town
    // if not quest travel => travel event
    // at goal do quest => quest event
    // check character status and add history
    // pass day
}

module.exports = {
    takeTurn
}