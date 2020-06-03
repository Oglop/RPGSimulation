const { ENUM_SKILL_NAMES, ENUM_EQUIPMENT_TYPE,ENUM_BODY_PART,ENUM_DICE,ENUM_JOB_NAMES } = require('../constants')
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
const twoHandedSword = {
    name: 'Two handed sword',
    description: 'A large steel long sword',
    attack: ENUM_DICE.D12,
    modifier: 0,
    skill: ENUM_SKILL_NAMES.twoHandSword,
    equipOn: ENUM_BODY_PART.rightHand,
    effects: {
        critical: 'violantly slashes',
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

const woodenSpear = {
    name: 'Wooden spear',
    description: 'A basic spear with an iron point',
    attack: ENUM_DICE.d8,
    modifier: 0,
    skill: ENUM_SKILL_NAMES.spear,
    equipOn: ENUM_BODY_PART.rightHand,
    effects: {
        critical: 'pierces',
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

module.exports = {
    longSword,
    dagger,
    woodenStaff,
    twoHandedSword,
    woodenSpear
}