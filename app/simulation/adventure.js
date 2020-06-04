const { rollCharacter, print } = require('../controllers/character')
const { date, addDay, printDate, yearsPassed } = require('../world/time')
const { echo, copyObject } = require('../lib/utils')
/**
 * 
 * @param {int} partySize 
 */
const goOnAdventure = (partySize, yearsToSimulate) => {
    
    const now = copyObject(date)
    echo(`Once upon a time`)
    printDate(now)
    for(let i = 0; i < partySize; i++) {
        const a = rollCharacter();
        print(a)
    }
}




module.exports = {
    goOnAdventure
}