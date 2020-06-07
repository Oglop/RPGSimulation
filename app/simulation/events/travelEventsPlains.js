const { 
    ENUM_BIOMES, 
    ENUM_PERSONALITY_TRAITS, 
    ENUM_LANGUAGES, 
    ENUM_RACE_NAMES, 
    ENUM_SEASONS,
    ENUM_SKILL_NAMES,
    ENUM_TRAVEL_RESULTS,
    ENUM_EVENT_TYPE,
    ENUM_BIOMES
} = require('../../constants')
const { D4, D6, D8, D10, D12, D20 } = require('../../lib/dice')
const { healCharacter, checkCharacterStatus, restCharacter, damageCharacter, exhaustCharacter } = require('../../controllers/character')
const { getSkillFromChracter, testPartyForSkill, addMasteryOnSuccess } = require('../../skill/skills')
const { echo } = require('../../lib/utils')
const { getSeason } = require('../../world/time')
/**
 * 1
 * @param {object} party 
 * @param {object} date 
 * @param {ENUM_EVENT_TYPE} eventType 
 * @param {ENUM_BIOMES} biome 
 */
const rainStorm = (party, date, eventType, biome) => {
    if (getSeason(date) === ENUM_SEASONS.winter) {
        echo('It is snowing heavily and wind is picking up')
        for (c of party.adventurers) {
            damageCharacter(c, D4())
            exhaustCharacter(c, D6())
        }
    } else {
        echo('It is raining heavily and wind is picking up')
        for (c of party.adventurers) {
            exhaustCharacter(c, D4())
        }
    }
    echo(' The party seeks shelter and can´t travel any further today.')
    return ENUM_TRAVEL_RESULTS.noTravel
}
/**
 * 2
 * @param {object} party 
 * @param {object} date 
 * @param {ENUM_EVENT_TYPE} eventType 
 * @param {ENUM_BIOMES} biome 
 */
const ruins = () => {

}
/**
 * 3
 * @param {object} party 
 * @param {object} date 
 * @param {ENUM_EVENT_TYPE} eventType 
 * @param {ENUM_BIOMES} biome 
 */
const stream = () => {
    echo(`The party comes across a small stream of water`)
    const fishSuccess = testPartyForSkill(party, ENUM_SKILL_NAMES.fishing)
    for (const c of fishSuccess) {
        echo(` ${c.name} caught a fish!`)
        party.food += D8()
    }
    return ENUM_TRAVEL_RESULTS.allGood
}


module.exports = {

}