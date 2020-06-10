const { ENUM_DICE } = require('../constants')
const D4 = () => {
    return Math.floor( 1 + Math.random() * 4)
}

const D6 = () => {
    return Math.floor( 1 + Math.random() * 6)
}

const D8 = () => {
    return Math.floor( 1 + Math.random() * 8)
}

const D10 = () => {
    return Math.floor( 1 + Math.random() * 10)
}

const D12 = () => {
    return Math.floor( 1 + Math.random() * 12)
}

const D20 = () => {
    return Math.floor( 1 + Math.random() * 20)
}

const getDiceByEnum = eDice => {
    switch (eDice) {
        case ENUM_DICE.d4: return D4
        case ENUM_DICE.d6: return D6
        case ENUM_DICE.d8: return D8
        case ENUM_DICE.d10: return D10
        case ENUM_DICE.d12: return D12
        case ENUM_DICE.d20: return D20 
    }
}

module.exports = {
    D4, D6, D8, D10, D12, D20, getDiceByEnum
}