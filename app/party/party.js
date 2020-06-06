const {} = require('../constants')
const { copyObject } = require('../lib/utils')
const { rollCharacter, print } = require('../controllers/character')

const party = {
    maxAdventurers: 0,
    adventurers: [],
    location: [9,9],
    quest: {},
    journey: [],
    food: 20,
    coins: 20
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