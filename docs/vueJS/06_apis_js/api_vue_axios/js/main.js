const app = Vue.createApp({
    
    data: () => ({
        title: 'Peticiones AXIOS',
        datos: []
    }),

    created() {
        this.getPost();
    },

    methods: {
        async getPost() {
            // no olivdar colocar el AWAIT delante del axios
            // Si le colocamos los {} a data, lo que hacemos es desestructurar los datos y nos permitirá
            // luego colocarlos en el array de datos [] =>
            const { data } = await axios.get('https://jsonplaceholder.typicode.com/users');

            // para colocar los datos en nuestro array => this.datos = data

            this.datos = data;

            console.log(data);
        }
    }
})