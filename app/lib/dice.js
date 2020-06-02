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

module.exports = {
    D4, D6, D8, D10, D12, D20
}