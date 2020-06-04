const { addDay, date, printDate, yearsPassed } = require('../world/time')
const { copyObject } = require('../lib/utils')

describe('world.time', () => {
    it('should add 1 day', () => {
        const d = copyObject(date)
        d.day = 1
        addDay(d)
        expect(d.day).toBe(2)
    })
    it('should add 1 month', () => {
        const d = copyObject(date)
        d.day = 21
        d.month = 1
        addDay(d)
        expect(d.day).toBe(1)
        expect(d.month).toBe(2)
    })
    it('should add 1 year', () => {
        const d = copyObject(date)
        d.day = 21
        d.month = 11
        d.year = 1000
        addDay(d)
        expect(d.month).toBe(1)
        expect(d.year).toBe(1001)
    })
    it('should add 10 day', () => {
        const d = copyObject(date)
        d.day = 20
        d.month = 1
        for (let i = 0; i<10; i++) {
            addDay(d)
        }
        expect(d.month).toBe(2)
        expect(d.day).toBe(9)
    })
    it('should return 0 if a year hasn´t passed', () => {
        const startdate = {
            year: 1001,
            month: 2,
            day: 1
        }
        const currentdate = {
            year: 1001,
            month: 4,
            day: 1
        }
        const i = yearsPassed(startdate, currentdate)
        expect(i).toBe(0)
    })
    it('should return 0 if a year hasn´t passed month before', () => {
        const startdate = {
            year: 1001,
            month: 5,
            day: 1
        }
        const currentdate = {
            year: 1002,
            month: 4,
            day: 18
        }
        const i = yearsPassed(startdate, currentdate)
        expect(i).toBe(0)
    })
    it('should return 1 if a year has passed', () => {
        const startdate = {
            year: 1001,
            month: 2,
            day: 1
        }
        const currentdate = {
            year: 1002,
            month: 3,
            day: 7
        }
        const i = yearsPassed(startdate, currentdate)
        expect(i).toBe(1)
    })
    it('should return 3 if three years has passed', () => {
        const startdate = {
            year: 1001,
            month: 2,
            day: 1
        }
        const currentdate = {
            year: 1005,
            month: 1,
            day: 7
        }
        const i = yearsPassed(startdate, currentdate)
        expect(i).toBe(3)
    })
});