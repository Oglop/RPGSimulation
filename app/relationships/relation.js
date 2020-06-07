const { compabilityCheck } = require('./personality')
const { getKnownPersonObject } = require('./persons')

const setPartyKnowEachOther = party => {
    for (const c1 of party.adventurers) {
        const c1person = getKnownPersonObject(c.id)
        for (const c2 of party.adventurers) {
            // Add c1 to every c2
            if (c1.id !== c2.id) {
                c2.knownPersons.push(c1person)
            }
            
        }
    }
}

const doFriendshipCalculation = (party) => {
    for (let i = 0; i < party.adventurers.lenth; i++) {
        for (let j = i + 1; j < party.adventurers.lenth; i++) {
            compabilityCheck(party.adventurers[i], party.adventurers[j])
        }
    }
}

module.exports = {
    setPartyKnowEachOther, doFriendshipCalculation
}