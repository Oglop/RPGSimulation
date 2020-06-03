const { addDay, date, printDate } = require('../world/time')
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
});