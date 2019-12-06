const fs = require('fs')
const jsdom = require("jsdom")
const { JSDOM } = jsdom;

//Чтение файла
let data = fs.readFileSync("message_prod.xml", "utf8");
console.log(`Содержимое файла:
${data}`);  // выводим считанные данные
    
const soap_parse = new JSDOM(data);
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
    let prod = new Products (id,name,description,price,currency)
    //генерация soap-сообщения с помощью pojo Product
    let soap_message = (`SOAP-сообщение:
    <?xml version="1.0" encoding="utf-8"?>
<soap:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/">
   <soap:Body>
     <getProductDetailsResponse xmlns="http://warehouse.example.com/ws">
       <getProductDetailsResult>
         <productID>${prod.id}</productID>
         <productName>${prod.name}</productName>
         <description>${prod.description}</description>
         <price>${prod.price}</price>
         <currency>${prod.currency}</currency>
         <inStock>true</inStock>
       </getProductDetailsResult>
     </getProductDetailsResponse>
   </soap:Body>
</soap:Envelope>
    `)
    console.log(soap_message);
    
}

generation()
