const { 
    ENUM_PERSONALITY_TRAITS, 
    ENUM_LANGUAGES, 
    ENUM_RACE_NAMES, 
    ENUM_JOB_NAMES,
    ENUM_SEASONS,
    ENUM_SKILL_NAMES,
    ENUM_TRAVEL_RESULTS,
    ENUM_EVENT_TYPE,
    ENUM_BIOMES,
    ENUM_SPELLS,
    ENUM_STAT_NAMES
} = require('../../constants')
const { D4, D6, D8, D10, D12, D20 } = require('../../lib/dice')
const { healCharacter, checkCharacterStatus, restCharacter, damageCharacter, exhaustCharacter } = require('../../controllers/character')
const { getSkillFromChracter, testPartyForSkill, addMasteryOnSuccess, statsCheck } = require('../../skill/skills')
const { echo } = require('../../lib/utils')
const { getSeason } = require('../../world/time')
const { treasureRoll } = require('../../world/treasure')
const { partyContainsPersonality, partyContainsRace, getRandomCharacter } = require('../../party/party')
const { testPartyForLanguage } = require('../../language/languages')
const { partyContainsJob } = require('../../job/jobs')
const { hasSpell, getSpell } = require('../../magic/spells')

const thunderStorm = (party, runId) => {
    echo(`Dark clouds fill the sky and as rain starts falling thunder can be heard in the distance. Soon the storm is over the party. Heavy rain is falling and the sky is lit på lightning.`, runId)
    const c = getRandomCharacter(party, false)
    echo(` ${c.name} screams to the others to search for shelter.`)
    const successes = testPartyForSkill(party, ENUM_SKILL_NAMES.tracking)
    if (successes.length > 0) {
        echo(` ${successes[0].name}s keen eyes spots a small burrow. The party spends the night protected from the rain.`, runId)
    } else {
        echo(` The party searches in vain after somewhere to hide and spends the night in the open`, runId)
        for (const ca of party.adventurers) {
            exhaustCharacter(ca, D4())
        }
    }
    echo(` The morning finaly comes and the waether clears.`)
    ENUM_TRAVEL_RESULTS.allGood
}

const blazingSun = (party, date, runId) => {
    const s = getSeason(date)
    if(s === ENUM_SEASONS.fall) {
        echo(` It´s a warm day, the sun `, runId)
        const c = getRandomCharacter(party, false)
        echo(` ${c.name} is struggling to keep up with the others`, runId)
        exhaustCharacter(ca, D4())
    } else if (s === ENENUM_SEASONS.winter) {
        echo(` It´s an unusualy warm day for the season. The party enjoys the warm sun.`, runId)
    } else if (s === ENENUM_SEASONS.summer) {
        echo(` The sun shines mercyless on the party`, runId)
        for (const ca of party.adventurers) {
            exhaustCharacter(ca, D4())
        }
    } else if (s === ENENUM_SEASONS.spring) {
        echo(` It´s a warm day, the sun `, runId)
        const c = getRandomCharacter(party, false)
        echo(` ${c.name} is struggling to keep up with the others`, runId)
    }
    ENUM_TRAVEL_RESULTS.allGood
}

const which = (party, runId) => {
    echo(`Along the path the party meets an old woman.`, runId)
    const langSucs = testPartyForLanguage(party, ENUM_LANGUAGES.common)
    if (langSucs.length > 0) {
        echo(` ${langSucs[0].name} greets the woman who turns out to be a which.`, runId)
        const magSuccs = partyContainsJob(party, ENUM_JOB_NAMES.cleric)
        for (const c of magSuccs) {
            if (hasSpell(c, ENUM_SPELLS.healingHerbs) === false) {
                echo(` The woman say she see great potential in ${c.name}.`, runId)
                if (statsCheck(c, ENUM_STAT_NAMES.wisdom) === true) {
                    echo(` ${c.name} watches closly as the woman shows how to prepare some herbs found in the bushes.`, runId)
                } else {
                    echo(` ${c.name} tries to follow the what the woman does but fails to understand the meaning of it all.`, runId)
                }
            } else {
                echo(` The woman say she has nothing to teach ${c.name}`, runId)
            }
        }
    }
    echo(` The woman suddenly turns around and walks into the wilderness.`, runId)
    ENUM_TRAVEL_RESULTS.allGood
}

module.exports = {
    blazingSun, thunderStorm, which
}

