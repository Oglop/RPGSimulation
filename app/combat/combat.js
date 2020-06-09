const { statsCheck, testPartyForSkill } = require('../skill/skills')
const { ENUM_STAT_NAMES, ENUM_SKILL_NAMES, ENUM_CHARACTER_STATUS } = require('../constants')
const { getPercetage, copyObject, copyArray } = require('../lib/utils')
const { getEnemyParty } = require('./enemies/enemyFactory')
const { D6, D8, D10 } = require('../lib/dice')
const { checkCharacterStatus } = require('../controllers/character')
const { checkEnemyStatus } = require('./enemies/enemy')

const fight = (party, enemies) => {
    let fightContinues = true
    let heroesWin = false
    freeShots(party, enemies)
    
    const heroes = copyArray(party.adventurers)
    const h = {
        alive: heroes,
        fallen:[]
    }
    const monsters = copyArray(enemies)
    const e = {
        alive: monsters,
        fallen:[]
    }
    while (fightContinues) {

        // do fight rounds

        // check for deaths
        h = copyObject( getAliveAndFallenHeroes(h) )
        e = copyObject( getAliveAndFallenMonsters(e) )
        // check for routes
        if (routes(e) === true) {
            fightContinues = false
            heroesWin = true
            // heroes win
        } else {
            if (routes(h) === true) {
                fightContinues = false
                // heroes lose

            }
        }
        if (e.alive.length === 0) {
            fightContinues = false
            heroesWin = true
        }
        if (h.alive.length === 0) {
            fightContinues = false
        }
        // repeat
    }
    party.fallen = copyArray(h.fallen)
    party.adventurers = copyArray(h.alive)
    if (heroesWin === true) {
        // roll treasure
        
    }
    
    
    

}

const routes = col => {
    let i = 0
    if (col.fallen.length > 0) {
        if (col.fallen.length === 1) {
            i = D6()
        } else if (col.fallen.length > 1 && col.fallen.length <= 4) {
            i = D8()
        } else {
            i = D10()
        }
        if (i >= 6) { return true }
    }
    return false
}

const freeShots = (party, enemies) => {
    // first test for free arrow shots
    const archerSuccesses = testPartyForSkill(party, ENUM_SKILL_NAMES.archer)
    if (archerSuccesses.length > 0) {
        
    }
    


}

const getAliveAndFallenHeroes = col => {
    const o = {
        alive:[],
        fallen:col.fallen
    }
    for (const c in col.adventurers) {
        if (checkCharacterStatus(c) !== ENUM_CHARACTER_STATUS.alive) {
            o.fallen.push(c)
        } else {
            o.alive.push(c)
        }
    }
    return o
}

const getAliveAndFallenMonsters = col => {
    const o = {
        alive:[],
        fallen: col.fallen
    }
    for (const c in col.enemies) {
        if (checkCharacterStatus(c) !== ENUM_CHARACTER_STATUS.alive) {
            o.fallen.push(c)
        } else {
            o.alive.push(c)
        }
    }
    return o
}


module.exports = {
    fight
}