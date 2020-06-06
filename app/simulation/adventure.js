const { rollCharacter, print } = require('../controllers/character')
const { date, addDay, printDate, yearsPassed } = require('../world/time')
const { echo, copyObject } = require('../lib/utils')
const { getParty } = require('../party/party') 
const { buildWorld } = require('../world/world') 
const { findShortestPath } = require('../world/pathFinding')
const { ENUM_EXPLORE_STATUS } = require('../constants') 
const { quest } = require('../world/quests/mainQuests')
const { takeTurn } = require('./turn')
/**
 * 
 * @param {int} partySize 
 */
const goOnAdventure = (partySize, yearsToSimulate) => {
    const grid = buildWorld()
    const now = copyObject(date)
    echo(`Once upon a time`)
    printDate(now)
    
    let _party = getParty(partySize)
    for(let i = 0; i < _party.adventurers.length; i++) {
        print( _party.adventurers[i])
    }
    _party.quest = quest
    _party.maxAdventurers = partySize
    //grid[0][0] = ENUM_EXPLORE_STATUS.start;
    grid[_party.quest.goalCoordinates[0]][_party.quest.goalCoordinates[1]] = ENUM_EXPLORE_STATUS.goal;
    _party.journey = findShortestPath(_party.location, grid)
    console.log(_party.journey)

    
    

}




module.exports = {
    goOnAdventure
}