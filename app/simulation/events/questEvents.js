const { skillCheck, testPartyForSkill, statsCheck } = require("../../skill/skills")
const { ENUM_SKILL_NAMES, ENUM_SPELLS, ENUM_ITEMS, ENUM_DICE, ENUM_TRAVEL_RESULTS, ENUM_STAT_NAMES } = require('../../constants')
const { echo, getRandomElement } = require('../../lib/utils')
const { getItem, partyContainsSkill,  } = require('../../party/party')
const { hasSpell, getSpell } = require('../../magic/spells')
const { getDiceByEnum, D4 } = require('../../lib/dice')

const checkIfHaveLight = (party, runId) => {
    const haveLight = false
    const torches = getItem(party, ENUM_ITEMS.torch)
    if (torches.number > 0) {
        torches.number -= 1
        haveLight = true
    } else {
        for (const c of party.adventurers) {
            if (hasSpell(c, ENUM_SPELLS.calmLight) && c.currentStamina > 4) {
                const spell = getSpell(ENUM_SPELLS.calmLight)
                echo(`${c.name} ${spell.description}`, runId)
                const dice = getDiceByEnum(spell.staminaCost)
                c.currentStamina -= dice()
                haveLight = true
                break
            }
        }
    }
    return haveLight
}

const lostInDarkness = (party, runId) => {
    const d = D4()
    if (d === 1) {
        echo(`it is pitch black. The party desperately searches for a way out. Eventually they have to rest to continue the search tomorrow`, runId)
        return ENUM_TRAVEL_RESULTS.noTravel
    } else if (d === 2) {
        echo(`Far away the party hear footsteps, something is out there!`, runId)
        let successes = 0
        for (const c of party.adventurers) {
            if (statsCheck(c, ENUM_STAT_NAMES.luck)) { successes += 1 }
        }
        if (successes > 0) {
            echo(` The party hides in the dark, to scared to breath. Eventually the footsteps disapear.`, runId)
            return ENUM_TRAVEL_RESULTS.noTravel
        }
        return ruinsMonsterEncounter(party, runId)
    } else if (d === 3) {
        const c = getRandomElement(party.adventurers)
        echo(`${c.name} stumbles upon what seems to be an old chest.`, runId)
        const torches = getItem(party, ENUM_ITEMS.torch)
        const i = D4()
        echo(` What luck, ${c.name} has found ${i} torches!`, runId)
        return ENUM_TRAVEL_RESULTS.allGood
    } else {
        echo(`Finally! Far above the party spots daylight. The climb seems to take forever but eventually they have all escaped.`, runId)
        const c = getRandomElement(party.adventurers)
        echo(` ${c.name} seems relieved.`, runId)
        return ENUM_TRAVEL_RESULTS.endOfRoad
    }
}
const ruinsMonsterEncounter = (party, runId) => {
/*
    goblins
    cave troll
    giant spiders
    skeletons
    warlock
    horror
*/
}

const ruins = () => {
    const description = ''
}

const ruinsStart = (party, runId) => {
    const description = ''
}

const randomEntrance = (party, runId) => {
    const d = D4()
    if (d === 1) {
        echo(`the party is standing in front of a small cave opening. A chilling breeze blows from within the cave as the party climbes down into the dark.`, runId)
        return ENUM_TRAVEL_RESULTS.allGood
    } else if (d === 2) {
        echo(`the party is standing in front of a stone wall.`, runId)
        for (const c of party.adventurers) {
            if (hasSpell(c, ENUM_SPELLS.trueSight) && c.currentStamina > 4) {
                const spell = getSpell(ENUM_SPELLS.trueSight)
                echo(`${c.name} ${spell.description}`)
                const dice = getDiceByEnum(spell.staminaCost)
                c.currentStamina -= dice()
                echo(`${c.name} touches the wall, suddenly the rock slides inward and a cave opening appears. Behind the door a spiral stairway leads down into the darkness.`, runId)
                return ENUM_TRAVEL_RESULTS.allGood
            }
        }
        return ENUM_TRAVEL_RESULTS.endOfRoad
    } else if (d === 3) {
        echo(`the party is standing in front of a stone building.`, runId)
        const scoutSuccess = testPartyForSkill(party, ENUM_SKILL_NAMES.scout)
        for (const s of scoutSuccess) {
            echo(`${s.name} searches the house and finds a small opening between some rocks. The party climbs down into the darkness.`, runId)
            return ENUM_TRAVEL_RESULTS.allGood
        }
        return ENUM_TRAVEL_RESULTS.endOfRoad
    } else {
        echo(`the party is standing in front of a an old ruined temple between the pillars in the back is an small hatch ${party.adventurers[0].name} tries to open the hatch but it is locked.`, runId)
        const scoutSuccess = testPartyForSkill(party, ENUM_SKILL_NAMES.lockPicking)
        for (const s of scoutSuccess) {
            echo(`${s.name} successfully picks the lock and the hatch swings open. The party follows a stairway down into the darkness.`, runId)
            return ENUM_TRAVEL_RESULTS.allGood
        }
        return ENUM_TRAVEL_RESULTS.endOfRoad
    }
}

const altar = (party, runId) => {
    const haveLight = checkIfHaveLight(party)
    if (haveLight) {
        echo(`along the wall is an altar.`, runId)
        return ENUM_TRAVEL_RESULTS.allGood
    } else {
        return lostInDarkness(party)
    }
}

const goingDown = (party, runId) =>{
    const haveLight = checkIfHaveLight(party)
    if (haveLight) {
        echo(`the party follows a narrow staircase downward.`, runId)
        return ENUM_TRAVEL_RESULTS.allGood
    } else {
        return lostInDarkness(party)
    }

}

const hall = (party, runId) =>{
    const haveLight = checkIfHaveLight(party)
    if (haveLight) {
        echo(`a long hallway, the floor is made of cut stone slates.`, runId)
        return ENUM_TRAVEL_RESULTS.allGood
    } else {
        return lostInDarkness(party)
    }
}

const smallChamber = (party, runId) =>{
    const haveLight = checkIfHaveLight(party)
    if (haveLight) {
        echo(`a small chamber, the floor is made of cut stone slates.`, runId)
        return ENUM_TRAVEL_RESULTS.allGood
    } else {
        return lostInDarkness(party)
    }

}

const smallChamberWithHiddenDoor = (party, runId) =>{
    const haveLight = checkIfHaveLight(party)
    if (haveLight) {
        echo(`a small chamber, the floor is made of cut stone slates.`, runId)
        return ENUM_TRAVEL_RESULTS.allGood
    } else {
        return lostInDarkness(party)
    }
}

const smallChamberWithTraps = (party, runId) =>{
    const haveLight = checkIfHaveLight(party)
    if (haveLight) {
        echo(`a small chamber, the floor is made of cut stone slates.`, runId)
        return ENUM_TRAVEL_RESULTS.allGood
    } else {
        return lostInDarkness(party)
    }
}

const treasureRoom = (party, runId) =>{
    const haveLight = checkIfHaveLight(party)
    if (haveLight) {
        echo(`a small room with heavy door. At the far wall stands a couple of treasure chests. The chests are locked but some coins can be found on the floor.`, runId)
        return ENUM_TRAVEL_RESULTS.allGood
    } else {
        return lostInDarkness(party)
    }
}

const crevice = (party, runId) =>{
    const haveLight = checkIfHaveLight(party)
    if (haveLight) {
        echo(`infront of the party a deep crevice opens.`, runId)
        return ENUM_TRAVEL_RESULTS.allGood
    } else {
        return lostInDarkness(party)
    }
}



module.exports = {
    crevice, 
    treasureRoom,
    smallChamber,
    smallChamberWithHiddenDoor,
    smallChamberWithTraps,
    hall,
    goingDown,
    altar,
    randomEntrance
}