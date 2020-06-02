const copyObject = (o) => {
    return JSON.parse(JSON.stringify(o))
} 

const echo = s => {
    console.log(s)
}


module.exports = {
    copyObject, echo
}