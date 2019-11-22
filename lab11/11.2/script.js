//Фабричный метод
//Класс фигур
class FiguresTetris{
    constructor(name,size){
      this.name = name
      this.size = size
    }
    //метод вызова метода генерации фигур
    generation(){
      new this.name(this.size).generate()
    }
  }

//Классы фигур
//Методы генерации
class Figures1 extends FiguresTetris{
  constructor(size){
    super(size)
    this.size = size
  }
  generate(){
    console.log(`фигура l размер: ${this.size}`);
  }
}
class Figures2 extends FiguresTetris{
  constructor(size){
    super(size)
    this.size = size
  }
  generate(){
    console.log(`фигура l-горизонтальная размер: ${this.size}`);
  }
}
class Figures3 extends FiguresTetris{
  constructor(size){
    super(size)
    this.size = size
  }
  generate(){
    console.log(`фигура J размер: ${this.size}`);
  }
}
class Figures4 extends FiguresTetris{
  constructor(size){
    super(size)
    this.size = size
  }
  generate(){
    console.log(`фигура L размер: ${this.size}`);
  }
}
class Figures5 extends FiguresTetris{
  constructor(size){
    super(size)
    this.size = size
  }
  generate(){
    console.log(`фигура Z размер: ${this.size}`);
  }
}
class Figures6 extends FiguresTetris{
  constructor(size){
    super(size)
    this.size = size
  }
  generate(){
    console.log(`фигура S размер: ${this.size}`);
  }
}
class Figures7 extends FiguresTetris{
  constructor(size){
    super(size)
    this.size = size
  }
  generate(){
    console.log(`фигура Г размер: ${this.size}`);
  }
}
class Figures8 extends FiguresTetris{
  constructor(size){
    super(size)
    this.size = size
  }
  generate(){
    console.log(`фигура Квадрат размер: ${this.size}`);
  }
}
class Figures9 extends FiguresTetris{
  constructor(size){
    super(size)
    this.size = size
  }
  generate(){
    console.log(`фигура Пирамида размер: ${this.size}`);
  }
}
class Figures10 extends FiguresTetris{
  constructor(size){
    super(size)
    this.size = size
  }
  generate(){
    console.log(`фигура Пирамида-перевернутая размер: ${this.size}`);
  }
}

//Это для красивого вывода и чтобы фигуры выводились ограниченное время
let promise = new Promise(function(resolve) {
    setTimeout(function() {
      console.log('Фигуры "тетрис"')
      console.log('Генерация...')
      resolve()
    }, 2000)
  })
promise.then(function() {
  return new Promise(function(resolve) {
    let generation = setInterval(function() {
      //список фигур
      let figureNameArray = [Figures1, 
        Figures2, 
        Figures3, 
        Figures4, 
        Figures5, 
        Figures6, 
        Figures7,
        Figures8,
        Figures9,
        Figures10]
      //список размеров
      let figureSizeArray = ['4','8(супер-фигура)']
      //случайный выбор фигуры и размера
      let randName = figureNameArray[Math.floor(Math.random() * figureNameArray.length)]
      let randSize = figureSizeArray[Math.floor(Math.random() * figureSizeArray.length)]
      new FiguresTetris(randName,randSize).generation()
      console.log('...')
      }, 1000)
      setTimeout(function(){
        console.log('Конец генерации...');
        clearInterval(generation)
    },15*1000)
    })
  })

