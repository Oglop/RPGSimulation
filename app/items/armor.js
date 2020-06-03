const { ENUM_SKILL_NAMES, ENUM_EQUIPMENT_TYPE,ENUM_BODY_PART,ENUM_DICE,ENUM_JOB_NAMES } = require('../constants')
const trousers = {
    name: 'Trousers',
    description: 'A pair of plain trousers',
    defence: 1,
    modifier: 0,
    skill: ENUM_SKILL_NAMES.lightArmor,
    equipOn: ENUM_BODY_PART.legs
}
const shirt = {
    name: 'Shirt',
    description: 'A plain shirt',
    defence: 1,
    modifier: 0,
    skill: ENUM_SKILL_NAMES.lightArmor,
    equipOn: ENUM_BODY_PART.body
}
const robes = {
    name: 'Robes',
    description: 'Plain grey robes',
    defence: 1,
    modifier: 0,
    skill: ENUM_SKILL_NAMES.robes,
    equipOn: ENUM_BODY_PART.body
}
const chainMail = {
    name: 'chainMail',
    description: 'Heavy steel chain mail armor',
    defence: 4,
    modifier: 0,
    skill: ENUM_SKILL_NAMES.heavyArmor,
    equipOn: ENUM_BODY_PART.body
}

module.exports = {
    shirt,
    trousers,
    robes,
    chainMail
}