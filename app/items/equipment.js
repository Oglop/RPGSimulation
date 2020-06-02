const { ENUM_SKILL_NAMES, ENUM_EQUIPMENT_TYPE,ENUM_BODY_PART,ENUM_DICE,ENUM_JOB_NAMES } = require('../constants')
const { D4, D6, D8, D10, D12, D20 } = require('../lib/dice')
const { copyObject } = require('../lib/utils')

const longSword = {
    name: 'Long sword',
    description: 'A balanced steel long sword',
    attack: ENUM_DICE.D8,
    modifier: 0,
    skill: ENUM_SKILL_NAMES.oneHandSword,
    equipOn: ENUM_BODY_PART.rightHand,
    effects: {
        critical: 'cleaves',
        hit: 'slashes',
        miss:'swings but misses'
    }
    
}
const dagger = {
    name: 'Dagger',
    description: 'A short but menacing dagger',
    attack: ENUM_DICE.d6,
    modifier: 0,
    skill: ENUM_SKILL_NAMES.dagger,
    equipOn: ENUM_BODY_PART.rightHand,
    effects: {
        critical: 'brutaly punctures',
        hit: 'stabbs',
        miss:'stabbs in thin air'
    }
}
const woodenStaff = {
    name: 'Wooden staff',
    description: 'A plain walking staff',
    attack: ENUM_DICE.d4,
    modifier: 0,
    skill: ENUM_SKILL_NAMES.staff,
    equipOn: ENUM_BODY_PART.rightHand,
    effects: {
        critical: 'smashes',
        hit: 'hits',
        miss:'misses'
    }
}
const woodenShield = {
    name: 'Buckler',
    description: 'A small steal buckler',
    defence: 2,
    parry: 1,
    modifier: 0,
    skill: ENUM_SKILL_NAMES.shield,
    equipOn: ENUM_BODY_PART.leftHand
}
const skullCap = {
    name: 'Skull cap',
    description: 'A steal skull cap',
    defence: 2,
    modifier: 0,
    skill: ENUM_SKILL_NAMES.heavyArmor,
    equipOn: ENUM_BODY_PART.head
}
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

const getEquipment = char => {
    if (char.jobs[0].name === ENUM_JOB_NAMES.knight) {
        char.equipment.rightHand = copyObject(longSword)
        char.equipment.head = copyObject(skullCap)
        char.equipment.leftHand = copyObject(woodenShield)
        char.equipment.body = copyObject(shirt)
        char.equipment.legs = copyObject(trousers)
    }

    return copyObject(char)
}

const checkValidEquipment = (char, equipment) => {

}


module.exports = {
    getEquipment, checkValidEquipment,
    woodenStaff, longSword, dagger
}
