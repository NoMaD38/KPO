person = {
    name: 'Ivan',
    login: 'Ivan_zadanie_1',
    password: '123456'
}

const check = document.getElementById('check')
const sumArgs = document.getElementById('sumProd')


check.addEventListener('click',()=>{
    let password = document.getElementById('pas').value
    password === person.password ? alert('Пароль совпадет') : alert('Неверный пароль')
    document.getElementById("pas").value = "";
})

sumArgs.addEventListener('click', ()=>{
    let args = document.getElementById('args').value
    let array = args.split(' ')
    let sum = 0 
    let prod = 1 
    let numArray = array.map((i)=>parseInt(i))

    for (let i = 0; i < numArray.length; i++) {     
        sum += numArray[i]
        prod *= numArray[i]
    }
    console.log('Сумма:',sum)
    console.log('Произведение:',prod)
})



