const { ENUM_SKILL_NAMES, ENUM_EQUIPMENT_TYPE,ENUM_BODY_PART,ENUM_DICE,ENUM_JOB_NAMES } = require('../constants')
const { D4, D6, D8, D10, D12, D20 } = require('../lib/dice')
const { copyObject } = require('../lib/utils')
const weapons = require('./weapons')
const helmets = require('./helmets')
const shields = require('./shields')
const armor = require('./armor')



const getEquipment = char => {
    if (char.jobs[0].name === ENUM_JOB_NAMES.knight) {
        char.equipment.rightHand = copyObject(weapons.longSword)
        char.equipment.head = copyObject(helmets.skullCap)
        char.equipment.leftHand = copyObject(shields.woodenShield)
        char.equipment.body = copyObject(armor.chainMail)
        char.equipment.legs = copyObject(armor.trousers)
    }
    if (char.jobs[0].name === ENUM_JOB_NAMES.fighter) {
        char.equipment.rightHand = copyObject(weapons.twoHandedSword)
        char.equipment.body = copyObject(armor.shirt)
        char.equipment.legs = copyObject(armor.trousers)
    }
    if (char.jobs[0].name === ENUM_JOB_NAMES.peseant) {
        char.equipment.rightHand = copyObject(weapons.woodenSpear)
        char.equipment.body = copyObject(armor.shirt)
        char.equipment.legs = copyObject(armor.trousers)
    }
    if (char.jobs[0].name === ENUM_JOB_NAMES.noble) {
        char.equipment.rightHand = copyObject(weapons.longSword)
        char.equipment.leftHand = copyObject(shields.heraldicShield)
        char.equipment.body = copyObject(armor.shirt)
        char.equipment.legs = copyObject(armor.trousers)
    }
    if (char.jobs[0].name === ENUM_JOB_NAMES.thief) {
        char.equipment.rightHand = copyObject(weapons.dagger)
        char.equipment.body = copyObject(armor.shirt)
        char.equipment.legs = copyObject(armor.trousers)
    }
    if (char.jobs[0].name === ENUM_JOB_NAMES.ranger) {
        char.equipment.rightHand = copyObject(weapons.longBow)
        char.equipment.body = copyObject(armor.shirt)
        char.equipment.legs = copyObject(armor.trousers)
    }
    if (char.jobs[0].name === ENUM_JOB_NAMES.rouge) {
        char.equipment.rightHand = copyObject(weapons.shortBow)
        char.equipment.body = copyObject(armor.shirt)
        char.equipment.legs = copyObject(armor.trousers)
    }
    if (char.jobs[0].name === ENUM_JOB_NAMES.monk) {
        char.equipment.rightHand = copyObject(weapons.woodenStaff)
        char.equipment.body = copyObject(armor.robes)
        char.equipment.legs = copyObject(armor.trousers)
    }
    if (char.jobs[0].name === ENUM_JOB_NAMES.wizard) {
        char.equipment.rightHand = copyObject(weapons.woodenStaff)
        char.equipment.body = copyObject(armor.robes)
        char.equipment.legs = copyObject(armor.trousers)
    }
    if (char.jobs[0].name === ENUM_JOB_NAMES.cleric) {
        char.equipment.rightHand = copyObject(weapons.club)
        char.equipment.leftHand = copyObject(shields.woodenShield)
        char.equipment.head = copyObject(helmets.skullCap)
        char.equipment.body = copyObject(armor.chainMail)
        char.equipment.legs = copyObject(armor.trousers)
    }
    
    return copyObject(char)
}

const checkValidEquipment = (char, equipment) => {

}


module.exports = {
    getEquipment, checkValidEquipment
}
