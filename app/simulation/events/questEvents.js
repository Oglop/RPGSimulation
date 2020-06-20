const { skillCheck, testPartyForSkill, statsCheck } = require("../../skill/skills")
const { ENUM_SKILL_NAMES, ENUM_SPELLS, ENUM_ITEMS, ENUM_DICE, ENUM_TRAVEL_RESULTS, ENUM_STAT_NAMES, ENUM_RACE_NAMES, ENUM_LANGUAGES, ENUM_QUEST_STATUS } = require('../../constants')
const { echo, getRandomElement } = require('../../lib/utils')
const { getItem, partyContainsSkill, partyContainsRace,  } = require('../../party/party')
const { hasSpell, getSpell } = require('../../magic/spells')
const { getDiceByEnum, D4 } = require('../../lib/dice')
const { testPartyForLanguage } = require('../../language/languages')
const { restCharacter, damageCharacter, healCharacter, exhaustCharacter } = require('../../controllers/character')


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
        echo(`along the wall is a small statue can be seen.`, runId)
        const i = d4()
        if (i === 1) {
            const hasDarkElf = partyContainsRace(party, ENUM_RACE_NAMES.darkElf)
            if (hasDarkElf.length > 0) {
                echo( `${hasDarkElf[0].name} reqognizes the statue as an altar to Vra Ishkni, the Dark Elves god of blood.`)
                if (hasDarkElf[0].currentHP > 5) {
                    echo( `${hasDarkElf[0].name} feels happy and offers some blood for good luck.`)
                    damageCharacter(hasDarkElf[0], D4()) 
                    restCharacter( hasDarkElf[0], D4())
                }
                echo( `${hasDarkElf[0].name} silently prays to the statue.`)
            } else {
                echo(`Nobody reqognize the statue and the party moves further into the cave.`, runId)
            }
            return ENUM_TRAVEL_RESULTS.allGood
        } else if (i === 2) {
            echo(` across the statue eerie runes can be seen.`, runId)
            const languageSuccesses = testPartyForLanguage(party, ENUM_LANGUAGES.black)
            if (languageSuccesses.length > 0) {
                echo( `${languageSuccesses.name} recognizes the runes as a forbidden language from the other side. Shadows fill the room`, runId)
                for (const c of party.adventurers) {
                    if (hasSpell(c, ENUM_SPELLS.protection) && c.currentStamina > 4) {
                        const spell = getSpell(ENUM_SPELLS.protection)
                        echo(`${c.name} ${spell.description}`)
                        const dice = getDiceByEnum(spell.protection)
                        c.currentStamina -= dice()
                        echo(` Voice seem to speak from within the walls. ${c.name} focuses and a flash lights up the room. The voice fade and the room turns back to normal.`, runId)
                        return ENUM_TRAVEL_RESULTS.allGood
                    }
                }
                return lostInDarkness(party, runId)
            }
            echo(` Nobody can read the runes. The party decides that some things are best left alone`, runId)
            return ENUM_TRAVEL_RESULTS.allGood
        } else if (i === 3) {

        } else {

        }

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

/**
 * rumors of treasure 1
 * @param {object} party 
 * @param {string} runId 
 */
const elvenScout = (party, runId) => {
    echo(`Among the trees the party spots a wood elf scout. As the party they notice she seems worried.`, runId)
    const questContinues = false
    const welven = testPartyForLanguage(party, ENUM_LANGUAGES.woodElven)
    if (welven.length > 0) {
        echo(`${welven[0].name} and the elf speaks shortly. ${welven[0].name} explains that her band of scouts went towards the old ruins and havn´t returned.`, runId)
        questContinues = true
    }
    else {
        woodElfs = partyContainsRace(party, ENUM_RACE_NAMES.woodElf)
        if (woodElfs.length > 0) {
            echo(` Altough from different tribes ${woodElfs[0].name} understands the scout. ${woodElfs[0].name} explains that her band of scouts went towards the old ruins and havn´t returned.`, runId)
            questContinues = true
        }
    }
    if (questContinues === false) {
        echo(` The party can´t understand the elf and after several atempts she turns her back on them and disapears into the forest.`, runId)
        return ENUM_TRAVEL_RESULTS.endOfRoad
    } else {
        echo(` The party follows the elves between the trees. At the edge of the ruins she stops and points. - There, she sais.`, runId)
    }
    return ENUM_TRAVEL_RESULTS.allGood
}
/**
 * rumors of treasure 1
 */
const atTheEdgeOfTheRuins = (party, runId) => {

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