const { ENUM_JOB_NAMES } = require('../constants')

const rouge = {
    name: ENUM_JOB_NAMES.rouge,
    statTraits: {
        strength: 0,
        agility: 1,
        vitality: -1,
        intelligence: -2,
        wisdom: 0,
        luck: 1,
        charm: -2
    }
}
const fighter = {
    name: ENUM_JOB_NAMES.fighter,
    statTraits: {
        strength: 2,
        agility: 0,
        vitality: 1,
        intelligence: -1,
        wisdom: -1,
        luck: 0,
        charm: 0
    }
}
const knight = {
    name: ENUM_JOB_NAMES.knight,
    statTraits: {
        strength: 1,
        agility: 0,
        vitality: 2,
        intelligence: -1,
        wisdom: 1,
        luck: -1,
        charm: 1
    }
}
const wizard = {
    name: ENUM_JOB_NAMES.wizard,
    statTraits: {
        strength: -2,
        agility: -1,
        vitality: -1,
        intelligence: 2,
        wisdom: 0,
        luck: 0,
        charm: 0
    }
}
const cleric = {
    name: ENUM_JOB_NAMES.cleric,
    statTraits: {
        strength: 1,
        agility: 0,
        vitality: 1,
        intelligence: 0,
        wisdom: 2,
        luck: 0,
        charm: 0
    }
}
const thief = {
    name: ENUM_JOB_NAMES.thief,
    statTraits: {
        strength: -1,
        agility: 1,
        vitality: -1,
        intelligence: 0,
        wisdom: 0,
        luck: 2,
        charm: 1
    }
}
const noble = {
    name: ENUM_JOB_NAMES.noble,
    statTraits: {
        strength: -1,
        agility: 0,
        vitality: 0,
        intelligence: 1,
        wisdom: 0,
        luck: 1,
        charm: 3
    }
}
const peseant = {
    name: ENUM_JOB_NAMES.peseant,
    statTraits: {
        strength: 1,
        agility: -1,
        vitality: 2,
        intelligence: -2,
        wisdom: -3,
        luck: 1,
        charm: -2
    }
}
const monk = {
    name: ENUM_JOB_NAMES.monk,
    statTraits: {
        strength: 1,
        agility: -1,
        vitality: 2,
        intelligence: 0,
        wisdom: 3,
        luck: -1,
        charm: 0
    }
}
const ranger = {
    name: ENUM_JOB_NAMES.ranger,
    statTraits: {
        strength: 1,
        agility: 2,
        vitality: 0,
        intelligence: 0,
        wisdom: 1,
        luck: -1,
        charm: 0
    }
}

const rollJob = () => {
    const i = Math.floor(Math.random() * 9)
    switch(i) {
        case 0 : return rouge
        case 1 : return fighter
        case 2 : return knight
        case 3 : return wizard
        case 4 : return cleric
        case 5 : return thief
        case 6 : return noble
        case 7 : return peseant
        case 8 : return monk
        case 9 : return ranger
    }   
}

module.exports = {
    rollJob
}