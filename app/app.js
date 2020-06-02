const { rollCharacter, print } = require('./controllers/character');

for(let i = 0; i < 10; i++) {
    const a = rollCharacter();
    print(a)
}