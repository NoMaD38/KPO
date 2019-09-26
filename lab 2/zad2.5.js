const fs = require('fs')
const path = require('path')

let temp 
let longnumb = 0

fs.readFile(
    path.join(__dirname,'','longnumb.txt'),
    'utf-8',
    (err, data) => {
        if (err) throw err
        let numbers = data.split(' ').filter( numb => isFinite(Number(numb)))
        console.log('числа из строки:')
        console.log(numbers)

        for (let key in numbers) {
            if (numbers[key].length > longnumb) {
                longnumb = numbers[key].length;
                temp = key;
            }
        }
        console.log('Самое длинное число: ',numbers[temp]);
    }
)