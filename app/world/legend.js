
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
        case 3: return 'From the shadows they appear. Eyes hungry for gold and adventure gathering around the campfire. This story is about them, and their journey thoughout the land:'
        case 4: return 'Go forth!'
        case 5: return 'It´s a beutiful day, the sun shines bright in the sky.'
        case 6: return 'it´s a beutiful day, the air is cool and fresh. On the trees the leaves are golden yellow and red.'
        case 7: return 'It´s a beutiful day. The air is cold. On the ground lays a thin layer of snow.'
        case 8: return 'It´s a beutiful day. The weather is clearing and the snow is melting.'
    }
}


module.exports = { getStoryPoint }