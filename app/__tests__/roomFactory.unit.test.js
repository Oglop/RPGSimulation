const { room } = require('../world/factorys/roomFactory')
const { ENUM_BIOMES, ENUM_SKILL_NAMES } = require('../constants')

describe('world.factorys.roomfactories', () => {
    it('should should be a mountain', () => {
        const r = room(0, 0)
        expect(r.biome).toBe(ENUM_BIOMES.mountains)
    })
    it('should be plains and have hunting skill check', () => {
        const r = room(12, 12)
        expect(r.biome).toBe(ENUM_BIOMES.plains)
        expect(r.skillChecks[0].skill).toBe(ENUM_SKILL_NAMES.hunting)
    })
})