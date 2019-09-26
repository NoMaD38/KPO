
let a = 'adas fsag gdf df fda asd fd dw'
console.log('Строка слов', a);

let words = a.split(' ')
for (let i = 0; i < words.length - 1; i++) {
    if (words[i].charAt(words[i].length - 1) === words[i+1].charAt(0)){
        console.log('совпадают конец и начало слов', words[i], words[i+1])
    }
}