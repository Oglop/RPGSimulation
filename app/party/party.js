const {} = require('../constants')
const { copyObject } = require('../lib/utils')
const { rollCharacter, print } = require('../controllers/character')

const party = {
    adventurers: [],
    location: [9,9],
    quest: {},
    journey: [],
    food: 0
}

const getParty = (partySize) => {
    let p = copyObject(party)
    for(let i = 0; i < partySize; i++) {
        const c = rollCharacter();
        p.adventurers.push(c)
    }
    return p
}

module.exports = {
    getParty
}