const { rollEvent } = require('./events/eventFactory')
const { getPercetage, echo } = require('../lib/utils')
const { getPartyMaxCurHpStamina } = require('../party/party')
const { rest } = require('../simulation/events/generic')
const { room } = require('../world/factorys/roomFactory')
const { checkIfLost, move } = require('../world/travel')
const { getSeason } = require('../world/time')
const { findShortestPath } = require('../world/pathFinding')
const { exhaustCharacter } = require('../controllers/character')
const { printDate, addDay } = require('../world/time')
const { D4 } = require('../lib/dice')
const { 
    ENUM_BIOMES, 
    ENUM_PERSONALITY_TRAITS, 
    ENUM_LANGUAGES, 
    ENUM_RACE_NAMES, 
    ENUM_SEASONS,
    ENUM_EVENT_TYPE,
    ENUM_EXPLORE_STATUS,
    ENUM_TRAVEL_RESULTS
} = require('../constants')
const { doFriendshipCalculation } = require('../relationships/relation')
const { getSpecialRoom } = require('../world/specialRooms')
const roomFactory = require('../world/factorys/roomFactory')
/**
 * 
 * @param {object} party 
 * @param {object} date 
 */
const takeTurn = (party, grid, date, runId) => {
    printDate(date, runId)
    let restForTheDay = false
    // is in quest
    if (party.quest.questEvents.length > 0 && 
        party.quest.goalCoordinates[0] === party.location[0] &&
        party.quest.goalCoordinates[1] === party.location[1]) {
            // have quest and is on quest location
            // ...bla bla bla
    } else {
        // TODO CHECK IF IN TOWN OR QUEST EVENT
        const specialRoom = getSpecialRoom(party.location[0], party.location[1])
        if (specialRoom !== undefined) {
            if (party.quest.length === 0) {
                // do location events try and get a quest
            }
        }
        else {
            // check for rest => rest events (friendship test and actions)
            
            if (getPercetage(party.maxAdventurers * 7, party.food) <= 10) {
                restForTheDay = true
            }
            if (restForTheDay === false) {
                const maxPart = getPartyMaxCurHpStamina(party)
                if(getPercetage(maxPart.sumTotalHp, maxPart.sumCurrentHp) <= 10 || 
                    getPercetage(maxPart.sumTotalStamina, maxPart.sumCurrentStamina) <= 10) {
                        restForTheDay = true
                }
            }


            if (restForTheDay === true) {
                const r = room(party.location[0],party.location[1]);
                rest(party, r.biome, getSeason(date), runId)
                party.lastTravelResult = ENUM_TRAVEL_RESULTS.allGood
                rollEvent(party, date, ENUM_EVENT_TYPE.restEvent, r.biome, runId)
            } else {
                const i = 0
                // if not rest search for quest => go to town
                
                if (party.journey.length <= 0) {
                    // reset
                    resetAfterQuest(party, grid)
                } else {
                    // if not quest travel => check for getting lost ? => travel event
                    const r = room(party.location[0], party.location[1])
                    const lost = checkIfLost(party, r.biome, runId)
                    if (!lost) {
                        if (party.lastTravelResult !== ENUM_TRAVEL_RESULTS.noTravel) {
                            party.lastTravelResult = ENUM_TRAVEL_RESULTS.allGood
                            move(party, runId)
                        }
                        //const r = room(party.location[0],party.location[1]);
                        const result = rollEvent(party, date, ENUM_EVENT_TYPE.travelEvent, r.biome, runId)
                        if (result === ENUM_TRAVEL_RESULTS.allGood) {
                            console.log(`------traveled`)
                        }
                    } else {
                        echo(`The party lost it´s way and spent the day searching for a path forward.`, runId)
                    }
                }

                // at goal do quest => quest event
            }
        }
    }
    if (restForTheDay === false) {
        for (const c of party.adventurers) {
            exhaustCharacter(c, D4())
        }
        if(party.food >= party.maxAdventurers) {
            party.food -= party.maxAdventurers
        } else { party.food = 0 }
        
    }
    
    doFriendshipCalculation(party)
    
    // check character status and add history
    // pass day
    addDay(date)
}

const getTavelToTownForQuestCoordinates = party => {
    const i = Math.floor(Math.random() * 5)
    if (i === 0) {
        party.quest.goalCoordinates = [14,16] // underdale
    } else if (i === 1) {
        party.quest.goalCoordinates = [13, 8] // faros
    } else if (i === 2) {
        party.quest.goalCoordinates = [3,11] // tegen
    } else if (i === 3) {
        party.quest.goalCoordinates = [9,10] // areos
    } else {
        party.quest.goalCoordinates = [6,6] // minig
    }
}

const resetAfterQuest = (party, grid) => {
    party.lastTravelResult = ENUM_TRAVEL_RESULTS.allGood
    if (!party.quest.goalCoordinates === [99,99]) {
        grid[party.quest.goalCoordinates[0]][party.quest.goalCoordinates[1]] = ENUM_EXPLORE_STATUS.empty;
    }
    
    getTavelToTownForQuestCoordinates(party)
    grid[party.quest.goalCoordinates[0]][party.quest.goalCoordinates[1]] = ENUM_EXPLORE_STATUS.goal;
    party.journey = findShortestPath(party.location, grid)
}

module.exports = {
    takeTurn
}