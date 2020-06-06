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
    p.food = partySize * 5
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

module.exports = {
    getParty, getPartyMaxCurHpStamina
}