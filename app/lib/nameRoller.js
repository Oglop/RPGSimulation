const getCharacterName = () => {
    return `${firstName()} ${lastName()}`;
};

const firstName = () => {
    const i = Math.floor(Math.random() * 10)
    switch(i) {
        case 0: return 'Hama'
        case 1: return 'Lema'
        case 2: return 'Remo'
        case 3: return 'Rendoz'
        case 4: return 'Ur'
        case 5: return 'Imania'
        case 6: return 'Arno'
        case 7: return 'Kaz'
        case 8: return 'Ilian'
        case 9: return 'Niia'
    }
}

const lastName = () => {
    const i = Math.floor(Math.random() * 9)
    switch(i) {
        case 0: return 'Oroz'
        case 1: return 'Pletz'
        case 2: return 'Frizz'
        case 3: return 'Oonik'
        case 4: return 'Yllionaz'
        case 5: return 'Zoorkani'
        case 6: return 'Gaphraiw'
        case 7: return 'Loojgaan'
        case 8: return 'Pobblosivo'
    }
}

module.exports = { getCharacterName };