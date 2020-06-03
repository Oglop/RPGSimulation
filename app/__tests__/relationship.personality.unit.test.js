const { getPersonality, compabilityCheck } = require('../relationships/personality')
const { ENUM_PERSONALITY_TRAITS, ENUM_LANGUAGES } = require('../constants')

describe('relationships.personality 1', () => {
    it('should match personality traits', () => {
        const char1 = {
            personality: {
                trait: ENUM_PERSONALITY_TRAITS.egoistic,
                likes: ENUM_PERSONALITY_TRAITS.loudmouth,
                dislikes: ENUM_PERSONALITY_TRAITS.leader
            },
            languages: [{
                name: ENUM_LANGUAGES.common,
                printable: 'Common',
                skillPoints: 20
            }]
        }
        const char2 = {
            personality: {
                trait: ENUM_PERSONALITY_TRAITS.friendly,
                likes: ENUM_PERSONALITY_TRAITS.all,
                dislikes: ENUM_PERSONALITY_TRAITS.egoistic
            },
            languages: [{
                name: ENUM_LANGUAGES.common,
                printable: 'Common',
                skillPoints: 20
            }]
        }
        const i = compabilityCheck(char1, char2)
        expect(i).toBe(2);
    })

    it('should match personality traits 2', () => {
        const char1 = {
            personality: {
                trait: ENUM_PERSONALITY_TRAITS.loudmouth,
                likes: ENUM_PERSONALITY_TRAITS.meddler,
                dislikes: ENUM_PERSONALITY_TRAITS.lonewolf
            },
            languages: [{
                name: ENUM_LANGUAGES.common,
                printable: 'Common',
                skillPoints: 0
            }]
        }
        const char2 = {
            personality: {
                trait: ENUM_PERSONALITY_TRAITS.knowsItAll,
                likes: ENUM_PERSONALITY_TRAITS.lonewolf,
                dislikes: ENUM_PERSONALITY_TRAITS.stoic
            },
            languages: [{
                name: ENUM_LANGUAGES.common,
                printable: 'Common',
                skillPoints: 0
            },
            {
                name: ENUM_LANGUAGES.ancient,
                printable: 'Ancient',
                skillPoints: 20
            }]
        }
        const i = compabilityCheck(char1, char2)
        expect(i).toBe(1);
    })
})

