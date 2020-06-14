const { rollCharacter, print } = require('../controllers/character')
const { date, addDay, printDate, yearsPassed } = require('../world/time')
const { echo, copyObject, generateID } = require('../lib/utils')
const { getParty } = require('../party/party') 
const { buildWorld } = require('../world/world') 
const { findShortestPath } = require('../world/pathFinding')
const { ENUM_EXPLORE_STATUS } = require('../constants') 
const { quest } = require('../world/quests/mainQuests')
const { takeTurn } = require('./turn')
const { getStoryPoint } = require('../world/legend')
/**
 * 
 * @param {int} partySize 
 */
const goOnAdventure = (partySize, yearsToSimulate) => {
    const runId = generateID()
    console.log(`ID: ${runId}`)
    const grid = buildWorld()
    const now = copyObject(date)
    echo(getStoryPoint(1), runId)
    echo(getStoryPoint(2), runId)
    
    echo(getStoryPoint(3), runId)
    let _party = getParty(partySize)
    for(let i = 0; i < _party.adventurers.length; i++) {
        print( _party.adventurers[i], runId)
    }
    echo(getStoryPoint(4), runId)
    _party.quest = quest
    _party.maxAdventurers = partySize
    //grid[0][0] = ENUM_EXPLORE_STATUS.start;
    grid[_party.quest.goalCoordinates[0]][_party.quest.goalCoordinates[1]] = ENUM_EXPLORE_STATUS.goal;
    _party.journey = findShortestPath(_party.location, grid)
    console.log(_party.journey)
    printDate(now, runId)

    
    

}




module.exports = {
    goOnAdventure
}