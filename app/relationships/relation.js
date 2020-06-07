const { compabilityCheck } = require('./personality')
const { getKnownPersonObject } = require('./persons')
const { ENUM_PERSONALITY_TRAITS } = require('../constants')
const {D4, D6 } = require('../lib/dice')

const setPartyKnowEachOther = party => {
    for (const c1 of party.adventurers) {
        const c1person = getKnownPersonObject(c1.id)
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

const decreaseTraitFromTrait = (party, traitFrom, traitTo) => {
    for (let i = 0; i < party.adventurers.lenth; i++) {
        for (let j = i + 1; j < party.adventurers.lenth; i++) {
            if (party.adventurers[i].personality.trait === traitFrom && 
                party.adventurers[j].personality.trait === traitTo) {
                    const found = party.adventurers[i].knownPersons.find(c => c.id === party.adventurers[j].id);
                    if (found !== undefined) {
                        found.points -= D4()
                    }
            }
            if (party.adventurers[j].personality.trait === traitTo && 
                party.adventurers[i].personality.trait === traitFrom) {
                    const found = party.adventurers[j].knownPersons.find(c => c.id === party.adventurers[i].id);
                    if (found !== undefined) {
                        found.points -= D4()
                    }
            }
        }
    }
}

const increaseTraitFromTrait = (party, traitFrom, traitTo) => {
    for (let i = 0; i < party.adventurers.lenth; i++) {
        for (let j = i + 1; j < party.adventurers.lenth; i++) {
            if (party.adventurers[i].personality.trait === traitFrom && 
                party.adventurers[j].personality.trait === traitTo) {
                    const found = party.adventurers[i].knownPersons.find(c => c.id === party.adventurers[j].id);
                    if (found !== undefined) {
                        found.points += D4()
                    }
            }
            if (party.adventurers[j].personality.trait === traitTo && 
                party.adventurers[i].personality.trait === traitFrom) {
                    const found = party.adventurers[j].knownPersons.find(c => c.id === party.adventurers[i].id);
                    if (found !== undefined) {
                        found.points += D4()
                    }
            }
        }
    }
}
/**
 * but when?
 */
const isFriends = () => {

}

module.exports = {
    setPartyKnowEachOther, 
    doFriendshipCalculation,
    decreaseTraitFromTrait,
    increaseTraitFromTrait
}