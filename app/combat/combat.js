const { statsCheck, testPartyForSkill, skillCheck, findSkill } = require('../skill/skills')
const { ENUM_STAT_NAMES, ENUM_SKILL_NAMES, ENUM_CHARACTER_STATUS, ENUM_DICE } = require('../constants')
const { getPercetage, copyObject, copyArray, getRandomElement, echo } = require('../lib/utils')
const { getEnemyParty } = require('./enemies/enemyFactory')
const { getDiceByEnum } = require('../lib/dice')
const { checkCharacterStatus } = require('../controllers/character')
const { checkEnemyStatus } = require('./enemies/enemy')

const fight = (party, enemies, runId) => {
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
        fightingRound(h, e)
        // check for deaths
        h = copyObject( getAliveAndFallenHeroes(h, runId) )
        e = copyObject( getAliveAndFallenMonsters(e, runId) )
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

const getAliveAndFallenHeroes = (col, runId) => {
    const o = {
        alive:[],
        fallen:col.fallen
    }
    for (const c in col.adventurers) {
        if (checkCharacterStatus(c) !== ENUM_CHARACTER_STATUS.alive) {
            echo(`${c.name} fell in battle`, runId)
            o.fallen.push(c)
        } else {
            o.alive.push(c)
        }
    }
    return o
}

const getAliveAndFallenMonsters = (col, runId) => {
    const o = {
        alive:[],
        fallen: col.fallen
    }
    for (const c in col.enemies) {
        if (checkEnemyStatus(c) !== ENUM_CHARACTER_STATUS.alive) {
            echo(`${c.name} fell`, runId)
            o.fallen.push(c)
        } else {
            o.alive.push(c)
        }
    }
    return o
}

const fightingRound = (party, enemyParty) => {
    const arr = []
    for (const c of party.adventurers) {
        arr.push({type: 'c', id: c.id})
    }
    for (const e of enemyParty.enemies) {
        arr.push({type: 'e', id: e.id})
    }
    arr = shuffle(arr)
    for ( const el of arr ) {
        if ( el.type === 'c' ) {
            const enemy = getRandomElement(enemyParty)
            const sk = findSkill(el.equipment.rightHand.item.skill)
            if (skillCheck(el, sk, sk.luckTest)) {
                const dice = getDiceByEnum(el.equipment.rightHand.item.attack)
                enemy.HP -= dice()
                echo(`${el.equipment.rightHand.item.effects.hit} ${enemy.name}`)
            }
            else {
                echo(`${el.equipment.rightHand.item.effects.miss}`)
            }
        } else {
            const character = getRandomElement(party)
            
        }
    }
}

const shuffle = array => {
    var currentIndex = array.length, temporaryValue, randomIndex;
    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
    return array;
  }


module.exports = {
    fight
}