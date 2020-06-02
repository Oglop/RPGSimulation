const { echo } = require('../lib/utils')
const { ENUM_SEASONS } = require('../constants')

const months = [
    { name:'Ice', numberOfDays: 21, season: ENUM_SEASONS.winter },
    { name:'Waiting', numberOfDays: 20, season: ENUM_SEASONS.winter },
    { name:'Sun', numberOfDays: 21, season: ENUM_SEASONS.spring },
    { name:'Water', numberOfDays: 20, season: ENUM_SEASONS.spring },
    { name:'Wood', numberOfDays: 19, season: ENUM_SEASONS.spring },
    { name:'Light', numberOfDays: 21, season: ENUM_SEASONS.summer },
    { name:'Dragon', numberOfDays: 20, season: ENUM_SEASONS.summer },
    { name:'Fire', numberOfDays: 21, season: ENUM_SEASONS.summer },
    { name:'Steel', numberOfDays: 20, season: ENUM_SEASONS.fall },
    { name:'Stone', numberOfDays: 21, season: ENUM_SEASONS.fall },
    { name:'Moon', numberOfDays: 20, season: ENUM_SEASONS.fall },
    { name:'Darkness', numberOfDays: 21, season: ENUM_SEASONS.winter }
]

const date = {
    year: 1001,
    month: 2,
    day: 1
}
/**
 * Adds one day to a date object
 * @param {object} date 
 */
const addDay = date => {
    date.day += 1
    if(date.day > months[date.month].numberOfDays) { 
        date.month += 1
        date.day = 1
    }
    if(date.month > months.length) {
        date.year += 1
        date.month = 1
        date.day = 1
    }
}
/**
 * echos date object
 * @param {object} date 
 */
const printDate = date => {
    echo(`${months[date.month].season} of ${date.year}, day ${date.day} in the month of ${months[date.month].name}`)
}

module.exports = {
    date, addDay, printDate
}