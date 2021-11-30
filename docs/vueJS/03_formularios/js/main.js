const app = Vue.createApp({ // veremos que data lo podemos crear con una función de flecha =>
    data: () => ({
        title: 'Formularios',
        datos: { 
        // Nos permitirá crear un objeto que luego interactua con el formulario y también nos permite manipular API´s
        // puedo inicializar una variable name vacía que luego tendrá sus datos, la llamamos luego en el html con datos.name =>
        name: "",
        age: 15,
        langs: [],
        gender: "noanswer"
        }
    }),
    // Estando fuera de del objeto 'data', ahora cargamos los métodos, recordar que lo tenemos que hacer con la palabra reservada 'methods' y le tenemos que pasar los objetos, usamos por convención 'handleSubmit()' =>
    methods: {
        handleSubmit() {
            console.log(this.datos) // recordar que para ubicar algo de 'data' primero tenemos que poner 'this' y luego el objeto al que queremo acceder
        }
    }
});