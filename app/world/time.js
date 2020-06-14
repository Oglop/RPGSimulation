const { echo } = require('../lib/utils')
const { ENUM_SEASONS } = require('../constants')

/**
 * Months year is 245 days
 */
const months = [
    { name:'Ice', numberOfDays: 21, season: ENUM_SEASONS.winter },
    { name:'Wind', numberOfDays: 20, season: ENUM_SEASONS.winter },
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
    if(date.day > months[date.month - 1].numberOfDays) { 
        date.month += 1
        date.day = 1
    }
    if(date.month >= months.length) {
        date.year += 1
        date.month = 1
        date.day = 1
    }
}
/**
 * 
 * @param {object} startDate 
 * @param {object} currentDate 
 */
const yearsPassed = (startDate, currentDate) => {
    let daysPassed = 0
    const yearDiff = currentDate.year - startDate.year
    daysPassed += yearDiff * 245
    const monthDiff = currentDate.month - startDate.month
    // if we are after start month add days until we are at the same month
    if (monthDiff > 0) {
        for (let i = startDate.month - 1; i < currentDate.month -1; i++) {
            if ( i < currentDate.month -1) {
                daysPassed += months[i].numberOfDays
            } else {
                break
            }
        }
    } else if (monthDiff < 0) {
        daysPassed -= 245
        for (let i = 0; i < currentDate.month - 1; i++) {
            if (i < currentDate.month -1) {
                daysPassed += months[i].numberOfDays
            } else {
                break
            }
        } 
    }
    daysPassed += currentDate.day
    const yy = (daysPassed >= 245) ? Math.floor(daysPassed / 245) : 0
    return yy
}
/**
 * echos date object
 * @param {object} date 
 */
const printDate = (date, runId) => {
    echo(`${months[date.month -1].season} of ${date.year}, day ${date.day} in the month of ${months[date.month -1].name}`, runId)
}

const getSeason = (date) => {
    return months[date.month - 1].season
}

module.exports = {
    date, addDay, printDate, yearsPassed, getSeason
}