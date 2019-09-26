const fs = require('fs')
const path = require('path')

fs.readFile(
    path.join(__dirname,'','matrix.txt'),
    'utf-8',
    (err, data) => {
        if (err) throw err
        let newMatrix = []
        let matrix = data.split(/\r\n| /)
        let rows = data.split(/\r?\n/)
        console.log('Исходная матрица');
        console.log(matrix);
        console.log('Размерность матрицы:', rows.length);

        for (let row in rows) {
            newMatrix[row] = rows[row].split(/ +/);
        }
        
        for (let i = 0; i < newMatrix.length; i++) {
            for (let j = 0; j < i; j++) {
                let temp = newMatrix[i][j];
                newMatrix[i][j] = newMatrix[j][i];
                newMatrix[j][i] = temp;
            }
        }
        console.log('Результат транспонирования:');
        console.log(newMatrix);
    }
)
