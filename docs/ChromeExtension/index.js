// chrome://extensions/

const saveBtn = document.getElementById('input-btn');
const inputEl = document.getElementById('input-el');
const ulEl = document.getElementById('ul-el')


// Colocando myLeads = JSON.stringify(myLeads) convertivos en string el array
// Si queremos convertir un string a array tenemos que usar JSON.parse

// let myLeads = []

// Creamos el acceso al localStorage (podemos usar esa misma palabra como variable), esto es lo que nos permite es que nuestros datos queden guardados. Lo que hacemos es lo siguiente =>
// localStorage.setItem('aquí llamamos a nuestra variable', 'aquí colocamos el valor que va a tener') => es primero el KEY y luego VALUE => localStorage.setItem('myLeads', 'www.examplelead.com'). ATENCIÓN: sólo se pueden guardar strings
localStorage.setItem('myLeads', 'www.examplelead.com')

saveBtn.addEventListener('click', () => {
    myLeads.push(inputEl.value)
    inputEl.value = ''
    renderLeads()
})

// for(let i=0; i<myLeads.length; i++) {
//     // ulEl.textContent += myLeads[i] + ' '
//     // ulEl.innerHTML += '<li>' + myLeads[i] + '</li>' // veremos que nos lo lee como un elemento de lista
//     // utilizamos el 'create element' and the 'append' para crear el elemento 'li'
//     // Creamos el elemento
//     const li = document.createElement('li')
//     // le agregamos el contenido
//     li.textContent = myLeads[i]
//     // lo agregamos al ul
//     ulEl.append(li)
// }

const renderLeads = () => {
    let listItems = ""
    for(let i=0; i<myLeads.length; i++) {
        // listItems += '<li><a target="_blank" href="' + myLeads[i] + '">' + myLeads[i] + '</a></li>'
        // abajo utilizamos el template string `` la comilla inclinada que nos permite con ${} invocar a una variable
        listItems += `
            <li>
                <a target="_blank" href="${myLeads[i]}">${myLeads[i]}</a>
            </li>`
    
    }
    
    ulEl.innerHTML = listItems
// con esta función lo que hacemos es que aquello que ingrese el usuario en el input, luego aparezca como formato de lista. Recordar que la variable tiene que estar dentro de la función para que no se duplique.
}


// PARA PRACTICAR
const box = document.querySelector('#box')
const buyBtn = document.getElementById('container')

box.addEventListener('click', () => {
    alert('You have clicked the box')
})

// buyBtn.addEventListener('click', () => {
//     buyBtn.innerHTML = "<button onclick='buy()'>Buy!</button>"
// })

buyBtn.innerHTML = "<button onclick='buy()'>Buy!</button>"

function buy() {
    buyBtn.innerHTML += "<p>Thank you for buying!</p>" 
}

const recipient = "James"
let sender = "Nakio"
const email = `Hey ${recipient}! 
How is it going? 
Cheers ${sender}`
console.log(email)


// 1ro creamos la KEY
// localStorage.setItem('keyTry', 'como te va?');
// Una vez que la tenemos le podemos comentar y luego utilizamos el getItem la almacenamos en una variable
let test = localStorage.getItem('keyTry')
console.log(test);
//Para eliminar el registro usamos:
// localStorage.clear()
// al borrar los datos, si hacemos un console.log veremos que tendremos como resultado el null

let myLeads = `[www.awesomeleads.com]`
// 1. Turn myLeads into an array
myLeads = [myLeads]
// 2. Push a new value to the array
myLeads.push('www.pupis.com')
// 3. Turn the array into a string again
myLeads = JSON.stringify(myLeads)
// 4. Console.log the string using 'typeof' to verify that  it´s a string
console.log(typeof myLeads)