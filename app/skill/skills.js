const { ENUM_SKILL_NAMES, ENUM_STAT_NAMES, ENUM_JOB_NAMES, ENUM_RACE_NAMES, ENUM_CHARACTER_STATUS } = require('../constants')
const { D20 } = require('../lib/dice');
const { echo, copyObject } = require('../lib/utils')
const { checkCharacterStatus } = require('../controllers/character')
/**
 * skillpoints
 * @param {int} points 
 */
const mastery = (points) => {
    if (points < 20) {
        return 'Novice' 
    } else if (points >= 20 && points < 40) {
        return 'Beginner'
    } else if (points >= 40 && points < 60) {
        return 'Proficiant'
    } else if (points >= 60 && points < 80) {
        return 'Master'
    } else{
        return 'Legendary'
    }
}
/**
 * returns skills check modiefier based on  mastery points
 * @param {int} points 
 */
const getModifier = (points) => {
    if (points < 20) {
        return -1
    } else if (points >= 20 && points < 40) {
        return 0
    } else if (points >= 40 && points < 60) {
        return 1
    } else if (points >= 60 && points < 80) {
        return 2
    } else{
        return 3
    }
}

const lockPicking = {
    name: ENUM_SKILL_NAMES.lockPicking,
    printable: 'lock picker',
    statsBase: ENUM_STAT_NAMES.agility,
    luckTest: false,
    masteryPoints: 0, 
}
const steal = {
    name: ENUM_SKILL_NAMES.steal,
    printable: 'pocket picker',
    statsBase: ENUM_STAT_NAMES.luck,
    luckTest: false,
    masteryPoints: 0, 
}
const oneHandSword = {
    name: ENUM_SKILL_NAMES.oneHandSword,
    printable: 'one hand sword user',
    statsBase: ENUM_STAT_NAMES.agility,
    luckTest: true,
    masteryPoints: 0, 
}
const twoHandSword = {
    name: ENUM_SKILL_NAMES.twoHandSword,
    printable: 'two hand sword user',
    statsBase: ENUM_STAT_NAMES.strength,
    luckTest: false,
    masteryPoints: 0, 
}
const axe = {
    name: ENUM_SKILL_NAMES.axe,
    printable: 'axe user',
    statsBase: ENUM_STAT_NAMES.strength,
    luckTest: true,
    masteryPoints: 0, 
}
const staff = {
    name: ENUM_SKILL_NAMES.staff,
    printable: 'staff user',
    statsBase: ENUM_STAT_NAMES.intelligence,
    luckTest: true,
    masteryPoints: 0, 
}
const mace = {
    name: ENUM_SKILL_NAMES.mace,
    printable: 'mace user',
    statsBase: ENUM_STAT_NAMES.strength,
    luckTest: false,
    masteryPoints: 0, 
}
const spear = {
    name: ENUM_SKILL_NAMES.spear,
    printable: 'spear user',
    statsBase: ENUM_STAT_NAMES.strength,
    luckTest: true,
    masteryPoints: 0, 
}
const swim = {
    name: ENUM_SKILL_NAMES.swim,
    printable: 'swimmer',
    statsBase: ENUM_STAT_NAMES.agility,
    luckTest: false,
    masteryPoints: 0, 
}
const cook = {
    name: ENUM_SKILL_NAMES.cooking,
    printable: 'chef',
    statsBase: ENUM_STAT_NAMES.wisdom,
    luckTest: false,
    masteryPoints: 0, 
}
const fishing = {
    name: ENUM_SKILL_NAMES.fishing,
    printable: 'fisher',
    statsBase: ENUM_STAT_NAMES.luck,
    luckTest: false,
    masteryPoints: 0, 
}
const hunting = {
    name: ENUM_SKILL_NAMES.hunting,
    printable: 'hunter',
    statsBase: ENUM_STAT_NAMES.wisdom,
    luckTest: false,
    masteryPoints: 0, 
}
const lightArmor = {
    name: ENUM_SKILL_NAMES.lightArmor,
    printable: 'light armor user',
    statsBase: ENUM_STAT_NAMES.vitality,
    luckTest: false,
    masteryPoints: 0
}
const heavyArmor = {
    name: ENUM_SKILL_NAMES.heavyArmor,
    printable: 'heavy armor user',
    statsBase: ENUM_STAT_NAMES.vitality,
    luckTest: false,
    masteryPoints: 0
}
const robes = {
    name: ENUM_SKILL_NAMES.robes,
    printable: 'robe user',
    statsBase: ENUM_STAT_NAMES.intelligence,
    luckTest: false,
    masteryPoints: 0
}
const shield = {
    name: ENUM_SKILL_NAMES.shield,
    printable: 'shield user',
    statsBase: ENUM_STAT_NAMES.agility,
    luckTest: false,
    masteryPoints: 0
}
const dagger = {
    name: ENUM_SKILL_NAMES.dagger,
    printable: 'dagger user',
    statsBase: ENUM_STAT_NAMES.agility,
    luckTest: false,
    masteryPoints: 0
}
const findTrap = {
    name: ENUM_SKILL_NAMES.findTraps,
    printable: 'trap finder',
    statsBase: ENUM_STAT_NAMES.intelligence,
    luckTest: false,
    masteryPoints: 0
}
const scout = {
    name: ENUM_SKILL_NAMES.scout,
    printable: 'scout',
    statsBase: ENUM_STAT_NAMES.wisdom,
    luckTest: false,
    masteryPoints: 0
}
const woodWorker = {
    name: ENUM_SKILL_NAMES.woodWorking,
    printable: 'wood worker',
    statsBase: ENUM_STAT_NAMES.agility,
    luckTest: false,
    masteryPoints: 0
}
const tracking = {
    name: ENUM_SKILL_NAMES.tracking,
    printable: 'tracker',
    statsBase: ENUM_STAT_NAMES.intelligence,
    luckTest: false,
    masteryPoints: 0
}
const persuade = {
    name: ENUM_SKILL_NAMES.persuade,
    printable: 'persuader',
    statsBase: ENUM_STAT_NAMES.charm,
    luckTest: true,
    masteryPoints: 0
}
const healing = {
    name: ENUM_SKILL_NAMES.healing,
    printable: 'healer',
    statsBase: ENUM_STAT_NAMES.wisdom,
    luckTest: false,
    masteryPoints: 0
}
const archer = {
    name: ENUM_SKILL_NAMES.archer,
    printable: 'archer',
    statsBase: ENUM_STAT_NAMES.agility,
    luckTest: true,
    masteryPoints: 0
}
const scholar = {
    name: ENUM_SKILL_NAMES.scholar,
    printable: 'scholar',
    statsBase: ENUM_STAT_NAMES.wisdom,
    luckTest: false,
    masteryPoints: 0
}

const addSkillPoint = (skill, points) => {
    skill.masteryPoints += points
}


/**
 * 
 * @param {object} character 
 * @param {ENUM_SKILL_NAMES} skill 
 * @param {boolean} luckTest 
 * @param {int} modifier 
 */
const skillCheck = (character, skill, luckTest) => {
    let success = false;
    const modifier = getModifier(skill.masteryPoints);
    if (skill.statsBase === ENUM_STAT_NAMES.strength) {
        const str = (character.stats.strength + modifier <= 19) ? character.stats.strength + modifier : 19
        if(D20() <= str) { success = true }
    } else if (skill.statsBase === ENUM_STAT_NAMES.agility) {
        const agi = (character.stats.agility + modifier <= 19) ? character.stats.agility + modifier : 19
        if(D20() <= agi) { success = true }
    } else if (skill.statsBase === ENUM_STAT_NAMES.vitality) {
        const vit = (character.stats.vitality + modifier <= 19) ? character.stats.vitality + modifier : 19
        if(D20() <= vit) { success = true }
    } else if (skill.statsBase === ENUM_STAT_NAMES.intelligence) {
        const int = (character.stats.intelligence + modifier <= 19) ? character.stats.intelligence + modifier : 19
        if(D20() <= int) { success = true }
    } else if (skill.statsBase === ENUM_STAT_NAMES.wisdom) {
        const wis = (character.stats.wisdom + modifier <= 19) ? character.stats.wisdom + modifier : 19
        if(D20() <= wis) { success = true }
    } else if (skill.statsBase === ENUM_STAT_NAMES.luck) {
        const luck = (character.stats.luck + modifier <= 19) ? character.stats.luck + modifier : 19
        if(D20() <= luck) { success = true }
    } else if (skill.statsBase === ENUM_STAT_NAMES.charm) {
        const charm = (character.stats.charm + modifier <= 19) ? character.stats.charm + modifier : 19
        if(D20() <= charm) { success = true }
    }
    if(luckTest === true) {
        if(D20() <= (Math.floor((character.stats.luck) * 0.5))) { success = true }
    }
    return success;
}
/**
 * returns array of every succeeding charcter object
 * @param {object} party 
 * @param {string} skillId 
 */
const testPartyForSkill = (party, skillId) => {
    const successes = []
    for (const character of party.adventurers) {
        if (checkCharacterStatus(character) === ENUM_CHARACTER_STATUS.alive) {
            for (const skill of character.skills) {
                if (skill.name === skillId) {
                    const success = skillCheck(character, skill, skill.luckTest)
                    if (success === true) { successes.push(character) }
                }
            }
        }
    }
    return successes
}
/**
 * returns skill object of character by id
 * @param {object} character 
 * @param {string} skillId 
 */
const getSkillFromChracter = (character, skillId) => {
    for (const skill of character.skills) {
        if (skill.name === skillId) {
            return skill
        }
    }
}

const addMasteryOnSuccess = (skill) => {
    skill.masteryPoints += 1
}

const skillsFactory = (character) => {
    let skills = []
    switch (character.jobs[0].name) {
        case ENUM_JOB_NAMES.peseant: skills = [ copyObject(cook), copyObject(spear), copyObject(lightArmor), copyObject(fishing), copyObject(woodWorker), copyObject(tracking)  ]
        break
        case ENUM_JOB_NAMES.fighter: skills = [ copyObject(cook), copyObject(twoHandSword), copyObject(heavyArmor), copyObject(swim), copyObject(hunting), copyObject(shield), copyObject(findTrap), copyObject(tracking) ]
        break
        case ENUM_JOB_NAMES.knight: skills = [ copyObject(oneHandSword), copyObject(shield), copyObject(hunting), copyObject(heavyArmor), copyObject(swim) ]
        break
        case ENUM_JOB_NAMES.thief: skills = [ copyObject(lightArmor), copyObject(dagger), copyObject(steal), copyObject(lockPicking), copyObject(findTrap), copyObject(swim) ]
        break
        case ENUM_JOB_NAMES.rouge: skills = [ copyObject(lightArmor), copyObject(archer), copyObject(lockPicking), copyObject(findTrap), copyObject(swim), copyObject(hunting), copyObject(tracking) ]
        break
        case ENUM_JOB_NAMES.noble: skills = [ copyObject(lightArmor), copyObject(oneHandSword), copyObject(shield), copyObject(persuade), copyObject(swim) ]
        break
        case ENUM_JOB_NAMES.monk: skills = [ copyObject(cook), copyObject(robes), copyObject(swim), copyObject(healing), copyObject(fishing), copyObject(scholar) ]
        break
        case ENUM_JOB_NAMES.cleric: skills = [ copyObject(cook), copyObject(heavyArmor), copyObject(mace), copyObject(shield), copyObject(healing) ]
        break
        case ENUM_JOB_NAMES.wizard: skills = [ copyObject(robes), copyObject(staff), copyObject(scholar), copyObject(persuade), copyObject(findTrap) ]
        break
        case ENUM_JOB_NAMES.ranger: skills = [ copyObject(cook), copyObject(swim), copyObject(hunting), copyObject(tracking), copyObject(findTrap), copyObject(lightArmor), copyObject(archer), copyObject(scout) ]
        break
    }
    if (character.race.name === ENUM_RACE_NAMES.dwarf) {
        skills.push(copyObject(axe))
    }
    return skills
}


const print = (skill) => {
    echo(`${mastery(skill.masteryPoints)} ${skill.printable}`)
}

module.exports = {
    skillCheck, 
    print, 
    addSkillPoint, 
    skillsFactory,
    getSkillFromChracter,
    testPartyForSkill,
    addMasteryOnSuccess
}



