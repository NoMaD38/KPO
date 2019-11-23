class TrainingTask{
    constructor(status){
        this.status = status
    }
    status(){
        console.log(`Учебное задание ${new TrainingTaskState()}`);
    }
}
//класс для изменения статуса учебного задания
class TrainingTaskState{
    constructor(status){
        this.status = status
    }
    newStatus(){
        this.status = new this.status().answer()
    }
}
//статус "выдано"
class issudState extends TrainingTaskState{
    answer(){
        console.log('Новый статус "выдано"');
 }
}
//статус "сдано на проверку"
class verification extends TrainingTaskState{
    answer(){
        console.log('Новый статус "сдано на проверку"');
    }
}
//статус "проверено"
class checked extends TrainingTaskState{
    answer(){
        console.log('Новый статус "проверено"');
    }
}
//статус "пересдано на проверку"
class retakeVerification extends TrainingTaskState{
    answer(){
        console.log('Новый статус "пересдано на проверку"');
    }
}
//статус "не выполнено"
class notDone extends TrainingTaskState{
    answer(){
        console.log('Новый статус "не выполнено"');
    }
}
//статус "выполнено"
class done extends TrainingTaskState{
    answer(){
        console.log('Новый статус "выполнено"');
    }
}
//набор статусов
let states = [issudState, verification, checked, retakeVerification, notDone, done]
//задаём новый статус
let newState = new TrainingTask(new TrainingTaskState(states[2]).newStatus())







