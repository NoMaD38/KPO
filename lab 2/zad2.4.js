const fs = require('fs')
const path = require('path')
fs.readFile(
    path.join(__dirname,'','string.txt'),
    'utf-8',
    (err, data) => {
        if (err) throw err
        let strings = data.split(/\r\n| /)
        sample_word = 'Lorem'
        console.log('Слова разделенные пробелами')
        console.log(strings)
        console.log('Поиск слова по образцу:', sample_word);
        fs.writeFileSync('sample.txt',
        strings.filter(s => s.indexOf(sample_word) === 0),
        (err) => {if (err) throw err},
        console.log('Файл создан')
        )
    }
)