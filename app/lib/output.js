const fs = require('fs')
const { FILE_PATH, ROOT } = require('../constants')

const write = (file, text) => {
    const path = `${ROOT}${FILE_PATH}${file}.txt`
    const captialized = path.charAt(0).toUpperCase() + path.slice(1);
    const nlText = `${text}${'\n'}`
    const exist = fs.existsSync(captialized)
    if (!exist) {
        try {
            fs.writeFileSync(captialized, nlText)
        } catch (err) {
            console.error(`ERR-WRITE-${err.message || JSON.stringify(err)}`)
        }
        
    } else {
        try {
            fs.appendFileSync(captialized, nlText)
        } catch (err) {
            console.error(`ERR-APPEND-${err.message || JSON.stringify(err)}`)
        }
    }
    
}

const toHtml = file => {
    
}

module.exports = {
    write
}