const { echo } = require('../../lib/utils')
const { testPartyForSkill } = require('../../skill/skills')
const { getRandomCharacter } = require('../../party/party')
const { exhaustCharacter, restCharacter } = require('../../controllers/character')
const { D4, D6, D8, D10, D12, D20 } = require('../../lib/dice')

/**
 * 
 * @param {object} party 
 */
const darkNight = (party) => {
    echo(` The night is pitch black. As the fireplace dims a high screech echoes from far away.`)
    const c = getRandomCharacter(party, false)
    echo(` ${c.name} sleep restlessly.`)
    exhaustCharacter(c, D6())
}

const perfectSleep = (party) => {
    echo(` The entire party sleeps soundly, as morning dawns everyone feels unusually invigorated.`)
    for (const c of party.adventurers) {
        restCharacter(c, D8())
    }
}

module.exports = {
    darkNight, perfectSleep
}