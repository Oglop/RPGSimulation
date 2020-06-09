

const getPronounce = () => {
    const i = Math.floor(Math.random() * 11)
    switch (i) {
        case 0: return 'Small'
        case 1: return 'Stinking'
        case 2: return 'Ugly'
        case 3: return 'Strong'
        case 4: return 'Weak'
        case 5: return 'Quick'
        case 6: return 'Pale'
        case 7: return 'Angry'
        case 8: return 'Muscular'
        case 9: return 'Skinny'
        case 10: return 'Fat'
    }
}

module.exports = { getPronounce }