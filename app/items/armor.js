const { ENUM_SKILL_NAMES, ENUM_EQUIPMENT_TYPE,ENUM_BODY_PART,ENUM_DICE,ENUM_JOB_NAMES } = require('../constants')
const trousers = {
    name: 'Trousers',
    description: 'a pair of plain trousers',
    defence: 1,
    modifier: 0,
    skill: ENUM_SKILL_NAMES.lightArmor,
    equipOn: ENUM_BODY_PART.legs
}
const shirt = {
    name: 'Shirt',
    description: 'a plain shirt',
    defence: 1,
    modifier: 0,
    skill: ENUM_SKILL_NAMES.lightArmor,
    equipOn: ENUM_BODY_PART.body
}
const lightLeatherArmor = {
    name: 'Light leather armor',
    description: 'a light but durable leather armor',
    defence: 3,
    modifier: 0,
    skill: ENUM_SKILL_NAMES.lightArmor,
    equipOn: ENUM_BODY_PART.body
}
const robes = {
    name: 'Robes',
    description: 'plain grey robes',
    defence: 1,
    modifier: 0,
    skill: ENUM_SKILL_NAMES.robes,
    equipOn: ENUM_BODY_PART.body
}
const chainMail = {
    name: 'ChainMail',
    description: 'heavy steel chain mail armor',
    defence: 4,
    modifier: 0,
    skill: ENUM_SKILL_NAMES.heavyArmor,
    equipOn: ENUM_BODY_PART.body
}

module.exports = {
    shirt,
    trousers,
    robes,
    chainMail,
    lightLeatherArmor
}