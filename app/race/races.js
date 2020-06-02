const { ENUM_RACE_NAMES } = require('../constants')
const human = {
    name: ENUM_RACE_NAMES.human,
    statTraits: {
        strength: 0,
        agility: 0,
        vitality: 0,
        intelligence: 0,
        wisdom: 0,
        luck: 0,
        charm: 0
    },
    skills:[]
}
const halfElf = {
    name: ENUM_RACE_NAMES.halfElf,
    statTraits: {
        strength: 0,
        agility: 1,
        vitality: -1,
        intelligence: 1,
        wisdom: 0,
        luck: 0,
        charm: 1
    },
    skills:[]
}
const woodElf = {
    name: ENUM_RACE_NAMES.woodElf,
    statTraits: {
        strength: -1,
        agility: 2,
        vitality: -1,
        intelligence: 1,
        wisdom: 1,
        luck: 0,
        charm: 0
    },
    skills:[]
}
const darkElf = {
    name: ENUM_RACE_NAMES.darkElf,
    statTraits: {
        strength: 0,
        agility: 2,
        vitality: -1,
        intelligence: 2,
        wisdom: 0,
        luck: -1,
        charm: -2
    },
    skills:[]
}
const highElf = {
    name: ENUM_RACE_NAMES.highElf,
    statTraits: {
        strength: -1,
        agility: 1,
        vitality: -1,
        intelligence: 3,
        wisdom: 2,
        luck: 0,
        charm: 1
    },
    skills:[]
}
const dwarf = {
    name: ENUM_RACE_NAMES.dwarf,
    statTraits: {
        strength: 2,
        agility: 0,
        vitality: 1,
        intelligence: -1,
        wisdom: 1,
        luck: -2,
        charm: -1
    },
    skills:[]
}
const halfling = {
    name: ENUM_RACE_NAMES.halfling,
    statTraits: {
        strength: -2,
        agility: 3,
        vitality: -2,
        intelligence: 0,
        wisdom: 0,
        luck: 4,
        charm: 2
    },
    skills:[]
}

const rollRace = () => {
    const i = Math.floor(Math.random() * 18)
    switch(i) {
        case 0 : return halfElf
        case 1 : return darkElf
        case 2 : return highElf
        case 3 : return woodElf
        case 4 : return dwarf
        case 5 : return halfling
        default: return human
    } 
}

module.exports = { rollRace };