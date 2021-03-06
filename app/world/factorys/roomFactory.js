const { getRoom } = require('../room')
const { ENUM_BIOMES, ENUM_BIOME_DESCRIPTIONS, ENUM_SKILL_NAMES } = require('../../constants')

const setEvents = room => {
    if (room.biome === ENUM_BIOMES.badlands) {
        room.description = ENUM_BIOME_DESCRIPTIONS.badlands
        room.skillChecks = [
            {
                skill: ENUM_SKILL_NAMES.hunting
            }
        ]
        
           
    }
    if (room.biome === ENUM_BIOMES.dessert) {
        room.description = ENUM_BIOME_DESCRIPTIONS.dessert
    }
    if (room.biome === ENUM_BIOMES.forest) {
        room.description = ENUM_BIOME_DESCRIPTIONS.forest
        room.skillChecks = [
            {
                skill: ENUM_SKILL_NAMES.hunting
            }
        ]
    }
    if (room.biome === ENUM_BIOMES.hills) {
        room.description = ENUM_BIOME_DESCRIPTIONS.hills
        room.skillChecks = [
            {
                skill: ENUM_SKILL_NAMES.hunting
            }
        ]
    }
    if (room.biome === ENUM_BIOMES.lake) {
        room.description = ENUM_BIOME_DESCRIPTIONS.lake
    }
    if (room.biome === ENUM_BIOMES.mountains) {
        room.description = ENUM_BIOME_DESCRIPTIONS.mountains
    }
    if (room.biome === ENUM_BIOMES.plains) {
        room.description = ENUM_BIOME_DESCRIPTIONS.plains
        room.skillChecks = [
            {
                skill: ENUM_SKILL_NAMES.hunting
            }
        ]
    }
    if (room.biome === ENUM_BIOMES.swamp) {
        room.description = ENUM_BIOME_DESCRIPTIONS.swamp
    }
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
            break;
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
            break;
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
            break;
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
            break;
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
            break;
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
            break;
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
            break;
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
            break;
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
            break;
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
            break;
        case 10: 
            switch (y) {
                case 0: r.biome = ENUM_BIOMES.lake; break;
                case 1:  r.biome = ENUM_BIOMES.lake;  break;
                case 2:  r.biome = ENUM_BIOMES.plains; break;
                case 3: r.biome = ENUM_BIOMES.plains;  break;
                case 4: r.biome = ENUM_BIOMES.plains; break;
                case 5: r.biome = ENUM_BIOMES.plains;  break;
                case 6: r.biome = ENUM_BIOMES.plains; break;
                case 7: r.biome = ENUM_BIOMES.plains; break;
                case 8: r.biome = ENUM_BIOMES.mountains; break;
                case 9: r.biome = ENUM_BIOMES.plains; break;
                case 10: r.biome = ENUM_BIOMES.forest; break;
                case 11: r.biome = ENUM_BIOMES.plains; break;
                case 12: r.biome = ENUM_BIOMES.plains; break;
                case 13: r.biome = ENUM_BIOMES.plains; break;
                case 14: r.biome = ENUM_BIOMES.plains; break;
                case 15: r.biome = ENUM_BIOMES.plains; break;
                case 16: r.biome = ENUM_BIOMES.plains; break;
                case 17: r.biome = ENUM_BIOMES.mountains; break;
                case 18: r.biome = ENUM_BIOMES.plains; break;
                case 19: r.biome = ENUM_BIOMES.forest; break;
            }
            break;
        case 11: 
            switch (y) {
                case 0: r.biome = ENUM_BIOMES.lake; break;
                case 1:  r.biome = ENUM_BIOMES.lake;  break;
                case 2:  r.biome = ENUM_BIOMES.swamp; break;
                case 3: r.biome = ENUM_BIOMES.swamp;  break;
                case 4: r.biome = ENUM_BIOMES.swamp; break;
                case 5: r.biome = ENUM_BIOMES.forest;  break;
                case 6: r.biome = ENUM_BIOMES.plains; break;
                case 7: r.biome = ENUM_BIOMES.plains; break;
                case 8: r.biome = ENUM_BIOMES.mountains; break;
                case 9: r.biome = ENUM_BIOMES.mountains; break;
                case 10: r.biome = ENUM_BIOMES.hills; break;
                case 11: r.biome = ENUM_BIOMES.plains; break;
                case 12: r.biome = ENUM_BIOMES.plains; break;
                case 13: r.biome = ENUM_BIOMES.forest; break;
                case 14: r.biome = ENUM_BIOMES.forest; break;
                case 15: r.biome = ENUM_BIOMES.plains; break;
                case 16: r.biome = ENUM_BIOMES.plains; break;
                case 17: r.biome = ENUM_BIOMES.plains; break;
                case 18: r.biome = ENUM_BIOMES.plains; break;
                case 19: r.biome = ENUM_BIOMES.mountains; break;
            }
            break;
        case 12: 
            switch (y) {
                case 0: r.biome = ENUM_BIOMES.lake; break;
                case 1:  r.biome = ENUM_BIOMES.lake;  break;
                case 2:  r.biome = ENUM_BIOMES.lake; break;
                case 3: r.biome = ENUM_BIOMES.swamp;  break;
                case 4: r.biome = ENUM_BIOMES.swamp; break;
                case 5: r.biome = ENUM_BIOMES.forest;  break;
                case 6: r.biome = ENUM_BIOMES.forest; break;
                case 7: r.biome = ENUM_BIOMES.plains; break;
                case 8: r.biome = ENUM_BIOMES.forest; break;
                case 9: r.biome = ENUM_BIOMES.forest; break;
                case 10: r.biome = ENUM_BIOMES.hills; break;
                case 11: r.biome = ENUM_BIOMES.plains; break;
                case 12: r.biome = ENUM_BIOMES.plains; break;
                case 13: r.biome = ENUM_BIOMES.forest; break;
                case 14: r.biome = ENUM_BIOMES.forest; break;
                case 15: r.biome = ENUM_BIOMES.mountains; break;
                case 16: r.biome = ENUM_BIOMES.plains; break;
                case 17: r.biome = ENUM_BIOMES.plains; break;
                case 18: r.biome = ENUM_BIOMES.mountains; break;
                case 19: r.biome = ENUM_BIOMES.mountains; break;
            }
            break;
        case 13: 
            switch (y) {
                case 0: r.biome = ENUM_BIOMES.swamp; break;
                case 1:  r.biome = ENUM_BIOMES.lake;  break;
                case 2:  r.biome = ENUM_BIOMES.lake; break;
                case 3: r.biome = ENUM_BIOMES.swamp;  break;
                case 4: r.biome = ENUM_BIOMES.plains; break;
                case 5: r.biome = ENUM_BIOMES.plains;  break;
                case 6: r.biome = ENUM_BIOMES.forest; break;
                case 7: r.biome = ENUM_BIOMES.forest; break;
                case 8: r.biome = ENUM_BIOMES.plains; break;
                case 9: r.biome = ENUM_BIOMES.plains; break;
                case 10: r.biome = ENUM_BIOMES.plains; break;
                case 11: r.biome = ENUM_BIOMES.plains; break;
                case 12: r.biome = ENUM_BIOMES.plains; break;
                case 13: r.biome = ENUM_BIOMES.mountains; break;
                case 14: r.biome = ENUM_BIOMES.mountains; break;
                case 15: r.biome = ENUM_BIOMES.plains; break;
                case 16: r.biome = ENUM_BIOMES.plains; break;
                case 17: r.biome = ENUM_BIOMES.plains; break;
                case 18: r.biome = ENUM_BIOMES.badlands; break;
                case 19: r.biome = ENUM_BIOMES.mountains; break;
            }
            break;
        case 14: 
            switch (y) {
                case 0: r.biome = ENUM_BIOMES.swamp; break;
                case 1:  r.biome = ENUM_BIOMES.swamp;  break;
                case 2:  r.biome = ENUM_BIOMES.lake; break;
                case 3: r.biome = ENUM_BIOMES.lake;  break;
                case 4: r.biome = ENUM_BIOMES.lake; break;
                case 5: r.biome = ENUM_BIOMES.plains;  break;
                case 6: r.biome = ENUM_BIOMES.hills; break;
                case 7: r.biome = ENUM_BIOMES.hills; break;
                case 8: r.biome = ENUM_BIOMES.plains; break;
                case 9: r.biome = ENUM_BIOMES.plains; break;
                case 10: r.biome = ENUM_BIOMES.plains; break;
                case 11: r.biome = ENUM_BIOMES.hills; break;
                case 12: r.biome = ENUM_BIOMES.hills; break;
                case 13: r.biome = ENUM_BIOMES.mountains; break;
                case 14: r.biome = ENUM_BIOMES.badlands; break;
                case 15: r.biome = ENUM_BIOMES.plains; break;
                case 16: r.biome = ENUM_BIOMES.badlands; break;
                case 17: r.biome = ENUM_BIOMES.badlands; break;
                case 18: r.biome = ENUM_BIOMES.badlands; break;
                case 19: r.biome = ENUM_BIOMES.badlands; break;
            }
            break;
        case 15: 
            switch (y) {
                case 0: r.biome = ENUM_BIOMES.swamp; break;
                case 1:  r.biome = ENUM_BIOMES.swamp;  break;
                case 2:  r.biome = ENUM_BIOMES.forest; break;
                case 3: r.biome = ENUM_BIOMES.forest;  break;
                case 4: r.biome = ENUM_BIOMES.forest; break;
                case 5: r.biome = ENUM_BIOMES.forest;  break;
                case 6: r.biome = ENUM_BIOMES.forest; break;
                case 7: r.biome = ENUM_BIOMES.forest; break;
                case 8: r.biome = ENUM_BIOMES.plains; break;
                case 9: r.biome = ENUM_BIOMES.hills; break;
                case 10: r.biome = ENUM_BIOMES.mountains; break;
                case 11: r.biome = ENUM_BIOMES.hills; break;
                case 12: r.biome = ENUM_BIOMES.mountains; break;
                case 13: r.biome = ENUM_BIOMES.badlands; break;
                case 14: r.biome = ENUM_BIOMES.badlands; break;
                case 15: r.biome = ENUM_BIOMES.badlands; break;
                case 16: r.biome = ENUM_BIOMES.badlands; break;
                case 17: r.biome = ENUM_BIOMES.badlands; break;
                case 18: r.biome = ENUM_BIOMES.dessert; break;
                case 19: r.biome = ENUM_BIOMES.badlands; break;
            }
            break;
        case 16: 
            switch (y) {
                case 0: r.biome = ENUM_BIOMES.forest; break;
                case 1:  r.biome = ENUM_BIOMES.forest;  break;
                case 2:  r.biome = ENUM_BIOMES.plains; break;
                case 3: r.biome = ENUM_BIOMES.forest;  break;
                case 4: r.biome = ENUM_BIOMES.mountains; break;
                case 5: r.biome = ENUM_BIOMES.mountains;  break;
                case 6: r.biome = ENUM_BIOMES.forest; break;
                case 7: r.biome = ENUM_BIOMES.plains; break;
                case 8: r.biome = ENUM_BIOMES.forest; break;
                case 9: r.biome = ENUM_BIOMES.forest; break;
                case 10: r.biome = ENUM_BIOMES.mountains; break;
                case 11: r.biome = ENUM_BIOMES.mountains; break;
                case 12: r.biome = ENUM_BIOMES.badlands; break;
                case 13: r.biome = ENUM_BIOMES.badlands; break;
                case 14: r.biome = ENUM_BIOMES.badlands; break;
                case 15: r.biome = ENUM_BIOMES.dessert; break;
                case 16: r.biome = ENUM_BIOMES.dessert; break;
                case 17: r.biome = ENUM_BIOMES.dessert; break;
                case 18: r.biome = ENUM_BIOMES.dessert; break;
                case 19: r.biome = ENUM_BIOMES.dessert; break;
            }
            break;
        case 17: 
            switch (y) {
                case 0: r.biome = ENUM_BIOMES.plains; break;
                case 1:  r.biome = ENUM_BIOMES.forest;  break;
                case 2:  r.biome = ENUM_BIOMES.plains; break;
                case 3: r.biome = ENUM_BIOMES.forest;  break;
                case 4: r.biome = ENUM_BIOMES.mountains; break;
                case 5: r.biome = ENUM_BIOMES.forest;  break;
                case 6: r.biome = ENUM_BIOMES.forest; break;
                case 7: r.biome = ENUM_BIOMES.plains; break;
                case 8: r.biome = ENUM_BIOMES.plains; break;
                case 9: r.biome = ENUM_BIOMES.hills; break;
                case 10: r.biome = ENUM_BIOMES.forest; break;
                case 11: r.biome = ENUM_BIOMES.forest; break;
                case 12: r.biome = ENUM_BIOMES.badlands; break;
                case 13: r.biome = ENUM_BIOMES.badlands; break;
                case 14: r.biome = ENUM_BIOMES.dessert; break;
                case 15: r.biome = ENUM_BIOMES.dessert; break;
                case 16: r.biome = ENUM_BIOMES.dessert; break;
                case 17: r.biome = ENUM_BIOMES.dessert; break;
                case 18: r.biome = ENUM_BIOMES.dessert; break;
                case 19: r.biome = ENUM_BIOMES.dessert; break;
            }
            break;
        case 18: 
            switch (y) {
                case 0: r.biome = ENUM_BIOMES.plains; break;
                case 1:  r.biome = ENUM_BIOMES.plains;  break;
                case 2:  r.biome = ENUM_BIOMES.plains; break;
                case 3: r.biome = ENUM_BIOMES.hills;  break;
                case 4: r.biome = ENUM_BIOMES.hills; break;
                case 5: r.biome = ENUM_BIOMES.forest;  break;
                case 6: r.biome = ENUM_BIOMES.forest; break;
                case 7: r.biome = ENUM_BIOMES.plains; break;
                case 8: r.biome = ENUM_BIOMES.forest; break;
                case 9: r.biome = ENUM_BIOMES.forest; break;
                case 10: r.biome = ENUM_BIOMES.mountains; break;
                case 11: r.biome = ENUM_BIOMES.badlands; break;
                case 12: r.biome = ENUM_BIOMES.badlands; break;
                case 13: r.biome = ENUM_BIOMES.dessert; break;
                case 14: r.biome = ENUM_BIOMES.dessert; break;
                case 15: r.biome = ENUM_BIOMES.dessert; break;
                case 16: r.biome = ENUM_BIOMES.dessert; break;
                case 17: r.biome = ENUM_BIOMES.dessert; break;
                case 18: r.biome = ENUM_BIOMES.dessert; break;
                case 19: r.biome = ENUM_BIOMES.dessert; break;
            }
            break;
        case 19: 
            switch (y) {
                case 0: r.biome = ENUM_BIOMES.forest; break;
                case 1:  r.biome = ENUM_BIOMES.forest;  break;
                case 2:  r.biome = ENUM_BIOMES.plains; break;
                case 3: r.biome = ENUM_BIOMES.plains;  break;
                case 4: r.biome = ENUM_BIOMES.forest; break;
                case 5: r.biome = ENUM_BIOMES.forest;  break;
                case 6: r.biome = ENUM_BIOMES.forest; break;
                case 7: r.biome = ENUM_BIOMES.forest; break;
                case 8: r.biome = ENUM_BIOMES.forest; break;
                case 9: r.biome = ENUM_BIOMES.forest; break;
                case 10: r.biome = ENUM_BIOMES.mountains; break;
                case 11: r.biome = ENUM_BIOMES.badlands; break;
                case 12: r.biome = ENUM_BIOMES.dessert; break;
                case 13: r.biome = ENUM_BIOMES.dessert; break;
                case 14: r.biome = ENUM_BIOMES.dessert; break;
                case 15: r.biome = ENUM_BIOMES.dessert; break;
                case 16: r.biome = ENUM_BIOMES.dessert; break;
                case 17: r.biome = ENUM_BIOMES.dessert; break;
                case 18: r.biome = ENUM_BIOMES.dessert; break;
                case 19: r.biome = ENUM_BIOMES.dessert; break;
            }
            break;
    }
    setEvents(r)
    return r
}

module.exports = { room }