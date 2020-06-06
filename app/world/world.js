const {} = require('./factorys/roomFactory')
const {} = require('./room')
const {ENUM_EXPLORE_DIR, ENUM_EXPLORE_STATUS} = require('../constants') 

const buildWorld = () => {
    var gridSize = 20;
    var grid = [];
    for (var i=0; i<gridSize; i++) {
      grid[i] = [];
      for (var j=0; j<gridSize; j++) {
        grid[i][j] = ENUM_EXPLORE_STATUS.empty;
      }
    }
    
    // Think of the first index as "distance from the top row"
    // Think of the second index as "distance from the left-most column"
    
    // This is how we would represent the grid with obstacles above
    // [y][x]
    grid[1][1] = ENUM_EXPLORE_STATUS.obstacle;
    grid[1][2] = ENUM_EXPLORE_STATUS.obstacle;

    grid[2][8] = ENUM_EXPLORE_STATUS.obstacle;
    grid[2][16] = ENUM_EXPLORE_STATUS.obstacle;
    grid[2][17] = ENUM_EXPLORE_STATUS.obstacle;

    grid[3][14] = ENUM_EXPLORE_STATUS.obstacle;
    grid[3][17] = ENUM_EXPLORE_STATUS.obstacle;

    grid[4][5] = ENUM_EXPLORE_STATUS.obstacle;
    grid[4][6] = ENUM_EXPLORE_STATUS.obstacle;
    grid[4][11] = ENUM_EXPLORE_STATUS.obstacle;
    grid[4][12] = ENUM_EXPLORE_STATUS.obstacle;
    grid[4][13] = ENUM_EXPLORE_STATUS.obstacle;
    grid[4][14] = ENUM_EXPLORE_STATUS.obstacle;

    grid[5][5] = ENUM_EXPLORE_STATUS.obstacle;
    grid[5][13] = ENUM_EXPLORE_STATUS.obstacle;
    grid[5][14] = ENUM_EXPLORE_STATUS.obstacle;

    grid[6][4] = ENUM_EXPLORE_STATUS.obstacle;
    grid[6][13] = ENUM_EXPLORE_STATUS.obstacle;

    grid[7][4] = ENUM_EXPLORE_STATUS.obstacle;

    grid[8][15] = ENUM_EXPLORE_STATUS.obstacle;
    grid[8][16] = ENUM_EXPLORE_STATUS.obstacle;
    grid[8][18] = ENUM_EXPLORE_STATUS.obstacle;
    grid[8][19] = ENUM_EXPLORE_STATUS.obstacle;

    grid[9][3] = ENUM_EXPLORE_STATUS.obstacle;
    grid[9][13] = ENUM_EXPLORE_STATUS.obstacle;
    grid[9][14] = ENUM_EXPLORE_STATUS.obstacle;
    grid[9][19] = ENUM_EXPLORE_STATUS.obstacle;

    grid[10][0] = ENUM_EXPLORE_STATUS.obstacle;
    grid[10][1] = ENUM_EXPLORE_STATUS.obstacle;

    grid[11][0] = ENUM_EXPLORE_STATUS.obstacle;
    grid[11][1] = ENUM_EXPLORE_STATUS.obstacle;
    grid[11][8] = ENUM_EXPLORE_STATUS.obstacle;

    grid[12][0] = ENUM_EXPLORE_STATUS.obstacle;
    grid[12][1] = ENUM_EXPLORE_STATUS.obstacle;
    grid[12][2] = ENUM_EXPLORE_STATUS.obstacle;

    grid[13][1] = ENUM_EXPLORE_STATUS.obstacle;
    grid[13][2] = ENUM_EXPLORE_STATUS.obstacle;
    grid[13][14] = ENUM_EXPLORE_STATUS.obstacle;
    grid[13][19] = ENUM_EXPLORE_STATUS.obstacle;

    grid[14][2] = ENUM_EXPLORE_STATUS.obstacle;
    grid[14][3] = ENUM_EXPLORE_STATUS.obstacle;
    grid[14][4] = ENUM_EXPLORE_STATUS.obstacle;
    grid[14][13] = ENUM_EXPLORE_STATUS.obstacle;
    grid[14][18] = ENUM_EXPLORE_STATUS.obstacle;

    grid[15][12] = ENUM_EXPLORE_STATUS.obstacle;

    grid[16][5] = ENUM_EXPLORE_STATUS.obstacle;
    grid[16][6] = ENUM_EXPLORE_STATUS.obstacle;
    grid[16][10] = ENUM_EXPLORE_STATUS.obstacle;
    grid[16][11] = ENUM_EXPLORE_STATUS.obstacle;

    grid[17][4] = ENUM_EXPLORE_STATUS.obstacle;
    grid[17][8] = ENUM_EXPLORE_STATUS.obstacle;

    grid[18][10] = ENUM_EXPLORE_STATUS.obstacle;

    grid[18][9] = ENUM_EXPLORE_STATUS.obstacle;

    return grid
}

module.exports = {
    buildWorld
}