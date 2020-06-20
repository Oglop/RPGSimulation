const { ENUM_LANGUAGES, ENUM_RACE_NAMES, ENUM_JOB_NAMES, ENUM_STAT_NAMES } = require('../constants')
const { copyObject } = require('../lib/utils')
const { D20, D6, D4 } = require('../lib/dice')

const ENUM_LANGUAGE_SKILL = {
    beginner: 'beginner',
    basic: 'basic',
    fluent: 'fluent',
    scholar: 'scholar'
}

const getLanguageSkollLevelText = (language) => {
    if (language.skillPoints < 5) {
        return ENUM_LANGUAGE_SKILL.beginner
    } else if (language.skillPoints >= 5 && language.skillPoints < 10) {
        return ENUM_LANGUAGE_SKILL.basic
    } else if (language.skillPoints >= 10 && language.skillPoints < 15) {
        return ENUM_LANGUAGE_SKILL.fluent
    } else {
        return ENUM_LANGUAGE_SKILL.scholar
    }
}

const common = {
    name: ENUM_LANGUAGES.common,
    printable: 'Common',
    skillPoints: 0
}
const commonElven = {
    name: ENUM_LANGUAGES.commonElven,
    printable: 'Common elven',
    skillPoints: 0
}
const highElven = {
    name: ENUM_LANGUAGES.highElven,
    printable: 'High elven',
    skillPoints: 0
}
const darkElven = {
    name: ENUM_LANGUAGES.darkElven,
    printable: 'Dark elven',
    skillPoints: 0
}
const woodElven = {
    name: ENUM_LANGUAGES.woodElven,
    printable: 'Wood elven',
    skillPoints: 0
}
const dwarven = {
    name: ENUM_LANGUAGES.dwarven,
    printable: 'Dwarven',
    skillPoints: 0
}
const ancient = {
    name: ENUM_LANGUAGES.ancient,
    printable: 'Ancient',
    skillPoints: 0
}
const black = {
    name: ENUM_LANGUAGES.black,
    printable: 'Black',
    skillPoints: 0
}
const orcen = {
    name: ENUM_LANGUAGES.orcen,
    printable: 'Orc',
    skillPoints: 0
}
const nobility = {
    name: ENUM_LANGUAGES.nobility,
    printable: 'Nobility',
    skillPoints: 0
}

const languageFactory = c => {
    const langs = []
    /**
     * HUMAN
     */
    if (c.race.name === ENUM_RACE_NAMES.human) {
        const com = copyObject(common)
        com.skillPoints = Math.floor(10 + Math.random() * 5)
        langs.push(com)
        if (c.jobs[0].name === ENUM_JOB_NAMES.wizard) {
            if(D20() <= c.stats.wisdom) {
                const anc = copyObject(ancient)
                anc.skillPoints = Math.floor(1 + Math.random() * 5)
                langs.push(anc)
            }
        }
        if (c.jobs[0].name === ENUM_JOB_NAMES.monk) {
            if(D20() <= c.stats.wisdom) {
                const anc = copyObject(ancient)
                anc.skillPoints = Math.floor(1 + Math.random() * 5)
                langs.push(anc)
            }
            if(D20() <= c.stats.wisdom) {
                const celv = copyObject(commonElven)
                celv.skillPoints = Math.floor(1 + Math.random() * 5)
                langs.push(celv)
            }
            if(D20() <= c.stats.wisdom) {
                const nbl = copyObject(nobility)
                nbl.skillPoints = Math.floor(1 + Math.random() * 5)
                langs.push(nbl)
            }
            if(D20() <= c.stats.wisdom) {
                const celv = copyObject(dwarven)
                celv.skillPoints = Math.floor(1 + Math.random() * 5)
                langs.push(celv)
            }
        }
        if (c.jobs[0].name === ENUM_JOB_NAMES.noble) {
            const nbl = copyObject(nobility)
            nbl.skillPoints = Math.floor(10 + Math.random() * 5)
            langs.push(nbl)
        }
        if (c.jobs[0].name === ENUM_JOB_NAMES.peseant) {
            if(D20() <= c.stats.wisdom) {
                const nbl = copyObject(dwarven)
                nbl.skillPoints = Math.floor(1 + Math.random() * 5)
                langs.push(nbl)
            }
        }
        if (c.jobs[0].name === ENUM_JOB_NAMES.knight) {
            const nbl = copyObject(nobility)
            nbl.skillPoints = Math.floor(5 + Math.random() * 5)
            langs.push(nbl)
        }
        if (c.jobs[0].name === ENUM_JOB_NAMES.cleric) {
            if(D20() <= c.stats.wisdom) {
                const nbl = copyObject(commonElven)
                nbl.skillPoints = Math.floor(5 + Math.random() * 5)
                langs.push(nbl)
            }
            if(D20() <= c.stats.wisdom) {
                const nbl = copyObject(nobility)
                nbl.skillPoints = Math.floor(1 + Math.random() * 5)
                langs.push(nbl)
            }
        }
    }
    /**
     * HALF ELF
     */
    if (c.race.name === ENUM_RACE_NAMES.halfElf) {
        const com = copyObject(common)
        com.skillPoints = Math.floor(10 + Math.random() * 5)
        langs.push(com)
        const celv = copyObject(commonElven)
        celv.skillPoints = Math.floor(1 + Math.random() * 5)
        langs.push(celv)
        if (c.jobs[0].name === ENUM_JOB_NAMES.wizard) {
            if(D20() <= c.stats.wisdom) {
                const anc = copyObject(ancient)
                anc.skillPoints = Math.floor(1 + Math.random() * 5)
                langs.push(anc)
            }
        }
        if (c.jobs[0].name === ENUM_JOB_NAMES.monk) {
            if(D20() <= c.stats.wisdom) {
                const anc = copyObject(ancient)
                anc.skillPoints = Math.floor(1 + Math.random() * 5)
                langs.push(anc)
            }
            if(D20() <= c.stats.wisdom) {
                const celv = copyObject(highElven)
                celv.skillPoints = Math.floor(1 + Math.random() * 5)
                langs.push(celv)
            }
            if(D20() <= c.stats.wisdom) {
                const celv = copyObject(dwarven)
                celv.skillPoints = Math.floor(1 + Math.random() * 5)
                langs.push(celv)
            }
        }
        if (c.jobs[0].name === ENUM_JOB_NAMES.noble) {
            if(D20() <= c.stats.wisdom) {
                const nbl = copyObject(nobility)
                nbl.skillPoints = Math.floor(10 + Math.random() * 5)
                langs.push(nbl)
            }
        }
        if (c.jobs[0].name === ENUM_JOB_NAMES.peseant) {
            if(D20() <= c.stats.wisdom) {
                const nbl = copyObject(dwarven)
                nbl.skillPoints = Math.floor(1 + Math.random() * 5)
                langs.push(nbl)
            }
        }
        if (c.jobs[0].name === ENUM_JOB_NAMES.knight) {
            const nbl = copyObject(nobility)
            nbl.skillPoints = Math.floor(5 + Math.random() * 5)
            langs.push(nbl)
        }
        if (c.jobs[0].name === ENUM_JOB_NAMES.cleric) {
            if(D20() <= c.stats.wisdom) {
                const nbl = copyObject(dwarven)
                nbl.skillPoints = Math.floor(1 + Math.random() * 5)
                langs.push(nbl)
            }
        }
    }
    /**
     * HIGH ELF
     */
    if (c.race.name === ENUM_RACE_NAMES.highElf) {
        const helf = copyObject(highElven)
        helf.skillPoints = Math.floor(10 + Math.random() * 5)
        langs.push(helf)
        const com = copyObject(common)
        com.skillPoints = Math.floor(5 + Math.random() * 5)
        langs.push(com)
        const celv = copyObject(commonElven)
        celv.skillPoints = Math.floor(1 + Math.random() * 5)
        langs.push(celv)
        if (c.jobs[0].name === ENUM_JOB_NAMES.wizard) {
            if(D20() <= c.stats.wisdom) {
                const anc = copyObject(ancient)
                anc.skillPoints = Math.floor(10 + Math.random() * 5)
                langs.push(anc)
            }
            if(D20() <= c.stats.wisdom) {
                const anc = copyObject(nobility)
                anc.skillPoints = Math.floor(10 + Math.random() * 5)
                langs.push(anc)
            }
        }
        if (c.jobs[0].name === ENUM_JOB_NAMES.monk) {
            if(D20() <= c.stats.wisdom) {
                const celv = copyObject(woodElven)
                celv.skillPoints = Math.floor(5 + Math.random() * 5)
                langs.push(celv)
            }
            if(D20() <= c.stats.wisdom) {
                const celv = copyObject(dwarven)
                celv.skillPoints = Math.floor(1 + Math.random() * 5)
                langs.push(celv)
            }
        }
        if (c.jobs[0].name === ENUM_JOB_NAMES.cleric) {
            if(D20() <= c.stats.wisdom) {
                const nbl = copyObject(dwarven)
                nbl.skillPoints = Math.floor(1 + Math.random() * 5)
                langs.push(nbl)
            }
            if(D20() <= c.stats.wisdom) {
                const nbl = copyObject(ancient)
                nbl.skillPoints = Math.floor(1 + Math.random() * 5)
                langs.push(nbl)
            }
        }
    }
    /**
     * WOOD ELF
     */
    if (c.race.name === ENUM_RACE_NAMES.woodElf) {
        const helf = copyObject(woodElven)
        helf.skillPoints = Math.floor(10 + Math.random() * 5)
        langs.push(helf)
        const com = copyObject(common)
        com.skillPoints = Math.floor(5 + Math.random() * 5)
        langs.push(com)
        const celv = copyObject(commonElven)
        celv.skillPoints = Math.floor(5 + Math.random() * 5)
        langs.push(celv)
        if (c.jobs[0].name === ENUM_JOB_NAMES.wizard) {
            if(D20() <= c.stats.wisdom) {
                const anc = copyObject(ancient)
                anc.skillPoints = Math.floor(5 + Math.random() * 5)
                langs.push(anc)
            }
            if(D20() <= c.stats.wisdom) {
                const anc = copyObject(nobility)
                anc.skillPoints = Math.floor(10 + Math.random() * 5)
                langs.push(anc)
            }
        }
        if (c.jobs[0].name === ENUM_JOB_NAMES.monk) {
            if(D20() <= c.stats.wisdom) {
                const celv = copyObject(woodElven)
                celv.skillPoints = Math.floor(5 + Math.random() * 5)
                langs.push(celv)
            }
            if(D20() <= c.stats.wisdom) {
                const celv = copyObject(dwarven)
                celv.skillPoints = Math.floor(1 + Math.random() * 5)
                langs.push(celv)
            }
        }
        if (c.jobs[0].name === ENUM_JOB_NAMES.cleric) {
            if(D20() <= c.stats.wisdom) {
                const nbl = copyObject(dwarven)
                nbl.skillPoints = Math.floor(5 + Math.random() * 5)
                langs.push(nbl)
            }
            if(D20() <= c.stats.wisdom) {
                const nbl = copyObject(ancient)
                nbl.skillPoints = Math.floor(1 + Math.random() * 5)
                langs.push(nbl)
            }
        }
    }
    /**
     * DARK ELF
     */
    if (c.race.name === ENUM_RACE_NAMES.darkElf) {
        const helf = copyObject(darkElven)
        helf.skillPoints = Math.floor(10 + Math.random() * 5)
        langs.push(helf)
        const com = copyObject(common)
        com.skillPoints = Math.floor(1 + Math.random() * 5)
        langs.push(com)
        const celv = copyObject(commonElven)
        celv.skillPoints = Math.floor(5 + Math.random() * 5)
        langs.push(celv)
        if (c.jobs[0].name === ENUM_JOB_NAMES.wizard) {
            if(D20() <= c.stats.wisdom) {
                const anc = copyObject(ancient)
                anc.skillPoints = Math.floor(5 + Math.random() * 5)
                langs.push(anc)
            }
            if(D20() <= c.stats.wisdom) {
                const anc = copyObject(black)
                anc.skillPoints = Math.floor(5 + Math.random() * 5)
                langs.push(anc)
            }
        }
        if (c.jobs[0].name === ENUM_JOB_NAMES.noble) {
            if(D20() <= c.stats.wisdom) {
                const anc = copyObject(ancient)
                anc.skillPoints = Math.floor(10 + Math.random() * 5)
                langs.push(anc)
            }
            if(D20() <= c.stats.wisdom) {
                const anc = copyObject(nobility)
                anc.skillPoints = Math.floor(1 + Math.random() * 5)
                langs.push(anc)
            }
            if(D20() <= c.stats.wisdom) {
                const anc = copyObject(black)
                anc.skillPoints = Math.floor(5 + Math.random() * 5)
                langs.push(anc)
            }
        }
        if (c.jobs[0].name === ENUM_JOB_NAMES.monk) {
            if(D20() <= c.stats.wisdom) {
                const celv = copyObject(woodElven)
                celv.skillPoints = Math.floor(5 + Math.random() * 5)
                langs.push(celv)
            }
            if(D20() <= c.stats.wisdom) {
                const celv = copyObject(dwarven)
                celv.skillPoints = Math.floor(1 + Math.random() * 5)
                langs.push(celv)
            }
            if(D20() <= c.stats.wisdom) {
                const anc = copyObject(black)
                anc.skillPoints = Math.floor(1 + Math.random() * 5)
                langs.push(anc)
            }
        }
        if (c.jobs[0].name === ENUM_JOB_NAMES.rouge) {
            if(D20() <= c.stats.wisdom) {
                const celv = copyObject(orcen)
                celv.skillPoints = Math.floor(5 + Math.random() * 5)
                langs.push(celv)
            }
        }
        if (c.jobs[0].name === ENUM_JOB_NAMES.peseant) {
            if(D20() <= c.stats.wisdom) {
                const celv = copyObject(orcen)
                celv.skillPoints = Math.floor(1 + Math.random() * 5)
                langs.push(celv)
            }
        }
        if (c.jobs[0].name === ENUM_JOB_NAMES.cleric) {
            if(D20() <= c.stats.wisdom) {
                const nbl = copyObject(orcen)
                nbl.skillPoints = Math.floor(1 + Math.random() * 5)
                langs.push(nbl)
            }
        }
    }
    if (c.race.name === ENUM_RACE_NAMES.dwarf) {
        const helf = copyObject(dwarven)
        helf.skillPoints = Math.floor(10 + Math.random() * 5)
        langs.push(helf)
        const com = copyObject(common)
        com.skillPoints = Math.floor(10 + Math.random() * 5)
        langs.push(com)
        if (c.jobs[0].name === ENUM_JOB_NAMES.wizard) {
            if(D20() <= c.stats.wisdom) {
                const anc = copyObject(ancient)
                anc.skillPoints = Math.floor(1 + Math.random() * 5)
                langs.push(anc)
            }
        }
        if (c.jobs[0].name === ENUM_JOB_NAMES.monk) {
            if(D20() <= c.stats.wisdom) {
                const anc = copyObject(ancient)
                anc.skillPoints = Math.floor(1 + Math.random() * 5)
                langs.push(anc)
            }
            if(D20() <= c.stats.wisdom) {
                const celv = copyObject(commonElven)
                celv.skillPoints = Math.floor(1 + Math.random() * 5)
                langs.push(celv)
            }
            if(D20() <= c.stats.wisdom) {
                const nbl = copyObject(nobility)
                nbl.skillPoints = Math.floor(1 + Math.random() * 5)
                langs.push(nbl)
            }
            if(D20() <= c.stats.wisdom) {
                const celv = copyObject(commonElven)
                celv.skillPoints = Math.floor(1 + Math.random() * 5)
                langs.push(celv)
            }
            if(D20() <= c.stats.wisdom) {
                const celv = copyObject(darkElven)
                celv.skillPoints = Math.floor(1 + Math.random() * 5)
                langs.push(celv)
            }
        }
        if (c.jobs[0].name === ENUM_JOB_NAMES.noble) {
            if(D20() <= c.stats.wisdom) {
                const nbl = copyObject(nobility)
                nbl.skillPoints = Math.floor(5 + Math.random() * 5)
                langs.push(nbl)
            }
            if(D20() <= c.stats.wisdom) {
                const celv = copyObject(commonElven)
                celv.skillPoints = Math.floor(1 + Math.random() * 5)
                langs.push(celv)
            }
        }
        if (c.jobs[0].name === ENUM_JOB_NAMES.peseant) {
            if(D20() <= c.stats.wisdom) {
                const celv = copyObject(commonElven)
                celv.skillPoints = Math.floor(1 + Math.random() * 5)
                langs.push(celv)
            }
        }
        if (c.jobs[0].name === ENUM_JOB_NAMES.knight) {
            const nbl = copyObject(nobility)
            nbl.skillPoints = Math.floor(5 + Math.random() * 5)
            langs.push(nbl)
            if(D20() <= c.stats.wisdom) {
                const celv = copyObject(commonElven)
                celv.skillPoints = Math.floor(1 + Math.random() * 5)
                langs.push(celv)
            }
        }
        if (c.jobs[0].name === ENUM_JOB_NAMES.cleric) {
            if(D20() <= c.stats.wisdom) {
                const nbl = copyObject(commonElven)
                nbl.skillPoints = Math.floor(5 + Math.random() * 5)
                langs.push(nbl)
            }
            if(D20() <= c.stats.wisdom) {
                const nbl = copyObject(nobility)
                nbl.skillPoints = Math.floor(1 + Math.random() * 5)
                langs.push(nbl)
            }
        }
    }
    if (c.race.name === ENUM_RACE_NAMES.halfling) {
        const dwn = copyObject(dwarven)
        dwn.skillPoints = Math.floor(5 + Math.random() * 5)
        langs.push(dwn)
        const com = copyObject(common)
        com.skillPoints = Math.floor(10 + Math.random() * 5)
        langs.push(com)
        const celv = copyObject(commonElven)
        celv.skillPoints = Math.floor(5 + Math.random() * 5)
        langs.push(celv)
        if (c.jobs[0].name === ENUM_JOB_NAMES.wizard) {
            if(D20() <= c.stats.wisdom) {
                const anc = copyObject(ancient)
                anc.skillPoints = Math.floor(10 + Math.random() * 5)
                langs.push(anc)
            }
            if(D20() <= c.stats.wisdom) {
                const anc = copyObject(highElven)
                anc.skillPoints = Math.floor(10 + Math.random() * 5)
                langs.push(anc)
            }
        }
        if (c.jobs[0].name === ENUM_JOB_NAMES.monk) {
            if(D20() <= c.stats.wisdom) {
                const anc = copyObject(ancient)
                anc.skillPoints = Math.floor(5 + Math.random() * 5)
                langs.push(anc)
            }
            if(D20() <= c.stats.wisdom) {
                const nbl = copyObject(nobility)
                nbl.skillPoints = Math.floor(10 + Math.random() * 5)
                langs.push(nbl)
            }
            if(D20() <= c.stats.wisdom) {
                const celv = copyObject(darkElven)
                celv.skillPoints = Math.floor(1 + Math.random() * 5)
                langs.push(celv)
            }
        }
        if (c.jobs[0].name === ENUM_JOB_NAMES.noble) {
            if(D20() <= c.stats.wisdom) {
                const nbl = copyObject(nobility)
                nbl.skillPoints = Math.floor(5 + Math.random() * 5)
                langs.push(nbl)
            }
            if(D20() <= c.stats.wisdom) {
                const anc = copyObject(highElven)
                anc.skillPoints = Math.floor(5 + Math.random() * 5)
                langs.push(anc)
            }
        }
        if (c.jobs[0].name === ENUM_JOB_NAMES.peseant) {
            if(D20() <= c.stats.wisdom) {
                const celv = copyObject(orcen)
                celv.skillPoints = Math.floor(1 + Math.random() * 5)
                langs.push(celv)
            }
        }
        if (c.jobs[0].name === ENUM_JOB_NAMES.rouge) {
            if(D20() <= c.stats.wisdom) {
                const celv = copyObject(orcen)
                celv.skillPoints = Math.floor(1 + Math.random() * 5)
                langs.push(celv)
            }
        }
        if (c.jobs[0].name === ENUM_JOB_NAMES.thief) {
            if(D20() <= c.stats.wisdom) {
                const celv = copyObject(orcen)
                celv.skillPoints = Math.floor(1 + Math.random() * 5)
                langs.push(celv)
            }
            if(D20() <= c.stats.wisdom) {
                const nbl = copyObject(nobility)
                nbl.skillPoints = Math.floor(5 + Math.random() * 5)
                langs.push(nbl)
            }
            if(D20() <= c.stats.wisdom) {
                const anc = copyObject(ancient)
                anc.skillPoints = Math.floor(5 + Math.random() * 5)
                langs.push(anc)
            }
        }
        if (c.jobs[0].name === ENUM_JOB_NAMES.knight) {
            const nbl = copyObject(nobility)
            nbl.skillPoints = Math.floor(10 + Math.random() * 5)
            langs.push(nbl)
        }
        if (c.jobs[0].name === ENUM_JOB_NAMES.cleric) {
            if(D20() <= c.stats.wisdom) {
                const nbl = copyObject(commonElven)
                nbl.skillPoints = Math.floor(5 + Math.random() * 5)
                langs.push(nbl)
            }
            if(D20() <= c.stats.wisdom) {
                const nbl = copyObject(nobility)
                nbl.skillPoints = Math.floor(1 + Math.random() * 5)
                langs.push(nbl)
            }
            if(D20() <= c.stats.wisdom) {
                const nbl = copyObject(dwarven)
                nbl.skillPoints = Math.floor(1 + Math.random() * 5)
                langs.push(nbl)
            }
        }
    }
    return langs
    
}
/**
 * 
 * @param {object} party array of character object
 * @param {string} language 
 */
const languageCheck = (party, language) => {
    let result = false
    for(const c of party.adventurers) {
        for(const l of c.languages) {
            if (l.name === language) {
                if (l.skillPoints <= D20()) {
                    result = true
                    break
                }
            }
        }
    }
    return result
}
/**
 * 
 * @param {object} party array of character object
 * @param {string} language 
 */
const testPartyForLanguage = (party, language) => {
    const result = []
    for(const c of party.adventurers) {
        for(const l of c.languages) {
            if (l.name === language) {
                if (l.skillPoints <= D20()) {
                    result.push(c)
                    l.skillPoints += 1
                    break
                }
            }
        }
    }
    return result
}
const tryToUnderstandEachOther = (char1, char2) => {
    for(l1 of char1.languages) {
        for(l2 of char2.languages) {
            if (l1.name === l2.name) {
                if(testLangauge(l1, l2)) {
                    return true
                }
            }
        }
    }
    return false;
}

const testLangauge = (lang1, lang2) => {
    if ( D20() <= Math.floor((lang1 + lang2) * 0.5)) { return true; }
    return false;
}

module.exports = {
    languageCheck, languageFactory, getLanguageSkollLevelText, testLangauge, tryToUnderstandEachOther, testPartyForLanguage
}