const { copyObject } = require('../lib/utils')
const { ENUM_PERSONALITY_TRAITS } = require('../constants')
const { tryToUnderstandEachOther } = require('../language/languages')

const egoistic = {
    trait: ENUM_PERSONALITY_TRAITS.egoistic,
    likes: ENUM_PERSONALITY_TRAITS.loudmouth,
    dislikes: ENUM_PERSONALITY_TRAITS.leader
}

const currious = {
    trait: ENUM_PERSONALITY_TRAITS.currious,
    likes: ENUM_PERSONALITY_TRAITS.clumpsy,
    dislikes: ENUM_PERSONALITY_TRAITS.stoic
}

const friendly = {
    trait: ENUM_PERSONALITY_TRAITS.friendly,
    likes: ENUM_PERSONALITY_TRAITS.all,
    dislikes: ENUM_PERSONALITY_TRAITS.egoistic
}

const lonewolf = {
    trait: ENUM_PERSONALITY_TRAITS.lonewolf,
    likes: ENUM_PERSONALITY_TRAITS.friendly,
    dislikes: ENUM_PERSONALITY_TRAITS.all
}

const stoic = {
    trait: ENUM_PERSONALITY_TRAITS.stoic,
    likes: ENUM_PERSONALITY_TRAITS.leader,
    dislikes: ENUM_PERSONALITY_TRAITS.knowsItAll
}

const leader = {
    trait: ENUM_PERSONALITY_TRAITS.leader,
    likes: ENUM_PERSONALITY_TRAITS.meddler,
    dislikes: ENUM_PERSONALITY_TRAITS.leader
}

const loudmouth = {
    trait: ENUM_PERSONALITY_TRAITS.loudmouth,
    likes: ENUM_PERSONALITY_TRAITS.meddler,
    dislikes: ENUM_PERSONALITY_TRAITS.lonewolf
}

const clumpsy = {
    trait: ENUM_PERSONALITY_TRAITS.clumpsy,
    likes: ENUM_PERSONALITY_TRAITS.friendly,
    dislikes: ENUM_PERSONALITY_TRAITS.currious
}

const meddler = {
    trait: ENUM_PERSONALITY_TRAITS.meddler,
    likes: ENUM_PERSONALITY_TRAITS.none,
    dislikes: ENUM_PERSONALITY_TRAITS.none
}

const knowItAll = {
    trait: ENUM_PERSONALITY_TRAITS.knowsItAll,
    likes: ENUM_PERSONALITY_TRAITS.lonewolf,
    dislikes: ENUM_PERSONALITY_TRAITS.stoic
}
/**
 * 
 * @param {object} char1 characher
 * @param {object} char2 character 
 */
const compabilityCheck = (char1, char2) => {
    const pers1 = char1.personality
    const pers2 = char2.personality
    let compability = 1
    if (pers1.likes === ENUM_PERSONALITY_TRAITS.all) { compability += 2 }
    if (pers2.likes === ENUM_PERSONALITY_TRAITS.all) { compability += 2 }
    if (pers1.dislikes === ENUM_PERSONALITY_TRAITS.all) { compability -= 1 }
    if (pers2.dislikes === ENUM_PERSONALITY_TRAITS.all) { compability -= 1 }
    if (pers1.trait === pers2.likes) { compability += 1 }
    if (pers2.trait === pers1.likes) { compability += 1 }
    if (pers1.trait === pers2.dislikes) { compability -= 1 }
    if (pers2.trait === pers1.dislikes) { compability -= 1 }
    if(tryToUnderstandEachOther(char1, char2)) { compability += 1 }
    return compability

}
/**
 * returns a personality object
 */
const getPersonality = () => {
    const i = Math.floor(Math.random() * 10)
    switch (i) {
        case 0 : return copyObject(egoistic)
        case 1 : return copyObject(currious)
        case 2 : return copyObject(friendly)
        case 3 : return copyObject(lonewolf)
        case 4 : return copyObject(stoic)
        case 5 : return copyObject(leader)
        case 6 : return copyObject(loudmouth)
        case 7 : return copyObject(clumpsy)
        case 8 : return copyObject(meddler)
        case 9 : return copyObject(knowItAll)
    }
}

module.exports = {
    getPersonality, compabilityCheck
}
