
const fs = require('fs');
const { promisify } = require('util');

const writeFile = promisify(fs.writeFile);

(async () => {
    try {
        const main = (str, fn) => console.log(str) || fn();
        const bool = (boolean, fn) => boolean && fn();
        const funky = (val, fn) => () => fn(val);

        main('hello', () => {});
        bool(true, () => {});
        funky('hello', () => {});


        await writeFile('./file.txt', 'Something');

        console.log('Saved!');

    } catch (err) {
        console.error(err);
    }
})();
