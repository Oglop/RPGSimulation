const { echo, copyArray, copyObject } = require('../lib/utils')
const { ENUM_DICE, ENUM_SPELLS } = require('../constants')
const protection = {
    name: ENUM_SPELLS.protection,
    description: '',
    staminaCost: ENUM_DICE.d6
}
const heal = {
    name: ENUM_SPELLS.heal,
    description: 'radiates white calm light',
    staminaCost: ENUM_DICE.d4
}
const healingHerbs = {
    name: ENUM_SPELLS.healingHerbs,
    description: 'mixes some herbs into a potent salve',
    staminaCost: ENUM_DICE.d4
}
const burst = {
    name: ENUM_SPELLS.burst,
    description: 'channels scorching flames',
    staminaCost: ENUM_DICE.d8
}

const trueSight = {
    name: ENUM_SPELLS.trueSight,
    description: 'goes into a trance, eyes shining white',
    staminaCost: ENUM_DICE.d4
}

const calmLight = {
    name: ENUM_SPELLS.calmLight,
    description: 'spreads a soft light in the room',
    staminaCost: ENUM_DICE.d4
}
/**
 * 
 * @param {object} character 
 * @param {name} spellName 
 */
const hasSpell = (character, spellName) => {
    const spell = character.spells.find(s => s.name === spellName)
    if (spell !== undefined) {return true}
    return false
}

const getSpell = spell => {
    switch (spell) {
        case ENUM_SPELLS.burst: return copyObject(protection)
        case ENUM_SPELLS.heal: return copyObject(heal)
        case ENUM_SPELLS.protection: return copyObject(protection)
        case ENUM_SPELLS.trueSight: return copyObject(trueSight)
        case ENUM_SPELLS.calmLight: return copyObject(calmLight)
        case ENUM_SPELLS.healingHerbs: return copyObject(healingHerbs)
    }
}

module.exports = {
    burst, heal, protection, trueSight, hasSpell, getSpell,calmLight,healingHerbs
}