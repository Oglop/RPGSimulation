const { getRoom } = require('../room')
const { ENUM_BIOMES } = require('../../constants')

const setEvents = room => {

}

/**
 * Returns room with biome
 * @param {int} x 
 * @param {int} y 
 */
const room = (x, y) => {
    const r = getRoom(x, y)
    // going down
    switch (x) {
        case 0:
            //going right
            switch (y) {
                case 0: r.biome = ENUM_BIOMES.mountains; break;
                case 1: r.biome = ENUM_BIOMES.mountains; break;
                case 2: r.biome = ENUM_BIOMES.mountains; break;
                case 3: r.biome = ENUM_BIOMES.mountains; break;
                case 4: r.biome = ENUM_BIOMES.mountains; break;
                case 5: r.biome = ENUM_BIOMES.mountains; break;
                case 6: r.biome = ENUM_BIOMES.hills; break;
                case 7: r.biome = ENUM_BIOMES.hills; break;
                case 8: r.biome = ENUM_BIOMES.hills; break;
                case 9: r.biome = ENUM_BIOMES.hills; break;
                case 10: r.biome = ENUM_BIOMES.hills; break;
                case 11: r.biome = ENUM_BIOMES.hills; break;
                case 12: r.biome = ENUM_BIOMES.plains; break;
                case 13: r.biome = ENUM_BIOMES.plains; break;
                case 14: r.biome = ENUM_BIOMES.hills; break;
                case 15: r.biome = ENUM_BIOMES.hills; break;
                case 16: r.biome = ENUM_BIOMES.hills; break;
                case 17: r.biome = ENUM_BIOMES.badlands; break;
                case 18: r.biome = ENUM_BIOMES.badlands; break;
                case 19: r.biome = ENUM_BIOMES.dessert; break;
            }
        case 1:
            //going right
            switch (y) {
                case 0: r.biome = ENUM_BIOMES.mountains; break;
                case 1: r.biome = ENUM_BIOMES.mountains; break;
                case 2: r.biome = ENUM_BIOMES.mountains; break;
                case 3: r.biome = ENUM_BIOMES.hills; break;
                case 4: r.biome = ENUM_BIOMES.hills; break;
                case 5: r.biome = ENUM_BIOMES.mountains; break;
                case 6: r.biome = ENUM_BIOMES.forest; break;
                case 7: r.biome = ENUM_BIOMES.hills; break;
                case 8: r.biome = ENUM_BIOMES.hills; break;
                case 9: r.biome = ENUM_BIOMES.mountains; break;
                case 10: r.biome = ENUM_BIOMES.plains; break;
                case 11: r.biome = ENUM_BIOMES.mountains; break;
                case 12: r.biome = ENUM_BIOMES.mountains; break;
                case 13: r.biome = ENUM_BIOMES.hills; break;
                case 14: r.biome = ENUM_BIOMES.hills; break;
                case 15: r.biome = ENUM_BIOMES.plains; break;
                case 16: r.biome = ENUM_BIOMES.plains; break;
                case 17: r.biome = ENUM_BIOMES.dessert; break;
                case 18: r.biome = ENUM_BIOMES.dessert; break;
                case 19: r.biome = ENUM_BIOMES.dessert; break;
            }
        case 2: 
            switch (y) {
                case 0: r.biome = ENUM_BIOMES.mountains; break;
                case 1:  r.biome = ENUM_BIOMES.hills;  break;
                case 2:  r.biome = ENUM_BIOMES.hills; break;
                case 3: r.biome = ENUM_BIOMES.hills;  break;
                case 4: r.biome = ENUM_BIOMES.hills; break;
                case 5: r.biome = ENUM_BIOMES.badlands;  break;
                case 6: r.biome = ENUM_BIOMES.hills; break;
                case 7: r.biome = ENUM_BIOMES.hills; break;
                case 8: r.biome = ENUM_BIOMES.lake; break;
                case 9: r.biome = ENUM_BIOMES.forest; break;
                case 10: r.biome = ENUM_BIOMES.plains; break;
                case 11: r.biome = ENUM_BIOMES.plains; break;
                case 12: r.biome = ENUM_BIOMES.mountains; break;
                case 13: r.biome = ENUM_BIOMES.mountains; break;
                case 14: r.biome = ENUM_BIOMES.hills; break;
                case 15: r.biome = ENUM_BIOMES.hills; break;
                case 16: r.biome = ENUM_BIOMES.lake; break;
                case 17: r.biome = ENUM_BIOMES.lake; break;
                case 18: r.biome = ENUM_BIOMES.dessert; break;
                case 19: r.biome = ENUM_BIOMES.dessert; break;
            }
        case 3: 
            switch (y) {
                case 0: r.biome = ENUM_BIOMES.hills; break;
                case 1:  r.biome = ENUM_BIOMES.hills;  break;
                case 2:  r.biome = ENUM_BIOMES.hills; break;
                case 3: r.biome = ENUM_BIOMES.badlands;  break;
                case 4: r.biome = ENUM_BIOMES.badlands; break;
                case 5: r.biome = ENUM_BIOMES.plains;  break;
                case 6: r.biome = ENUM_BIOMES.plains; break;
                case 7: r.biome = ENUM_BIOMES.plains; break;
                case 8: r.biome = ENUM_BIOMES.forest; break;
                case 9: r.biome = ENUM_BIOMES.forest; break;
                case 10: r.biome = ENUM_BIOMES.badlands; break;
                case 11: r.biome = ENUM_BIOMES.badlands; break;
                case 12: r.biome = ENUM_BIOMES.hills; break;
                case 13: r.biome = ENUM_BIOMES.mountains; break;
                case 14: r.biome = ENUM_BIOMES.lake; break;
                case 15: r.biome = ENUM_BIOMES.mountains; break;
                case 16: r.biome = ENUM_BIOMES.hills; break;
                case 17: r.biome = ENUM_BIOMES.lake; break;
                case 18: r.biome = ENUM_BIOMES.dessert; break;
                case 19: r.biome = ENUM_BIOMES.badlands; break;
            }
        case 4: 
            switch (y) {
                case 0: r.biome = ENUM_BIOMES.hills; break;
                case 1:  r.biome = ENUM_BIOMES.hills;  break;
                case 2:  r.biome = ENUM_BIOMES.badlands; break;
                case 3: r.biome = ENUM_BIOMES.plains;  break;
                case 4: r.biome = ENUM_BIOMES.plains; break;
                case 5: r.biome = ENUM_BIOMES.lake;  break;
                case 6: r.biome = ENUM_BIOMES.lake; break;
                case 7: r.biome = ENUM_BIOMES.plains; break;
                case 8: r.biome = ENUM_BIOMES.plains; break;
                case 9: r.biome = ENUM_BIOMES.badlands; break;
                case 10: r.biome = ENUM_BIOMES.badlands; break;
                case 11: r.biome = ENUM_BIOMES.lake; break;
                case 12: r.biome = ENUM_BIOMES.lake; break;
                case 13: r.biome = ENUM_BIOMES.lake; break;
                case 14: r.biome = ENUM_BIOMES.lake; break;
                case 15: r.biome = ENUM_BIOMES.hills; break;
                case 16: r.biome = ENUM_BIOMES.plains; break;
                case 17: r.biome = ENUM_BIOMES.plains; break;
                case 18: r.biome = ENUM_BIOMES.badlands; break;
                case 19: r.biome = ENUM_BIOMES.badlands; break;
            }
        case 5: 
            switch (y) {
                case 0: r.biome = ENUM_BIOMES.badlands; break;
                case 1:  r.biome = ENUM_BIOMES.badlands;  break;
                case 2:  r.biome = ENUM_BIOMES.plains; break;
                case 3: r.biome = ENUM_BIOMES.plains;  break;
                case 4: r.biome = ENUM_BIOMES.plains; break;
                case 5: r.biome = ENUM_BIOMES.lake;  break;
                case 6: r.biome = ENUM_BIOMES.lake; break;
                case 7: r.biome = ENUM_BIOMES.plains; break;
                case 8: r.biome = ENUM_BIOMES.plains; break;
                case 9: r.biome = ENUM_BIOMES.plains; break;
                case 10: r.biome = ENUM_BIOMES.badlands; break;
                case 11: r.biome = ENUM_BIOMES.plains; break;
                case 12: r.biome = ENUM_BIOMES.plains; break;
                case 13: r.biome = ENUM_BIOMES.plains; break;
                case 14: r.biome = ENUM_BIOMES.hills; break;
                case 15: r.biome = ENUM_BIOMES.plains; break;
                case 16: r.biome = ENUM_BIOMES.plains; break;
                case 17: r.biome = ENUM_BIOMES.plains; break;
                case 18: r.biome = ENUM_BIOMES.plains; break;
                case 19: r.biome = ENUM_BIOMES.badlands; break;
            }
        case 6: 
            switch (y) {
                case 0: r.biome = ENUM_BIOMES.badlands; break;
                case 1:  r.biome = ENUM_BIOMES.plains;  break;
                case 2:  r.biome = ENUM_BIOMES.plains; break;
                case 3: r.biome = ENUM_BIOMES.plains;  break;
                case 4: r.biome = ENUM_BIOMES.plains; break;
                case 5: r.biome = ENUM_BIOMES.lake;  break;
                case 6: r.biome = ENUM_BIOMES.hills; break;
                case 7: r.biome = ENUM_BIOMES.hills; break;
                case 8: r.biome = ENUM_BIOMES.plains; break;
                case 9: r.biome = ENUM_BIOMES.plains; break;
                case 10: r.biome = ENUM_BIOMES.plains; break;
                case 11: r.biome = ENUM_BIOMES.plains; break;
                case 12: r.biome = ENUM_BIOMES.plains; break;
                case 13: r.biome = ENUM_BIOMES.lake; break;
                case 14: r.biome = ENUM_BIOMES.plains; break;
                case 15: r.biome = ENUM_BIOMES.plains; break;
                case 16: r.biome = ENUM_BIOMES.plains; break;
                case 17: r.biome = ENUM_BIOMES.plains; break;
                case 18: r.biome = ENUM_BIOMES.plains; break;
                case 19: r.biome = ENUM_BIOMES.badlands; break;
            }
        case 7: 
            switch (y) {
                case 0: r.biome = ENUM_BIOMES.plains; break;
                case 1:  r.biome = ENUM_BIOMES.forest;  break;
                case 2:  r.biome = ENUM_BIOMES.plains; break;
                case 3: r.biome = ENUM_BIOMES.forest;  break;
                case 4: r.biome = ENUM_BIOMES.lake; break;
                case 5: r.biome = ENUM_BIOMES.mountains;  break;
                case 6: r.biome = ENUM_BIOMES.mountains; break;
                case 7: r.biome = ENUM_BIOMES.hills; break;
                case 8: r.biome = ENUM_BIOMES.forest; break;
                case 9: r.biome = ENUM_BIOMES.forest; break;
                case 10: r.biome = ENUM_BIOMES.plains; break;
                case 11: r.biome = ENUM_BIOMES.plains; break;
                case 12: r.biome = ENUM_BIOMES.plains; break;
                case 13: r.biome = ENUM_BIOMES.plains; break;
                case 14: r.biome = ENUM_BIOMES.plains; break;
                case 15: r.biome = ENUM_BIOMES.plains; break;
                case 16: r.biome = ENUM_BIOMES.plains; break;
                case 17: r.biome = ENUM_BIOMES.swamp; break;
                case 18: r.biome = ENUM_BIOMES.swamp; break;
                case 19: r.biome = ENUM_BIOMES.forest; break;
            }
        case 8: 
            switch (y) {
                case 0: r.biome = ENUM_BIOMES.plains; break;
                case 1:  r.biome = ENUM_BIOMES.plains;  break;
                case 2:  r.biome = ENUM_BIOMES.plains; break;
                case 3: r.biome = ENUM_BIOMES.plains;  break;
                case 4: r.biome = ENUM_BIOMES.plains; break;
                case 5: r.biome = ENUM_BIOMES.plains;  break;
                case 6: r.biome = ENUM_BIOMES.hills; break;
                case 7: r.biome = ENUM_BIOMES.plains; break;
                case 8: r.biome = ENUM_BIOMES.forest; break;
                case 9: r.biome = ENUM_BIOMES.plains; break;
                case 10: r.biome = ENUM_BIOMES.plains; break;
                case 11: r.biome = ENUM_BIOMES.plains; break;
                case 12: r.biome = ENUM_BIOMES.plains; break;
                case 13: r.biome = ENUM_BIOMES.forest; break;
                case 14: r.biome = ENUM_BIOMES.forest; break;
                case 15: r.biome = ENUM_BIOMES.lake; break;
                case 16: r.biome = ENUM_BIOMES.lake; break;
                case 17: r.biome = ENUM_BIOMES.forest; break;
                case 18: r.biome = ENUM_BIOMES.lake; break;
                case 19: r.biome = ENUM_BIOMES.lake; break;
            }
        case 9: 
            switch (y) {
                case 0: r.biome = ENUM_BIOMES.lake; break;
                case 1:  r.biome = ENUM_BIOMES.plains;  break;
                case 2:  r.biome = ENUM_BIOMES.plains; break;
                case 3: r.biome = ENUM_BIOMES.lake;  break;
                case 4: r.biome = ENUM_BIOMES.plains; break;
                case 5: r.biome = ENUM_BIOMES.forest;  break;
                case 6: r.biome = ENUM_BIOMES.forest; break;
                case 7: r.biome = ENUM_BIOMES.forest; break;
                case 8: r.biome = ENUM_BIOMES.plains; break;
                case 9: r.biome = ENUM_BIOMES.plains; break;
                case 10: r.biome = ENUM_BIOMES.plains; break;
                case 11: r.biome = ENUM_BIOMES.plains; break;
                case 12: r.biome = ENUM_BIOMES.plains; break;
                case 13: r.biome = ENUM_BIOMES.lake; break;
                case 14: r.biome = ENUM_BIOMES.lake; break;
                case 15: r.biome = ENUM_BIOMES.hills; break;
                case 16: r.biome = ENUM_BIOMES.forest; break;
                case 17: r.biome = ENUM_BIOMES.forest; break;
                case 18: r.biome = ENUM_BIOMES.plains; break;
                case 19: r.biome = ENUM_BIOMES.lake; break;
            }
    }
    return r
}

module.exports = { room }