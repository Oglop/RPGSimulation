const { statsCheck, testPartyForSkill } = require('../skill/skills')
const { ENUM_STAT_NAMES, ENUM_SKILL_NAMES } = require('../constants')
const { getPercetage, copyObject, copyArray } = require('../lib/utils')
const { getEnemyParty } = require('./enemies/enemyFactory')

const fight = (party, enemies) => {
    freeShots(party, enemies)
    // do fight rounds
    const heroes = copyArray(party.adventurers)
    const monsters = copyArray(enemies)




    // check for deaths

    // check for routes

    // repeat

}

const freeShots = (party, enemies) => {
    // first test for free arrow shots
    const archerSuccesses = testPartyForSkill(party, ENUM_SKILL_NAMES.archer)
    if (archerSuccesses.length > 0) {
        
    }
    


}



module.exports = {
    fight
}