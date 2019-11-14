const fs = require("fs")

let read = fs.readFile("source.txt", "utf8", 
            (error,data) => {
                console.log("чтение файла");
                if(error) throw error // если возникла ошибка
                const lex = new Parser(data)
                lex.output_tree()

});

class Lexer{
    constructor(data){
        this.data
    }
    table_lex(){
        console.log('таблица лексем');
    }
    table_ident(){
        console.log('таблица идентификаторов');
    }
}

class Parser{
    constructor(table_lex,table_ident){
        this.table_ident
        this.table_lex
    }
    check_error(){
        console.log('получаем ошибки');
    }
    output_tree(){
        console.log('дерево вывода грамматики');
    }
}

class Optimizator{
    constructor(output_tree, table_ident){
        this.output_tree
        this.table_ident
    }

    ternary(){
        console.log('строим триады');
    }
    optimization(){
        console.log('проводим оптимизацию');
    }
}

class Generator{
    constructor(ternary){
        this.ternary
    }

    generation(){
        console.log('генерация объектного кода');
    }
}