const { rollJob } = require('../job/jobs');
const { rollRace } = require('../race/races');
const { getCharacterName } = require('../lib/nameRoller');
const { STATS_MIN_VALUE, STATS_MIN_SUM, STATS_MAX_ROLLABLE,HP_BASE,HP_VITALITY_INCREASE,ENUM_BODY_PART } = require('../constants');
const skills = require('../skill/skills')
const { languageFactory,getLanguageSkollLevelText } = require('../language/languages')
const { getEquipment } = require('../items/equipment')
const { getPersonality } = require('../relationships/personality')
const { echo, copyObject } = require('../lib/utils')

const print = character => {
    echo(`¤~---------- PROFILE ----------~¤`)
    echo(`${character.name} lv ${character.level}, the ${character.personality.trait} ${character.race.name} ${character.jobs[0].name}`)
    echo(` HP: ${character.maxHP}/${character.currentHP}`)
    echo(` MP: ${character.maxStamina}/${character.currentStamina}`)
    echo(`STATS: ${JSON.stringify(character.stats)}`)
    for(const skill of character.skills) {
        skills.print(skill)
    }
    for(const lang of character.languages) {
        echo(`Speaks ${getLanguageSkollLevelText(lang)} ${lang.name}`)
    }
    for (var key in character.equipment) {
        
        if (character.equipment[key].description !== undefined) {
            echo(character.equipment[key].description);
        }
    }
}
const printShort = character => {
    echo(`${character.name} lv ${character.level}, the ${character.race.name} ${character.jobs[0].name}`)
}

const setBaseHP = (vitality) => {
    return HP_BASE + HP_VITALITY_INCREASE * vitality
}

const setBaseMP = (wisdom, intelligence) => {
    return HP_BASE + HP_VITALITY_INCREASE * (Math.floor((wisdom + intelligence) * 0.5))
}

const checkStatSum = s => {
    return s.agility + s.strength + s.vitality + s.intelligence + s.wisdom + s.luck
};

const rollStats = () => {
    let newStats = {}
    let i = 0
    while (i < STATS_MIN_SUM) {
        newStats =  {
            strength: Math.floor(STATS_MIN_VALUE + Math.random() * STATS_MAX_ROLLABLE),
            agility: Math.floor(STATS_MIN_VALUE + Math.random() * STATS_MAX_ROLLABLE),
            vitality: Math.floor(STATS_MIN_VALUE + Math.random() * STATS_MAX_ROLLABLE),
            intelligence: Math.floor(STATS_MIN_VALUE + Math.random() * STATS_MAX_ROLLABLE),
            wisdom: Math.floor(STATS_MIN_VALUE + Math.random() * STATS_MAX_ROLLABLE),
            luck: Math.floor(STATS_MIN_VALUE + Math.random() * STATS_MAX_ROLLABLE),
            charm: Math.floor(STATS_MIN_VALUE + Math.random() * STATS_MAX_ROLLABLE)
        }
        i = checkStatSum(newStats)
    }
    return newStats;
}

const applyStatTraits = (stats, traits) => {
    stats.strength = (stats.strength + traits.strength >= STATS_MIN_VALUE ) ? stats.strength + traits.strength : STATS_MIN_VALUE;
    stats.agility = (stats.agility + traits.agility >= STATS_MIN_VALUE ) ? stats.agility + traits.agility : STATS_MIN_VALUE;
    stats.vitality = (stats.vitality + traits.vitality >= STATS_MIN_VALUE ) ? stats.vitality + traits.vitality : STATS_MIN_VALUE;
    stats.intelligence = (stats.intelligence + traits.intelligence >= STATS_MIN_VALUE ) ? stats.intelligence + traits.intelligence : STATS_MIN_VALUE;
    stats.wisdom = (stats.wisdom + traits.wisdom >= STATS_MIN_VALUE ) ? stats.wisdom + traits.wisdom : STATS_MIN_VALUE;
    stats.luck = (stats.luck + traits.luck >= STATS_MIN_VALUE ) ? stats.luck + traits.luck : STATS_MIN_VALUE;
    stats.charm = (stats.charm + traits.charm >= STATS_MIN_VALUE ) ? stats.charm + traits.charm : STATS_MIN_VALUE;
    return stats
}

const rollCharacter = () => {
    const character = {
        level:1,
        name: getCharacterName(),
        stats: rollStats(),
        jobs: [ rollJob() ],
        race: rollRace(),
        personality: {},
        skills: [],
        languages: [],
        maxHP: 0,
        currentHP: 0,
        maxStamina: 0,
        currentStamina: 0,
        equipment: {
            head:{
                type: ENUM_BODY_PART.head,
                item: {},
            },
            body: {
                type:ENUM_BODY_PART.body,
                item: {},
            },
            legs: {
                type:ENUM_BODY_PART.legs,
                item: {},
            },
            leftHand: {
                type: ENUM_BODY_PART.leftHand,
                item: {},
            },
            rightHand:{
                type: ENUM_BODY_PART.rightHand,
                item: {},
            },
            backpack: []
        }

    }
    let c = character
    c.skills = skills.skillsFactory(character)
    c.stats =  applyStatTraits(c.stats, c.race.statTraits)
    c.stats =  applyStatTraits(c.stats, c.jobs[0].statTraits)
    c.languages = languageFactory(c);
    c = getEquipment(c);
    c.personality = getPersonality();
    c.maxHP = setBaseHP(c.stats.vitality)
    c.currentHP = c.maxHP
    c.maxStamina = setBaseMP(c.stats.wisdom, c.stats.intelligence)
    c.currentStamina = c.maxStamina
    return c
}

module.exports = {
    print, rollCharacter, printShort
}
