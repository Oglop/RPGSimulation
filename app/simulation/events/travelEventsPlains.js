const { 
    ENUM_PERSONALITY_TRAITS, 
    ENUM_LANGUAGES, 
    ENUM_RACE_NAMES, 
    ENUM_SEASONS,
    ENUM_SKILL_NAMES,
    ENUM_TRAVEL_RESULTS,
    ENUM_EVENT_TYPE,
    ENUM_BIOMES
} = require('../../constants')
const { D4, D6, D8, D10, D12, D20 } = require('../../lib/dice')
const { healCharacter, checkCharacterStatus, restCharacter, damageCharacter, exhaustCharacter } = require('../../controllers/character')
const { getSkillFromChracter, testPartyForSkill, addMasteryOnSuccess } = require('../../skill/skills')
const { echo } = require('../../lib/utils')
const { getSeason } = require('../../world/time')
const { treasureRoll } = require('../../world/treasure')
const { partyContainsPersonality, partyContainsRace } = require('../../party/party')
const { getStoryPoint } = require('../../world/legend')

/**
 * 1
 * @param {object} party 
 * @param {object} date 
 * @param {ENUM_EVENT_TYPE} eventType 
 * @param {ENUM_BIOMES} biome 
 */
const rainStorm = (party, date, eventType, biome, runId) => {
    if (getSeason(date) === ENUM_SEASONS.winter) {
        echo('It is snowing heavily and wind is picking up', runId)
        for (c of party.adventurers) {
            damageCharacter(c, D4())
            exhaustCharacter(c, D6())
        }
    } else {
        echo('It is raining heavily and wind is picking up', runId)
        for (c of party.adventurers) {
            exhaustCharacter(c, D4())
        }
    }
    echo(' The party seeks shelter and can´t travel any further today.', runId)
    return ENUM_TRAVEL_RESULTS.noTravel
}
/**
 * 2
 * @param {object} party 
 * @param {object} date 
 * @param {ENUM_EVENT_TYPE} eventType 
 * @param {ENUM_BIOMES} biome 
 */
const ruins = (party, date, eventType, biome, runId) => {

}
/**
 * 3
 * @param {object} party 
 * @param {object} date 
 * @param {ENUM_EVENT_TYPE} eventType 
 * @param {ENUM_BIOMES} biome 
 */
const stream = (party, date, eventType, biome, runId) => {
    echo(`A small stream of water run along the path.`, runId)
    const fishSuccess = testPartyForSkill(party, ENUM_SKILL_NAMES.fishing)
    for (const c of fishSuccess) {
        echo(` ${c.name} caught a fish!`, runId)
        party.food += D8()
    }
    if (fishSuccess.length === 0) {
        echo(` Fishes are jumping in the stream. After a few failed atempts of catching one the party keeps giong.`, runId)
    }
    return ENUM_TRAVEL_RESULTS.allGood
}

const fruitTrees = (party, date, eventType, biome, runId) => {
    echo(`The party comes across a old fruit tree`, runId)
    seaseon = getSeason(date)
    if (seaseon === ENUM_SEASONS.summer || seaseon === ENUM_SEASONS.fall) {
        echo(` The party gather some low hanging fruit`, runId)
        party.food += D6()
    } else {
        echo(` During summer and fall this would be a great place to gather food, now there is no fruit`, runId)
    }
    return ENUM_TRAVEL_RESULTS.allGood
}

const weather = (date) => {
    const season = getSeason(date)
    switch (season) {
        case ENUM_SEASONS.summer: return getStoryPoint(5)
        case ENUM_SEASONS.winter: return getStoryPoint(7)
        case ENUM_SEASONS.fall: return getStoryPoint(6)
        case ENUM_SEASONS.spring: return getStoryPoint(8)
    }
    return ENUM_TRAVEL_RESULTS.allGood
}



const river = (party, date, eventType, biome, runId) => {
    echo(`The party comes across a river`, runId)
    seaseon = getSeason(date)
    if (seaseon === ENUM_SEASONS.winter) {
        echo(` The river is frozen and the party crosses over the ice.`, runId)
        return ENUM_TRAVEL_RESULTS.allGood
    } else if (seaseon === ENUM_SEASONS.spring) {
        echo(` The melting ice from the mountains has caused the river to overflow. The party searches upsteam for a place to cross`, runId)
        return ENUM_TRAVEL_RESULTS.noTravel
    } else {
        const scoutSuccess = testPartyForSkill(party, ENUM_SKILL_NAMES.scout)
        if (scoutSuccess.length > 0) {
            echo(` After scouting the surroundings ${scoutSuccess[0].name} finds a possible crossing`, runId)
            const swimSuccess = testPartyForSkill(party, ENUM_SKILL_NAMES.swim)
            if (swimSuccess.length > 0) {
                echo(` ${swimSuccess[0].name} crosses the river securing a path for the others to follow`, runId)
                return ENUM_TRAVEL_RESULTS.allGood
            }
            const woodSuccess = testPartyForSkill(party, ENUM_SKILL_NAMES.woodWorking)
                if (woodSuccess.length > 0) {
                    echo(` ${woodSuccess[0].name} gathers some dry logs making a raft`, runId)
                    return ENUM_TRAVEL_RESULTS.allGood
                }
        } else {  
            echo(` Without finding a place to cross the party searches upstream for a place to cross`, runId)
            return ENUM_TRAVEL_RESULTS.noTravel
        }
    }
    echo(` Failing all options the party searches upstream for a place to cross.`, runId)
    return ENUM_TRAVEL_RESULTS.noTravel
}

const sometingSmells = (party, date, eventType, biome, runId) => {

    return ENUM_TRAVEL_RESULTS.allGood
}

const farm = (party, runId) => {
    const i = D4()
    if (i === 1) {
          echo(`An abandoned farm.`, runId)
          const scoutSuccess = testPartyForSkill(party, ENUM_SKILL_NAMES.scout)
          if (scoutSuccess.length > 0) {
              echo(` In the back of the barn ${scoutSuccess[0].name} finds a locked chest.`, runId)
              const lockSuccess = testPartyForSkill(party, ENUM_SKILL_NAMES.lockPicking)
              if (lockSuccess.length > 0) { 
                  echo(` ${lockSuccess[0].name} successfully pick the lock revealing a minor treasure.`, runId)
                  party.coins += treasureRoll(3)
              }
          } else {
              echo(`The party searches the farm but can´t find anything but a few broken farm tools.`)
          }
          return ENUM_TRAVEL_RESULTS.allGood
      } else if (i === 2) {
          echo(`You come across a farm, the farmers family is starving.`, runId)
          const i = D6()
          echo(` The farmer and his wife beggs you for ${i} food.`, runId)
          if (party.food < i) {
              echo(` The party does not have the food to give and continues on it journey.`, runId)
              return ENUM_TRAVEL_RESULTS.allGood
          }
          colEgo = partyContainsPersonality(party, ENUM_PERSONALITY_TRAITS.egoistic)
          if(colEgo.length > 0) {
              echo(` ${colEgo[0].name} refuses to give the food.`, runId)
              party.reputation -= D4()
              echo(` The party continues on it journey.`, runId)
              return ENUM_TRAVEL_RESULTS.allGood
          }
          echo(` The party shares the food. The farmer and his family swears to repay them one day.`, runId)
          party.food -= i
          party.reputation += D4()
          return ENUM_TRAVEL_RESULTS.allGood
  
      } else if (i === 3) {
          echo(`You come across a farm, the farmer greets you.`, runId)
          
          echo(` The farmer offers the party to spend the night in the barn.`, runId)
          colLoud = partyContainsPersonality(party, ENUM_PERSONALITY_TRAITS.loudmouth)
          if(colLoud.length > 0) { 
              echo(` During dinner ${colLoud[0].name} manages to insult the farmers wife.`, runId)
              echo(` You are asked to leave. The party continues on it journey.`, runId)
              return ENUM_TRAVEL_RESULTS.allGood
          }
          let healPoints = D6()
          let restPoints = D20()
          party.food = 0
          for (c of party.adventurers) {
              damageCharacter(c, healPoints)
              restCharacter(c, restPoints)
          }
          echo(` The party leaves the farm in the morning feeling refreshed.`, runId)
          return ENUM_TRAVEL_RESULTS.allGood
      } else {
          let stole = false
          echo(`You come across a wealthy farm, the farmer greets you.`, runId)
          echo(` The farmer offers the party to spend the night in the barn.`, runId)
          
          const col = testPartyForSkill(party, ENUM_SKILL_NAMES.steal) 
          if (col.length > 0) {
              const i = treasureRoll(10)
              echo(` During the night ${col[0].name} sneaks out stealing ${i} coins.`, runId)
              stole = true
              party.coin += i
          }
          let healPoints = D6()
          let restPoints = D20()
          party.food = 0
          for (c of party.adventurers) {
              damageCharacter(c, healPoints)
              restCharacter(c, restPoints)
          }
          echo(` The party leaves the farm in the morning feeling refreshed.`, runId)
          if (stole === true) {
              echo(` The farmer notices his missing coin but you are long gone.`, runId)
              party.reputation -= D6()
          }
          return ENUM_TRAVEL_RESULTS.allGood
      }
  }


module.exports = {
    rainStorm,
    ruins,
    stream,
    fruitTrees,
    river,
    sometingSmells,
    farm,
    weather
}