const { copyObject } = require('../lib/utils')
const { rollCharacter, print } = require('../controllers/character')
const { ENUM_CHARACTER_STATUS, ENUM_ITEMS } = require('../constants')
const { setPartyKnowEachOther } = require('../relationships/relation')

const party = {
    maxAdventurers: 0,
    adventurers: [],
    fallen: [],
    location: [9,9],
    quest: [],
    journey: [],
    food: 20,
    coins: 20,
    mood: 15,
    reputation: 0,
    items: [
        { 
            name: ENUM_ITEMS.torch,  
            number: 5
        }
    ]
}

const getParty = (partySize) => {
    let p = copyObject(party)
    for(let i = 0; i < partySize; i++) {
        const c = rollCharacter();
        p.adventurers.push(c)
    }
    p.food = partySize * 5
    setPartyKnowEachOther(p)
    return p
}
/**
 * returns
 * sumTotalHp
 * sumTotalStamina
 * sumCurrentStamina
 * sumCurrentHp
 * @param {object} party 
 */
const getPartyMaxCurHpStamina = (party) => {
    /*
        maxHP: 0,
        currentHP: 0,
        maxStamina: 0,
        currentStamina: 0,
    */
    let sumTotalHp = 0
    let sumTotalStamina = 0
    let sumCurrentHp = 0
    let sumCurrentStamina = 0
    for (c of party.adventurers) {
        sumTotalHp += c.maxHP
        sumCurrentHp += c.currentHP
        sumTotalStamina += c.maxStamina
        sumCurrentStamina += c.currentStamina
    }
    return {
        sumTotalHp,
        sumTotalStamina,
        sumCurrentHp,
        sumCurrentStamina
    }
}
/**
 * returns a charcter or empty object
 * @param {object} party 
 * @param {boolean} allowDead 
 */
const getRandomCharacter = (party, allowDead) => {
    if (allowDead === true) {
        const i = Math.floor(Math.random() + party.maxAdventurers)
        if (party.adventurers[i].status === ENUM_CHARACTER_STATUS.alive) { return party.adventurers[i] }
    } else {
        const aliveCharacters = []
        for (const c of party.adventurers) {
            if (c.status === ENUM_CHARACTER_STATUS.alive) {
                aliveCharacters.push(c)
            }
        }
        if (aliveCharacters.length > 0) {
            const i = Math.floor(Math.random() + aliveCharacters.length)
            return aliveCharacters[i]
        }
    }
    
    return {}
}

const bury = party => {

}

const partyContainsPersonality = (party, persTrait) => {
    const col = []
    for (const c of party.adventurers) {
        if (c.personality.trait = trait) { col.push(c) }
    }
    return col
}

const partyContainsRace = (party, race) => {
    const col = []
    for (const c of party.adventurers) {
        if (c.race.name = race) { col.push(c) }
    }
    return col
}

const partyContainsSkill = (party, skill) => {
    const col = []
    for (const c of party.adventurers) {
        for (const s of c.skills) {
            if (s.name === skill) { col.push(c) }
        }
    }
    return col
}

const getItem = (party, item) => {
    const itm = party.items.find(i => i.name === item)
    return itm
}

module.exports = {
    getParty, 
    getPartyMaxCurHpStamina, 
    getRandomCharacter,
    bury,
    partyContainsPersonality,
    partyContainsRace,
    partyContainsSkill,
    getItem
}