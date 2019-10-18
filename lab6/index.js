const fs = require('fs'),
    xml2js = require('xml2js'),
    serialize = require('node-serialize');
 
var parser = new xml2js.Parser();
fs.readFile('subjects.xml', function(err, data) {
    parser.parseString(data, function (err, result) {
        console.dir(result)
        console.log('Done')
    });
});

//POJsO
class POJsOSubjects{
    constructor(option){
        this.name = option.name
        this.dayWeek = option.dayWeek
        this.class = option.class
    }

    getName(){
        return this.name
    }

    setName(fio){
        this.name = subj
        return this
    }

    getDayWeek(){
        return this.dayWeek
    }

    setDayWeek(day){
        this.date = day
        return this
    }

    getClass(){
        return this.class
    }
    setClass(cab){
        this.class = cab;
        return this.class
    }
}

//POJsO
class POJsOTeachers{
    constructor(option){
        this.name = option.name
        this.subjects = option.subjects
        this.subjects.subject = option.subjects.subject
        this.number_subjects = option.number_subjects
        this.number_subjects.number_subject = option.number_subjects.number_subject
        this.numb_stuts = option.numb_stuts
        this.numb_stuts.number_students = option.numb_stuts.number_students
    }
    getName(){
        return this.name
    }
    setName(fio){
        this.name = fio;
        return this;
    }

    getDate(){
        return this.date
    }
    setDate(day){
        this.date = day;
        return this;
    }

    getClass(){
        return this.class
    }
    setClass(cabin){
        this.class = cabin;
        return this.class
    }
}