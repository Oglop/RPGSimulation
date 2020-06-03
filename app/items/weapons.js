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

module.exports = {
    longSword,
    dagger,
    woodenStaff
}