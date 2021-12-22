// AXIOS => es una librería de JS, la que nos permite peticiones pero con una sintaxis más amigable. Se instala con 
// nodejs pero también podemos utilizar el CDN ('https://cdnjs.cloudflare.com/ajax/libs/axios/0.24.0/axios.min.js')
// Cuando trabajamos con axios podemos utilizar todos los elementos https que existan.

// así importamos la API con Axios. Ahora tenemos que crear las promesas. Funciona muy parecido al código de JS =>
// axios.get("https://jsonplaceholder.typicode.com/posts")
// .then((res) => console.log(res));
// podemos utilizar también los métodos post
// podemos utilizar directamente el console.log(res.data)
// como hicimos con fetch podemos acceder al elemento que querramos => res.data[0].title
// también podemos operar con ASYNC y AWAIT, conviene para ello trabajar con una 'const'

// axios.get("https://jsonplaceholder.typicode.com/posts")
//     // .then((res) => console.log(res));
//     // .then((res) => console.log(res.data[2]))
//     .then((res) => console.log(res.data[0].title))

// Trabajando con ASYNC y AWAIT (no olvidar de crear una const)

const petition = async () => {
    // No olvidar que cuando trabajamos con ASYNC y AWAIT tenemos que crear una const res (de respuesta)
    // se resuelve de manera similar que con JS, tenemos que poner el ASYNC antes de la function y el AWAIT
    // antes del axios.get =>
    // const res = await axios.get('https://jsonplaceholder.typicode.com/posts')
    // const data = await axios.get('https://jsonplaceholder.typicode.com/posts')
    const { data } = await axios.get('https://jsonplaceholder.typicode.com/posts');

    // tener en cuenta que la respuesta la podemos directamente trabajar como 'data', este data lo podemos poner {} 
    // con el fin de poder trabajar sus datos sin inconvenientes, podemos hacer 'console.log(data[0])'
    // así accedemos al elemento del index 0, o 'console.log(data[0].title)
    // Podemos crear una constante y a ella colocarle el el valor de algún index de data
    // podemos llamar más cosas de nuestra API
    // const { userId } = data[2];
    const { userId, title, id } = data[0]
    console.log(data[0].title);
    console.log(userId);
    console.log(title);
    console.log(id);

}


petition()