const fs = require("fs")

let read = fs.readFile("source.txt", "utf8", 
            (error,data) => {
                console.log("чтение файла");
                if(error) throw error; // если возникла ошибка
                
                console.log(regular(data));

});

const regular = (data) =>{
    let strings = data.replace(/\s{2,}/g, ' ')
    return strings
}