const { ENUM_SKILL_NAMES, ENUM_EQUIPMENT_TYPE,ENUM_BODY_PART,ENUM_DICE,ENUM_JOB_NAMES } = require('../constants')
const skullCap = {
    name: 'Skull cap',
    description: 'A steal skull cap',
    defence: 2,
    modifier: 0,
    skill: ENUM_SKILL_NAMES.heavyArmor,
    equipOn: ENUM_BODY_PART.head
}

module.exports = { skullCap }