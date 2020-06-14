
/**
 * 0 once upon..
 * 1 legend -----
 * 2 story begins
 * 3 adventurers gather
 * 4 go forth
 * @param {index of text} index 
 */
const getStoryPoint = index => {
    switch (index) {
        case 0: return 'Once upon at time...'
        case 1: return '¤~----------        ----------~¤'
        case 2: return 'These are dark days. \nThe king is growing old and his sons fight to cease power. In the east the Rooguan empire gather their force. In the north ancient dragons has awakened from thier long sleep. In the south travelers return speaking of horrors in the dessert.'
        case 3: return 'From the shadows they appear. Eyes hungry for gold and adventure gathering around the campfire. '
        case 4: return 'Go forth!'
    }
}


module.exports = { getStoryPoint }