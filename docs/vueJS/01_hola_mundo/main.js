// se llama a un documento de VUE, que si tenemos el CLI, nos aparece automáticamente.
// Vue tiene que ir con mayúsculas al ppio
const app = Vue.createApp({
    data() {
        return {
            user: {
                title: 'Hola Mundo',
                name: 'Nakio',
                age: 39,
                movies: ['Batman', 'Thor', 'Superman'],
                url: "https://www.google.com.ar",
                image: "https://cdn.pixabay.com/photo/2020/03/23/11/55/sunset-4960651_960_720.jpg",
                classValue: 'good' // le puedo enviar clases de css
            }
        }
    }
})

// No tenemos que olvidar de instacianciar luego la app en el index.html y eso lo hacemos con una etiqueta script, debajo de la de js
console.log(app.data);
console.log(app.title);
console.log(app); // esto nos trae el objeto VUE luego con createApp() es cuando le indicamos que vamos a crear al app. Es una función que recibe argumentos. Teneer en cuenta q esto es un objeto JSON. que va a recibir información mediante data() => (crea y retorna objetos)
// Vue.createApp({
//    data() {
//    return {}
//  }
//})
console.log('Hola Mundo');