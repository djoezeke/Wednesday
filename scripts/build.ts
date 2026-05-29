const fs = require('fs');
const path = require('path');
const { generate } = require('./theme');

const THEME_DIR = path.join(__dirname, '..', 'themes');

if (!fs.existsSync(THEME_DIR)) {
    fs.mkdirSync(THEME_DIR);
}

module.exports = async () => {
    const { base, pro } = await generate();

    return Promise.all([
        fs.promises.writeFile(
            path.join(THEME_DIR, 'Wednesday.json'),
            JSON.stringify(base, null, 4)
        ),
        fs.promises.writeFile(
            path.join(THEME_DIR, 'Wednesday-Pro.json'),
            JSON.stringify(pro, null, 4)
        ),
    ]);
};

if (require.main === module) {
    module.exports().catch((error) => {
        console.error('Error building themes:', error);
        process.exit(1);
    });
}