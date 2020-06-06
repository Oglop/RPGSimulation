const { getPercetage, copyObject } = require('../lib/utils')

describe('lib/util', () => {
    it('should return 50 percent', () => {
        const p = getPercetage(100, 50)
        expect(p).toBe(50)
    })
    it('should return 25 percent', () => {
        const p = getPercetage(80, 20)
        expect(p).toBe(25)
    })
    it('should return a copy of the original object', () => {
        const o1 = {
            status:'foo'
        }
        const o2 = copyObject(o1)
        o2.status = 'bar'
        expect(o1.status).toBe('foo')
        expect(o2.status).toBe('bar')
    })
})