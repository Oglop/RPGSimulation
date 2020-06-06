const copyObject = (o) => {
    return JSON.parse(JSON.stringify(o))
} 

const echo = s => {
    console.log(s)
}

const getPercetage = (total, part) => {
    return Math.floor((part / total) * 100)
}


module.exports = {
    copyObject, echo, getPercetage
}