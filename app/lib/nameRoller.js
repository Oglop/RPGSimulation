const getCharacterName = () => {
    return `${firstName()} ${lastName()}`;
};

const firstName = () => {
    const i = Math.floor(Math.random() * 17)
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
        case 10: return 'Mina'
        case 11: return 'Arco'
        case 12: return 'Mina'
        case 13: return 'Troy'
        case 14: return 'Oben'
        case 15: return 'Geno'
        case 16: return 'Franzio'
    }
}

const lastName = () => {
    const i = Math.floor(Math.random() * 19)
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
        case 9: return 'Fex'
        case 10: return 'Jonolos'
        case 11: return 'Son'
        case 12: return 'Urz'
        case 13: return 'Aanii'
        case 14: return 'Ionoas'
        case 15: return 'Mooie'
        case 16: return 'Qer'
        case 17: return 'Andaou'
        case 18: return 'Meklo'

    }
}

module.exports = { getCharacterName };