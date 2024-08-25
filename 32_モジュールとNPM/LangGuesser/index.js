const franc = require('franc')
const langs = require('langs')
const colors = require('colors')

const input = process.argv[2];

const langCode = franc(input);
if (langCode === 'und') {
    console.log("解析できませんでした。違う文章でもう1度お試しください。".red)
} else {
    const language = langs.where("3", langCode)
    console.log(`「${language.name}」でしょうか？`.green)
}
