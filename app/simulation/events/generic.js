const { 
    ENUM_BIOMES, 
    ENUM_PERSONALITY_TRAITS, 
    ENUM_LANGUAGES, 
    ENUM_RACE_NAMES, 
    ENUM_SEASONS,
    ENUM_SKILL_NAMES,
    ENUM_TRAVEL_RESULTS
} = require('../../constants')
const { D4, D6, D8, D10, D12, D20 } = require('../../lib/dice')
const { healCharacter, checkCharacterStatus, restCharacter, damageCharacter, exhaustCharacter } = require('../../controllers/character')
const { getSkillFromChracter, testPartyForSkill, addMasteryOnSuccess } = require('../../skill/skills')
const { echo, getRandomElement, copyArray, copyObject } = require('../../lib/utils')
const { partyContainsPersonality, partyContainsRace, partyContainsSkill } = require('../../party/party')
const { lightLeatherArmor } = require('../../items/armor')
const { longBattleAxe, huntingBow } = require('../../items/weapons')
const { roundShield } = require('../../items/shields')

const rest = (party, biome, season, runId) => {
    echo(`The party decided to rest for the day.`, runId)
    let gatheredFood = 0
    const huntSuccesses = testPartyForSkill(party, ENUM_SKILL_NAMES.hunting)
    for (const c of huntSuccesses) {
        echo(` ${c.name} returned after a successful hunt.`, runId)
        switch (biome) {
            case ENUM_BIOMES.badlands: gatheredFood += party.maxAdventurers + D8(); break;
            case ENUM_BIOMES.dessert: gatheredFood += party.maxAdventurers + D4(); break;
            case ENUM_BIOMES.forest: gatheredFood += party.maxAdventurers + D12(); break;
            case ENUM_BIOMES.hills: gatheredFood += party.maxAdventurers + D10(); break;
            case ENUM_BIOMES.mountains: gatheredFood += party.maxAdventurers + D8(); break;
            case ENUM_BIOMES.plains: gatheredFood += party.maxAdventurers + D10(); break;
            case ENUM_BIOMES.swamp: gatheredFood += party.maxAdventurers + D6(); break;
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
            echo(` ${c.name} cooked a wonderful meal.`, runId)
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
        echo(` The party is starving.`, runId)
        let healPoints = D6()
        let restPoints = D20()
        party.food = 0
        for (c of party.adventurers) {
            damageCharacter(c, healPoints)
            restCharacter(c, restPoints)
        }
    }
}


const travelingMerchant = (party, date, eventType, biome, runId) => {
    echo(`On their journey the meet a traveling merchant.`, runId)
    echo(` The merchant has common goods to sell.`, runId)
    if (party.food < party.length * 2 && party.coin >= 6) {
        echo(` After some consideration ${party[0].name} deciedes to stock up of provisions.`, runId)
        party.coin -= D6()
        party.food += party.length + D6()
    }
    const r = D4() 
    if (r === 1) {
        col = partyContainsSkill(party, ENUM_SKILL_NAMES.lightArmor)
        if (party.coin > 10) {
            const c = getRandomElement(party.adventurers)
            const arm = copyObject(lightLeatherArmor)
            echo(` ${c.name} considers a ${arm.description}.`, runId)
            if (c.equipment.body.name !== arm.name &&
                c.equipment.body.defence < arm.defence) {
                    c.equipment.body = arm
                    party.coin -= 4 + D4()
                    echo(` ${c.name} decides to get the ${arm.name} and pays the merchant.`, runId)
                }
                echo(` ${c.name} decides against it.`, runId)
            }
        
    } else if (r === 2) {
        
        if (party.coin > 12) {
            col = partyContainsSkill(party, ENUM_SKILL_NAMES.axe)
            const c = getRandomElement(party.adventurers)
            const arm = copyObject(longBattleAxe)
            echo(` ${c.name} considers a ${arm.description}.`, runId)
            if (c.equipment.rightHand.name !== arm.name &&
                c.equipment.rightHand.power < arm.power) {
                    c.equipment.rightHand = arm
                    party.coin -= 4 + D8()
                    echo(` ${c.name} decides to get the ${arm.name} and pays the merchant.`, runId)
                }
                echo(` ${c.name} decides against it.`, runId)
            }
    } else if (r === 3) {
        
        if (party.coin > 10) {
            col = partyContainsSkill(party, ENUM_SKILL_NAMES.archer)
            const c = getRandomElement(party.adventurers)
            const arm = copyObject(huntingBow)
            echo(` ${c.name} considers a ${arm.description}.`, runId)
            if (c.equipment.rightHand.name !== arm.name &&
                c.equipment.rightHand.power < arm.power) {
                    c.equipment.rightHand = arm
                    party.coin -= 6 + D4()
                    echo(` ${c.name} decides to get the ${arm.name} and pays the merchant.`, runId)
                }
                echo(` ${c.name} decides against it.`, runId)
            }
    } else {
        if (party.coin > 8) {
            col = partyContainsSkill(party, ENUM_SKILL_NAMES.shield)
            const c = getRandomElement(party.adventurers)
            const arm = copyObject(roundShield)
            echo(` ${c.name} considers a ${arm.description}.`, runId)
            if (c.equipment.leftHand.name !== arm.name &&
                c.equipment.leftHand.parry + c.equipment.leftHand.defence < arm.parry + arm.defence) {
                    c.equipment.leftHand = arm
                    party.coin -= 3 + D4()
                    echo(` ${c.name} decides to get the ${arm.name} and pays the merchant.`, runId)
                }
                echo(` ${c.name} decides against it.`, runId)
        }
    }
    echo(` The merchant leaves and the party and continues on their travel.`, runId)
    return ENUM_TRAVEL_RESULTS.allGood
}

const outlaws = (party, date, eventType, biome, runId) => {


    return ENUM_TRAVEL_RESULTS.allGood
}

const campsite = (party, date, eventType, biome, runId) => {
    echo(`As the sun sets the party see the flickering light of a campsite further ahead.`, runId)
    const r = D4()
    if (r === 1) {
        
    }



    return ENUM_TRAVEL_RESULTS.allGood
}

const bandOfDwarves = (party, runId) => {
    const i = 1
}

module.exports = {
    rest,
    travelingMerchant,
    campsite,
    outlaws
}