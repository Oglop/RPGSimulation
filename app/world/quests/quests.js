const { D4 } = require('../../lib/dice')
const { echo, copyObject } = require('../../lib/utils')
const { ENUM_QUEST_STATUS } = require('../../constants')
const quest = {
    goalCoordinates: [],
    questStatus: ENUM_QUEST_STATUS.ONGOING,
    questEvents:[]
}

const rumorsOfTreasure = (quest, runId) => {
    
    const i = D4()
    if (i === 1) {
        echo('Rumors speak of a great treasure hidden in the', runId)
        const q = copyObject(quest)
        q.goalCoordinates = [1,1]

        
        return q
    } else if (quest === 2) {

    } else if (quest === 3) {

    } else {

    }

}

const rumorsOfMonster = (quest, runId) => {
    
    const i = D4()
    if (i === 1) {
        echo('Rumors speak of a dangerous monster in the south west forests. Killing travelers and attacking merchants. The party decides to investigate.', runId)
        const q = copyObject(quest)
        q.goalCoordinates = [15,5]

        
        return q
    } else if (quest === 2) {
        echo('Rumors speak of a dangerous monster in the nothern mountain. Attacking the royal mines. The party decides to investigate.', runId)
        const q = copyObject(quest)
        q.goalCoordinates = [1,5]

        
        return q
    } else if (quest === 3) {
        echo('Rumors speak of a dangerous monster in the eastern province. The party decides to investigate.', runId)
        const q = copyObject(quest)
        q.goalCoordinates = [9,16]

        
        return q
    } else {
        echo('Rumors speak of a dangerous monster in the western swamps. The party decides to investigate.', runId)
        const q = copyObject(quest)
        q.goalCoordinates = [12,3]

        
        return q
    }

}

const rumorsOfMagic = (quest, runId) => {
    const i = D4()
    if (i === 1) {
        const q = copyObject(quest)
        q.goalCoordinates = [1,1]

        echo('', runId)
        return q
    } else if (quest === 2) {

    } else if (quest === 3) {

    } else {

    }
}

const rumorsOfRuins = (quest, runId) => {
    const i = D4()
    if (i === 1) {
        echo('The party hear rumors of ', runId)
        const q = copyObject(quest)
        q.goalCoordinates = [1,1]

        
        return q
    } else if (quest === 2) {

    } else if (quest === 3) {

    } else {

    }
}

const rumorsOfLostCaravan = (quest, runId) => {
    const i = D4()
    if (i === 1) {
        const q = copyObject(quest)
        q.goalCoordinates = [1,1]

        echo('', runId)
        return q
    } else if (quest === 2) {

    } else if (quest === 3) {

    } else {

    }
}

const rumorsOfVillageInDistress = (quest, runId) => {
    const i = D4()
    if (i === 1) {
        const q = copyObject(quest)
        q.goalCoordinates = [1,1]

        echo('', runId)
        return q
    } else if (quest === 2) {

    } else if (quest === 3) {

    } else {

    }
}

const getQuest = (runId) => {
    const i = D4()
    if (i === 1) {
        const q = copyObject(quest)
        q.goalCoordinates = [1,1]

        echo('', runId)
        return q
    } else if (quest === 2) {

    } else if (quest === 3) {

    } else {

    }
}

module.exports = {
    quest
}