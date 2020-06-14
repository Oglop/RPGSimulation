const { ENUM_SKILL_NAMES, ENUM_EQUIPMENT_TYPE,ENUM_BODY_PART,ENUM_DICE,ENUM_JOB_NAMES } = require('../constants')
const woodenShield = {
    name: 'Buckler',
    description: 'A small steal buckler',
    defence: 2,
    parry: 1,
    modifier: 0,
    skill: ENUM_SKILL_NAMES.shield,
    equipOn: ENUM_BODY_PART.leftHand
}
const heraldicShield = {
    name: 'Heraldic shield',
    description: 'A shield of a noble house',
    defence: 2,
    parry: 3,
    modifier: 0,
    skill: ENUM_SKILL_NAMES.shield,
    equipOn: ENUM_BODY_PART.leftHand
}

const roundShield = {
    name: 'Round shield',
    description: 'A round wooden shield',
    defence: 2,
    parry: 2,
    modifier: 0,
    skill: ENUM_SKILL_NAMES.shield,
    equipOn: ENUM_BODY_PART.leftHand
}

module.exports = { 
    woodenShield,
    heraldicShield,
    roundShield
}