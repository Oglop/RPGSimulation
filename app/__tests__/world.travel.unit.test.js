const { move } = require('../world/travel')

const { ENUM_EXPLORE_DIR } = require('../constants')

describe('world.travel', () => {
    it('should be an instance of a function', () => {
        expect(move).toBeInstanceOf(Function)
    })
    it('should travel twice east', () => {
        var gridSize = 5;
        var grid = [];
        for (var i=0; i<gridSize; i++) {
            grid[i] = [];
            for (var j=0; j<gridSize; j++) {
                grid[i][j] = `${i}-${j}`;
            }
        }
        let party = {
            journey: [ENUM_EXPLORE_DIR.east, ENUM_EXPLORE_DIR.east],
            location: [2,2]
        }
        while (party.journey.length > 0) {
            party = move(party)
        }
        expect(grid[ party.location[0]][party.location[1]]).toBe('2-4')
    })
    it('should return to the same square', () => {
        var gridSize = 5;
        var grid = [];
        for (var i=0; i<gridSize; i++) {
            grid[i] = [];
            for (var j=0; j<gridSize; j++) {
                grid[i][j] = `${i}-${j}`;
            }
        }
        let party = {
            journey: [ENUM_EXPLORE_DIR.north, ENUM_EXPLORE_DIR.east, ENUM_EXPLORE_DIR.south, ENUM_EXPLORE_DIR.west],
            location: [2,2]
        }
        while (party.journey.length > 0) {
            party = move(party)
        }
        expect(grid[ party.location[0]][party.location[1]]).toBe('2-2')
    })
})