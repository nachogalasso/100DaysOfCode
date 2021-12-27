const app = Vue.createApp({
    data() {
        return {
            title: 'Movies VUE',
            movieData: {}
        }
    },

    mounted() {
        this.getMovie();
    },

    methods: {
        async getMovie() {
            // no olivdar que luego de colocar la apikey al final tenemos que agregarle &t= nos sirve para una 
            // búsqueda más específica
            const data = await fetch("http://www.omdbapi.com/?apikey=ef50faf5&t=spider+man")
            // esta información de la película, la vamos a almacenar en un objeto en data() y le pondremos el nombre 
            // de movieData
            const jsonData = await data.json();
            // ahora esa jsonData tenemos que asignarla a la movieData y para ello colocamos el siguiente comando =>
            this.movieData = jsonData;
            //console.log(jsonData);

        }
    }
})