//Наблюдатель
//Класс Почта содержащий список подписчиков и методы 
class PostOffice {
    constructor(name,print){
        let subscribers = ['подписчик 1','подписчик 2','подписчик 3','подписчик 4']
        this.subscribers = subscribers
        this.name = name
        this.print = print
    }
    //метод добавления подписчика
    addsubcriber(){
        this.subscribers.push(this.name)
        console.log(`
    Подписчик добавлен
    Новый список подписчиков: ${this.subscribers}`)
    }
    //метод удаления подписчика
    deletesubcriber(){
        let index = this.subscribers.indexOf(this.name);
        if (index > -1) {
            this.subscribers.splice(index, 1);
        }
        console.log(`
    Подписчик удален
    Новый список подписчиков: ${this.subscribers}`)
    }
    //метод для отправки печатных изданий
    tosend(){
        let sub = new Subscriber(this.name,this.print).answer()
    }
}
//Класс подписчик
class Subscriber extends PostOffice {
    constructor(name,print){
        super(name,print)
        this.name = name
        this.print = print
    }
//Метод для проверки доставки изданий
    answer(){
        console.log(`
    ${this.name} получил ${this.print}`);
    }
}
//добавляем подписчика
let newsub = new PostOffice('dada').addsubcriber()
//удаляем подписчика
let deletesub = new PostOffice('dada').deletesubcriber()
//Отправляем печатные издания на почту
let newPrint1 = new PostOffice('подписчик 1','Газета, журнал').tosend()
let newPrint2 = new PostOffice('подписчик 2','Журнал 1, журнал 2').tosend()
let newPrint3 = new PostOffice('подписчик 3 подписчик 2','Журнал 1, журнал 2').tosend()