const { room } = require('../world/factorys/roomFactory')
const { echo } = require('../lib/utils')
const { ENUM_EXPLORE_DIR, ENUM_SKILL_NAMES, ENUM_BIOMES } = require('../constants')
const { testPartyForSkill, addMasteryOnSuccess } = require('../skill/skills')
const { D20 } = require('../lib/dice')
/**
 * 
 * @param {object} party 
 * @param {array} grid 
 */
const move = (party, runId) => {
    const dir = party.journey[0]
    if (dir !== undefined) {
        if (dir === ENUM_EXPLORE_DIR.north) {
            echo(`The journey continues north`, runId)
            party.location[0] -= 1
        } else if (dir === ENUM_EXPLORE_DIR.east) {
            echo(`The journey continues east`, runId)
            party.location[1] += 1
        } else if (dir === ENUM_EXPLORE_DIR.south) {
            echo(`The journey continues south`, runId)
            party.location[0] += 1
        } else if (dir === ENUM_EXPLORE_DIR.west) {
            echo(`The journey continues west`, runId)
            party.location[1] -= 1
        }
        party.journey.shift()
    } else {
        throw new Error('new location undefined')
    }
    return party
}
/**
 * returns false if party is not lost
 * @param {object} party 
 * @param {ENUM_BIOMES} biome 
 */
const checkIfLost = (party, biome, runId) => {
    // TODO ADD ROADS
    let difficulty = 0
    switch(biome) {
        case ENUM_BIOMES.badlands: difficulty = 6; break;
        case ENUM_BIOMES.dessert: difficulty = 10; break;
        case ENUM_BIOMES.forest: difficulty = 8; break;
        case ENUM_BIOMES.hills: difficulty = 10; break;
        case ENUM_BIOMES.lake: difficulty = 0; break;
        case ENUM_BIOMES.mountains: difficulty = 12; break;
        case ENUM_BIOMES.plains: difficulty = 4; break;
        case ENUM_BIOMES.swamp: difficulty = 6; break;
    }
    const scoutedSuccess = testPartyForSkill(party, ENUM_SKILL_NAMES.scout)
    if (scoutedSuccess.length > 0) {
        for (const c of scoutedSuccess) {
            difficulty -= 2
            const sk = getSkillFromChracter(c, ENUM_SKILL_NAMES.scout)
            addMasteryOnSuccess(sk)
        }
    }
    if (D20() >= difficulty) { return false; }
    return true;
}

module.exports = {
    move, checkIfLost
}
