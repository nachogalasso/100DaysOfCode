const app = Vue.createApp({
    data() {
        return {
            title: 'Movies VUE',
            movieData: {},
            // Al colocar la propiedad movieTitle, tendremos la oportunidad de realizar búsquedas
            movieTitle: ''
        }
    },

    mounted() {
        this.getMovie();
    },

    methods: {
    // aquíe tenemos que crear la función que nos permitirá realizar la búsqueda de nuestros títulos, recordar 
    // que se tiene que aplicar dentro de la function getMovie() =>

        async getMovie() {
            // recordar que podemos poner todo en minúsculas utilizando 'this.movieTitle.toLowerCase()' =>
            // si luego de .toLowerCase() agregamos .replace() podemos indicarle de reemplazar los espacios en 
            // blanco por caracteres, como por ej: '+' => this.movieTitle.toLowerCase().replace(/ /g, '+')
            const search = this.movieTitle.toLowerCase().replace(/ /g, '+');

            console.log(search)
            // no olivdar que luego de colocar la apikey al final tenemos que agregarle &t= nos sirve para una 
            // búsqueda más específica
            // const data = await fetch("http://www.omdbapi.com/?apikey=ef50faf5&t=spider+man")
            // para poder buscar en nuestra api, conviene transformar el http en un template string `` ya que con 
            // ello podremos ingresar nuestra variable 'search' =>

            const data = await fetch(
                `http://www.omdbapi.com/?apikey=ef50faf5&t=${search}`
                )
            // esta información de la película, la vamos a almacenar en un objeto en data() y le pondremos el nombre 
            // de movieData
            const jsonData = await data.json();
            // ahora esa jsonData tenemos que asignarla a la movieData y para ello colocamos el siguiente comando =>
            this.movieData = jsonData;
            //console.log(jsonData);

        }
    }
})