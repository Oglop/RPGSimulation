const { 
    ENUM_BIOMES, 
    ENUM_PERSONALITY_TRAITS, 
    ENUM_LANGUAGES, 
    ENUM_RACE_NAMES, 
    ENUM_SEASONS,
    ENUM_SKILL_NAMES
} = require('../../constants')
const { D4, D6, D8, D10, D12, D20 } = require('../../lib/dice')
const { healCharacter, checkCharacterStatus, restCharacter } = require('../../controllers/character')
const { getSkillFromChracter, testPartyForSkill, addMasteryOnSuccess } = require('../../skill/skills')
const { echo } = require('../../lib/utils')


const rest = (party, biome, season) => {
    echo(`The party decided to rest for the day.`)
    let gatheredFood = 0
    const huntSuccesses = testPartyForSkill(party, ENUM_SKILL_NAMES.hunting)
    for (const c of huntSuccesses) {
        echo(` ${c.name} returned after a successful hunt.`)
        switch (biome) {
            case ENUM_BIOMES.badlands: gatheredFood += D8(); break;
            case ENUM_BIOMES.dessert: gatheredFood += D4(); break;
            case ENUM_BIOMES.forest: gatheredFood += D12(); break;
            case ENUM_BIOMES.hills: gatheredFood += D10(); break;
            case ENUM_BIOMES.mountains: gatheredFood += D8(); break;
            case ENUM_BIOMES.plains: gatheredFood += D10(); break;
            case ENUM_BIOMES.swamp: gatheredFood += D6(); break;
        }
        switch (season) {
            case ENUM_SEASONS.fall: gatheredFood += D6() * 2; break;
            case ENUM_SEASONS.spring: gatheredFood += D8() * 2; break;
            case ENUM_SEASONS.summer: gatheredFood += D4() * 2; break;
            case ENUM_SEASONS.winter: gatheredFood += 0; break;

        }
        party.food += gatheredFood
        const sk = getSkillFromChracter(c, ENUM_SKILL_NAMES.hunting)
        addMasteryOnSuccess(sk)
    }
    
    // eat / check starvation
    if (party.maxAdventurers <= party.food) {
        let healPoints = D20()
        let restPoints = D20()
        const cookSuccesses = testPartyForSkill(party, ENUM_SKILL_NAMES.cooking)
        for (const c of cookSuccesses) { 
            echo(` ${c.name} cooked a wonderful meal.`)
            const sk = getSkillFromChracter(c, ENUM_SKILL_NAMES.cooking)
            addMasteryOnSuccess(sk)
            healPoints += D10()
            restPoints += D10()
        }
        for (c of party.adventurers) {
            healCharacter(c, healPoints)
            restCharacter(c, restPoints)
        }
    } else {
        let healPoints = D4()
        let restPoints = D20()
        party.food = 0
        healCharacter(c, - healPoints)
        restCharacter(c, restPoints)
    }

    
}




module.exports = {
    rest
}