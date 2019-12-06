const fs = require('fs')
const jsdom = require("jsdom")
const { JSDOM } = jsdom;

//SOAP-сообщение
const soap_message = (`<?xml version="1.0" encoding="utf-8"?>
<soap:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/">
   <soap:Body>
     <getProductDetailsResponse xmlns="http://warehouse.example.com/ws">
       <getProductDetailsResult>
         <productID>12345</productID>
         <productName>Стакан граненый</productName>
         <description>Стакан граненый. 250 мл.</description>
         <price>9.95</price>
         <currency>
             <code>840</code>
             <alpha3>USD</alpha3>
             <sign>$</sign>
             <name>US dollar</name>
             <accuracy>2</accuracy>
         </currency>
         <inStock>true</inStock>
       </getProductDetailsResult>
     </getProductDetailsResponse>
   </soap:Body>
</soap:Envelope>
`)
const soap_parse = new JSDOM(soap_message);


//POJO класс для продукта (body)
class Products{
    constructor(id,name,description,price,currency){
    this.productID = id
    this.productName = name
    this.description = description
    this.price = price
    this.currency = currency
    }

    getProductID(){
        return this.productID
    }

    setProductID(id){
        this.id = id
        return this.id
    }

    getProductName(){
        return this.productName
    }
    setProductName(name){
        this.productName = name
        return this.productName
    }

    getDescription(){
        return this.description
    }
    setDescription(text){
        this.description = text
        return this.description
    }
        
    getPrice(){
        return this.price
    }
    setPrice(price){
        this.price = price
        return this.price
    }

    getCurrency(){
        return this.currency
    }
    setCurrency(curs){
        this.currency = curs
        return this.currency
    }
}

//генерация POJO класса по содержимому body
const generation = ()=>{
    let id = soap_parse.window.document.querySelector("productID").textContent
    let name = soap_parse.window.document.querySelector("productName").textContent
    let description = soap_parse.window.document.querySelector("description").textContent
    let price = soap_parse.window.document.querySelector("price").textContent
    let currency = soap_parse.window.document.querySelector("currency").textContent
    new Products (id,name,description,price,currency)
}
//Запись файла
fs.writeFile("message_prod.xml", soap_message, function(error){
        //запуск генерации pojo
        generation()
        if(error) throw error; // если возникла ошибка
        console.log("Запись файла завершена. Содержимое файла:");
        let data = fs.readFileSync("message_prod.xml", "utf8");
        console.log(data);  // выводим считанные данные
        })