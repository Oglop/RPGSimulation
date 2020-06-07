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
const ruins = (party, date, eventType, biome) => {

}
/**
 * 3
 * @param {object} party 
 * @param {object} date 
 * @param {ENUM_EVENT_TYPE} eventType 
 * @param {ENUM_BIOMES} biome 
 */
const stream = (party, date, eventType, biome) => {
    echo(`The party comes across a small stream of water`)
    const fishSuccess = testPartyForSkill(party, ENUM_SKILL_NAMES.fishing)
    for (const c of fishSuccess) {
        echo(` ${c.name} caught a fish!`)
        party.food += D8()
    }
    return ENUM_TRAVEL_RESULTS.allGood
}

const fruitTrees = (party, date, eventType, biome) => {
    echo(`The party comes across a old fruit tree`)
    seaseon = getSeason(date)
    if (seaseon === ENUM_SEASONS.summer || seaseon === ENUM_SEASONS.fall) {
        echo(` The party gather some low hanging fruit`)
        party.food += D6()
    } else {
        echo(` During summer and fall this would be a great place to gather food, now there is no fruit`)
    }
    return ENUM_TRAVEL_RESULTS.allGood
}

const travelingMerchant = (party, date, eventType, biome) => {


    return ENUM_TRAVEL_RESULTS.allGood
}

const outlaws = (party, date, eventType, biome) => {


    return ENUM_TRAVEL_RESULTS.allGood
}

const campsite = (party, date, eventType, biome) => {


    return ENUM_TRAVEL_RESULTS.allGood
}

const river = (party, date, eventType, biome) => {
    echo(`The party comes across a river`)
    seaseon = getSeason(date)
    if (seaseon === ENUM_SEASONS.winter) {
        echo(` The river is frozen and the party crosses over the ice.`)
        return ENUM_TRAVEL_RESULTS.allGood
    } else if (seaseon === ENUM_SEASONS.spring) {
        echo(` The melting ice from the mountains has caused the river to overflow. The party searches upsteam for a place to cross`)
        return ENUM_TRAVEL_RESULTS.noTravel
    } else {
        const scoutSuccess = testPartyForSkill(party, ENUM_SKILL_NAMES.scout)
        if (scoutSuccess.length > 0) {
            echo(` After scouting the surroundings ${scoutSuccess[0].name} finds a possible crossing`)
            const swimSuccess = testPartyForSkill(party, ENUM_SKILL_NAMES.swim)
            if (swimSuccess.length > 0) {
                echo(` ${swimSuccess[0].name} crosses the river securing a path for the others to follow`)
                return ENUM_TRAVEL_RESULTS.allGood
            }
            const woodSuccess = testPartyForSkill(party, ENUM_SKILL_NAMES.woodWorking)
                if (woodSuccess.length > 0) {
                    echo(` ${woodSuccess[0].name} gathers some dry logs making a raft`)
                    return ENUM_TRAVEL_RESULTS.allGood
                }
        } else {  
            echo(` Without finding a place to cross the party searches upstream for a place to cross`)
            return ENUM_TRAVEL_RESULTS.noTravel
        }
    }
    echo(` Failing all options the party searches upstream for a place to cross.`)
    return ENUM_TRAVEL_RESULTS.noTravel
}

const sometingSmells = (party, date, eventType, biome) => {

    return ENUM_TRAVEL_RESULTS.allGood
}


module.exports = {
    rainStorm,
    ruins,
    stream,
    fruitTrees,
    travelingMerchant,
    outlaws,
    campsite,
    river,
    sometingSmells
}