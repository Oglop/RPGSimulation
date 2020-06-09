const { copyObject, generateID } = require('../../lib/utils')
const { ENUM_EQUIPMENT_TYPE, ENUM_DICE, ENUM_CHARACTER_STATUS } = require('../../constants')
const { D4, D6 } = require('../../lib/dice')
const { getPronounce } = require('./pronounce')

const enemy = {
    name: '',
    id: '',
    status: '',
    attackDice: '',
    HP: 0,
    MP: 0
}

const getEnemyParty = (partySize, biome) => {
    const enemyParty = {
        enemies: [],
        fallen: [],
        wealth: 0,
        equipment:[],
        routes: true
    }
    const i = 1
    switch (i) {
        case 1: enemyParty = goblins(enemyParty); break;
    }

    enemyParty.enemies.push(e)
    return enemyParty
}

const goblins = enemyParty => {
    const a = 2 + D4() + D4()
    for (let i = 0; i < a; i++) {
        const e = copyObject(enemy)
        e.name = `${getPronounce()} goblin`
        e.id = generateID()
        e.HP = 10 + D6()
        e.MP = 0
        e.attackDice = ENUM_DICE.D4
        e.status = ENUM_CHARACTER_STATUS.alive
        enemyParty.enemies.push(e)
    }
    e.wealth = 2
    return enemyParty
}


module.exports = {
    getEnemyParty
}