const fs = require("fs")

const start = ()=>{
    let start = new Creator(`
    var a,n,c,d:word;
    begin
       readln( a );
       n:=1;
       while ( n <= sqrt(a) ) do begin
          c:=a mod n;
          d:=a div n;
          if c = 0 then begin
             writeln( n );
             if n <> d then writeln( d );
          end;
          inc( n );
       end;
    end.`
    )
}

start()

class Creator{
    constructor(data){
        this.data = data
        const lexer = new Lexer(this.data)
        const parser = new Parser(lexer.data_lex, lexer.data_ident)
        const optimizator = new Optimizator(parser.tree, lexer.data_ident)
        const obj_generator = new Generator(optimizator.tern)
 }
}
class Lexer {
    constructor(data){
        this.data = data
        const data_reg = new Regular(this.data)
        const data_lex = new Table_lex(data_reg)
        const data_ident = new Table_ident(data_reg)
    }
}
class Regular{
    constructor(data){
        this.data = data
        this.regular()
    }
    regular () {
        let strings = this.data.replace(/\s{2,}/g, ' ')
        console.log('регурные выражения');
        return strings
    }
}
class Table_lex {
    constructor(data){
        this.data = data
        this.table()
    }
    table(){
        console.log('тут должна быть таблица идентификаторов')
    }
}
class Table_ident  {
    constructor(data){
        this.data = data
        this.table()
    }
    table(){
        console.log('тут должна быть таблица идентификаторов');
    }
}

class Parser {
    constructor(data_lex,data_ident){
        this.data_lex = data_lex
        this.data_ident = data_ident
        const check = new Check_error()
        const tree = new Output_tree()
    }
}

class Check_error{
    constructor(data){
        this.data = data
        this.error(this.data)
    }
    error(data){
        console.log('тут должна быть проверка на ошибки');
    }
}

class Output_tree{
    constructor(data){
        this.data = data
        this.tree(this.data)
    }
    tree(data){
        console.log('тут должно быть дерево вывода');
    }
}

class Optimizator{
    constructor(output_tree, data_ident){
    this.output_tree = output_tree
    this.data_ident = data_ident
    const tern = new Ternary()
    const opt = new Optimization()
    }
}

class Ternary{
    constructor(data){
        this.data = data
        this.ternars(this.data)
    }
    ternars(data){
        console.log('тут должнЫ быть триады');
    }
}

class Optimization{
    constructor(data){
        this.data = data
        this.opt(this.data)
    }
    opt(data){
        console.log('тут должна быть проведена оптимизация');
    }
}

class Generator{
    constructor(ternary){
        this.ternary = ternary
        const obj_code = new Generation(this.ternary)
    }
}

class Generation{
    constructor(data){
        this.data = data
        this.generator(this.data)
    }
    generator(data){
        console.log('генерация объектного кода и занесение в буфер');
    }
}