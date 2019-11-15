
const comp = document.getElementById('obj_code')
const result = document.getElementById('result')
comp.addEventListener('click',()=>{
    const code = document.getElementById('code').value
    result.innerHTML = ''
    console.log(code);
    const start = new Creator(code)
})

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
        result.insertAdjacentHTML('beforebegin',`регулярные выражения: ${strings} <br>`)
        return strings
    }
}
class Table_lex {
    constructor(data){
        this.data = data
        this.table(this.data)
    }
    table(data){
        console.log('')
        result.insertAdjacentHTML('beforebegin',`тут должна быть таблица лексем: ${data} <br>`)
    }
}
class Table_ident  {
    constructor(data){
        this.data = data
        this.table()
    }
    table(data){
        result.insertAdjacentHTML('beforebegin',`тут должна быть таблица идентификаторов<br>`)
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
        result.insertAdjacentHTML('beforebegin',`тут должна быть проверка на ошибки <br>`)
    }
}

class Output_tree{
    constructor(data){
        this.data = data
        this.tree(this.data)
    }
    tree(data){
        result.insertAdjacentHTML('beforebegin',`тут должно быть дерево вывода <br>`)
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
        result.insertAdjacentHTML('beforebegin',`тут должны быть триады <br>`)
    }
}

class Optimization{
    constructor(data){
        this.data = data
        this.opt(this.data)
    }
    opt(data){
        console.log('тут должна быть проведена оптимизация');
        result.insertAdjacentHTML('beforebegin',`тут должна быть проведена оптимизация <br>`)
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
        result.insertAdjacentHTML('beforebegin',`тут должна быть генерация кода <br>`)
    }
}