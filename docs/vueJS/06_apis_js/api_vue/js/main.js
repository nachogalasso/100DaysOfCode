const app = Vue.createApp({
    data: () => ({
        title: 'Peticiones por FETCH'
    }),
    // Al igual que con data que recibe una function anónima, cuando realizamos peticiones con VUE podemos usar
    // igualmente una function anónima igual a 'methods' que para nuestro caso se llamará 'created' => 
    // podemos usar el comando 'mounted()' y veremos que el resultado es el mismo, la única diferencia es que
    // con el segundo espera a que se termine de montar toda la aplicación y luego carga los datos. Lo recomendado
    // es utilizar 'mounted()'
    created() {
        console.log('Hola');
        this.getPost();
    }, // no olvidar colocar la coma
    // los 'methods:' son los que nos van a permitir hacer la petición. Luego las funciones que creamos tenemos que
    // llamarlas en el created(), recordar que se tiene que hacer utilizando el this => this.function
    methods: {
        // getPost() {
            // console.log('Petición Realizada');
            // aquí con la function fetch(), podemos colocar dentro la URL de la API a la cual queremos que llame 
            // la información. No olvidar que tenemos que incluir la res =>
            // fetch('URL').then((res) => ) 
            // fetch('https://jsonplaceholder.typicode.com/photos/')
            // con el fin de no tener inconvenientes y poder realizar nuestra petición y que todo salga ok, en vez
            // de utilizar el .then y guardar la respuesta, nos conviene poner el fetch() dentro de una variable =>
            // const res = fetch('URL') =>
            // const res = fetch('https://jsonplaceholder.typicode.com/photos/');
            // ahora nos queda pasarlo como un elemento ASYNC y AWAIT
            // para este caso el ASYNC se coloca antes de la function getPost() y el AWAIT va delante del fetch =>
            // console.log(res)
            // Luego no olvidemos guardar la información en una const data = await res.json()
            // No olvidar que podemos llamar solamente a un objeto y eso lo hacemos al colocarle el número al final
            // del url => await fetch('https://jsonplaceholder.typicode.com/photos/10');
        // }
        async getPost() {
            const res = await fetch('https://jsonplaceholder.typicode.com/photos/10');

            const data = await res.json();

            // console.log(res)
            console.log(data);
        }
    }
    // lo que estamos haciendo es llamar métodos que se autoejecuten
})