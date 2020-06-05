const {} = require('./factorys/regionFactory')
const {} = require('./factorys/roomFactory')
const {} = require('./region')
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
    grid[1][3] = ENUM_EXPLORE_STATUS.obstacle;
    grid[2][1] = ENUM_EXPLORE_STATUS.obstacle;
    return grid
}

module.exports = {
    buildWorld
}