// Con la función Fetch() es lo que me permite acceder a la información de la API y en ella dentro de los paréntisis se coloca, la url o algunos nos facilitan los endpoints. Para el ejemplo copiamos la url del la web => fetch("https://jsonplaceholder.typicode.com/posts")
// si colocamos fetch("url/endpoint").then el programa nos dará una respuesta y con ella podremos tratarla de varias formas, pero por lo general se convierte en formato JSON => fetch("url").then (res => res.json())
// Como ello es un JSON, el programa todavía no hace nada y por ello tendremos que agregarle otro .then((data))
// De esa data podemos podemos indicarle que es lo que necesitamos. No tenemos que olvidarnos que esto es un array y que tendremos que recorrerlo.
/* el .then((data) => {
    console.log(data)
}) */ // lo podemos escribir de esa manera y colocar un return. Con ASYNC y AWAIT podrmos hacer peticiones de manera asíncrona

// fetch("https://jsonplaceholder.typicode.com/posts").then(res => res.json())
// .then((data) => console.log(data))

// Para utilizar el ASYNC y AWAIT conviene hacerlo mediante una function, =>
// const petition = 'async' () => {} al colocarlo antes de los () le estamos indicando que será una function
// asincrónica, espera a que una promesa se resuelva y luego nos da la data, que si le damos un console.log()
// veremos que por consola nos da una promesa => 
// const petition = async () => {
//    const res = fetch("https://jsonplaceholder.typicode.com/posts");
// console.log(res);
//} 
// petition()

//Si luego le ponemos el await antes del fetch, tendremos la respuesta del estado de nuestra petición, no responde
// de acuerdo al servidor =>
// const petition = async () => {
//  const res = await fetch("https://jsonplaceholder.typicode.com/posts")
//
//  console.log(res);
//}

// teniedo eso, ya puedo crear una variable data y asignarle res.json() => console.log(data) => en el promise.result
// se puede ver el array[]. Ahora esto me permite poder acceder a cualquier index del array al colocar => 
// data[0] y como es un obj, podemos acceder directamente a una propiedad del mismo. =>
// console.log(data[0].title)


const petition = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
// no olivadar que a la variable del data le tenemos que poner el 'await' 
    const data = await res.json()

    console.log(data[1].title);
}

petition();