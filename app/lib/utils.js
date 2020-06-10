const copyObject = (o) => {
    return JSON.parse(JSON.stringify(o))
} 

const copyArray = arr => {
    return [...arr]
}

const echo = s => {
    console.log(s)
}

const getPercetage = (total, part) => {
    return Math.floor((part / total) * 100)
}

const generateID = () => {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for (let i = 0; i < 10; i++ ) {
       result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
 }

 const getRandomElement = col => {
    const i = Math.floor(Math.random() * col.length)
    return col[i]
}

module.exports = {
    copyObject, echo, getPercetage, generateID, copyArray, getRandomElement
}