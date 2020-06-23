const { echo } = require('../../lib/utils')
const { testPartyForSkill } = require('../../skill/skills')
const { getRandomCharacter } = require('../../party/party')
const { exhaustCharacter, restCharacter } = require('../../controllers/character')
const { D4, D6, D8, D10, D12, D20 } = require('../../lib/dice')
const { decreaseTraitFromTrait } = require('../../relationships/relation')
const { ENUM_PERSONALITY_TRAITS } = require('../../constants')

/**
 * 
 * @param {object} party 
 */
const darkNight = (party, runId) => {
    echo(` The night is pitch black. As the fireplace dims a high screech echoes from far away.`, runId)
    const c = getRandomCharacter(party, false)
    echo(` ${c.name} sleep restlessly.`, runId)
    exhaustCharacter(c, D6())
}

const perfectSleep = (party, runId) => {
    echo(` The entire party sleeps soundly, as morning dawns everyone feels unusually invigorated.`, runId)
    for (const c of party.adventurers) {
        restCharacter(c, D8())
    }
}

const storyTime = (party, runId) => {
    const c = getRandomCharacter(party, false)
    echo(` At night ${c.name} begins telling a story.`, runId)
    if (D20() <= c.stats.charm) {
        echo(` A heroic tale unfolds captivating the audience.`, runId)
        party.mood += D4()
        if (party.mood > 20) { party.mood = 20 }
    } else {
        echo(` The story seems to be going nowhere and eventually the party goes to sleep.`, runId)
    }
}

const argument = (party, runId) => {
    echo(` At night the party starts arguing about the goal of their journey.`, runId)
    decreaseTraitFromTrait(party, ENUM_PERSONALITY_TRAITS.egoistic, ENUM_PERSONALITY_TRAITS.loudmouth)
}

const traveler = (party, runId) => {
    echo(` At night the party starts arguing about the goal of their journey.`, runId)
    // TODO freindship ...
}



module.exports = {
    darkNight, perfectSleep, storyTime, traveler, argument
}