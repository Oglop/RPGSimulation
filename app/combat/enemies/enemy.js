const { echo, copyObject, generateID } = require('../../lib/utils')
const enemy = {
    name: '',
    id: '',
    status: '',
    attackDice: '',
    HP: 0,
    MP: 0
}

/**
 * not a great place for this
 * @param {object} character 
 */
const checkEnemyStatus = enemy => {
    if (enemy.status === ENUM_CHARACTER_STATUS.alive) {
        if (enemy.HP <= 0) {
            enemy.status = ENUM_CHARACTER_STATUS.dead
            echo(`${enemy.name} falls to the ground.`)
            return ENUM_CHARACTER_STATUS.died
        }
    }
    return enemy.status
}

module.exports = {
    checkEnemyStatus, enemy
}