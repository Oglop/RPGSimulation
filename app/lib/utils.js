const copyObject = (o) => {
    return JSON.parse(JSON.stringify(o))
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


module.exports = {
    copyObject, echo, getPercetage, generateID
}