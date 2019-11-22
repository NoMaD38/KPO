//Шаблонный метод
//функция хеш-кода
String.prototype.hashCode = function(){
    var hash = 0;
    for (var i = 0; i < this.length; i++) {
        var character = this.charCodeAt(i);
        hash = ((hash<<5)-hash)+character;
        hash = hash & hash;
    }
    return hash;
}
//библиотека для работы с файлами
const fs = require("fs")
//абстрактный класс
class Convert {
    constructor(filename){
        this.filename = filename
    }
}
//конкретный класс для преобразования в XML
class ConvertXML extends Convert {
    constructor(filename){
        super(filename)
        this.filename = filename
    }
	//метод класса преобразования XML
    generationXML(){
        //получаем содержимое txt
        let text = fs.readFileSync(this.filename, 'utf8').split(/\r?\n/)
        //генерация хеш-кода для xml
        let text_hash = text[2].hashCode()
        console.log(`Содержимое txt:
${text}`);

        //создаём xml и записываем статью
        fs.writeFile("article.xml", `<?xml version="1.0" encoding="UTF-8" ?>
<article>
	<headline>${text[0]}</headline>
	<author>${text[1]}</author>
    <text_article>${text[2]}</text_article>
    <hash_text_article>${text_hash}</hash_text_article>
</article>
        `, function(error){
        if(error) throw error; // если возникла ошибка
        console.log("Запись файла завершена. Содержимое файла:");
        let data = fs.readFileSync("article.xml", "utf8");
        console.log(data);  // выводим считанные данные
        })
    }
}
new ConvertXML('article.txt').generationXML()



