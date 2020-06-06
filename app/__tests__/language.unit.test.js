const { languageCheck, testLangauge, tryToUnderstandEachOther } = require('../language/languages')
const { ENUM_LANGUAGES, ENUM_RACE_NAMES, ENUM_JOB_NAMES, ENUM_STAT_NAMES } = require('../constants')
jest.mock('../lib/dice')

/*
const mockMath = Object.create(global.Math);
mockMath.random = () => 0.5;
global.Math = mockMath;
 */


describe('language.languages', () => {
    it('should be an instance of a function', () => {
        expect(languageCheck).toBeInstanceOf(Function)
    })
    it('should be an instance of a function', () => {
        expect(testLangauge).toBeInstanceOf(Function)
    })
    it('should be an instance of a function', () => {
        expect(tryToUnderstandEachOther).toBeInstanceOf(Function)
    })
    /* it('should be truthy when character understand easch other', () => {
        const lang1 = {
            name: ENUM_LANGUAGES.common,
            printable: 'Common',
            skillPoints: 20
        }
        const lang2 = {
            name: ENUM_LANGUAGES.common,
            printable: 'Common',
            skillPoints: 20
        }
        expect(testLangauge(lang1,lang2)).toBe(true)

    })
    it('should be falsy when character do not understand easch other', () => {
        const lang1 = {
            name: ENUM_LANGUAGES.common,
            printable: 'Common',
            skillPoints: 0
        }
        const lang2 = {
            name: ENUM_LANGUAGES.common,
            printable: 'Common',
            skillPoints: 0
        }
        expect(testLangauge(lang1,lang2)).toBe(false)
    })
    */
})