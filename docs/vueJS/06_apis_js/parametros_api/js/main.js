const app = Vue.createApp({
    
    data: () => ({
        title: 'Peticiones con Parámetros',
        // Podemos crear la petición a partir de una variable =>
        post: 1,
        // El ID lo podemos capturar desde un formulario
        // para trabajar con los datos conviene que los convirtamos en objeto =>
        // datos: [],
        datos: {}
    }),
    // se utiliza con el fin de tener información por defecto, se ejecuta cuando es creado
    created() {
        this.getPost();
    },

    // Nosotros podemos preguntar cuales usuarios fueron los que realizaron los posteos
    // recordar que cuando trabajamos con axios tenemos que poner axios.get('URL')
    // a 'res' lo podemos moficar por 'data' y para que nos quede mejor presentado conviene usar el destructuring =>
    // const { data } = await axios.get('https://jsonplaceholder.typicode.com/posts')
    // Recordar que si coloco https://jsonplaceholder.typicode.com/posts/n donde 'n' es un número, puedo acceder a 
    // un objeto en específico. https://jsonplaceholder.typicode.com/posts/16
    methods: {
        async getPost() {
            // const { data } = await axios.get('https://jsonplaceholder.typicode.com/posts/26')
            const { data } = await axios.get(`https://jsonplaceholder.typicode.com/posts/${this.post}`)
            // Nosotros podemos crear una variable la cual solamente acceda solemente al id de nuestro objeto =>
            // conviene utilizar el destructuring =>
            const { userId } = data;
            // Teniendo nuestro userId, ahora ese número se lo podemos pasar como parámetro a otras peticiones
            // En nuestro ejemplo utilizaremos la API de users https://jsonplaceholder.typicode.com/users

            // creamos la 2da petición de axios
            // const res = await axios.get('https://jsonplaceholder.typicode.com/users/2')
            // const { data : dataUser} = await axios.get('https://jsonplaceholder.typicode.com/users/2')
            const { data: dataUser } = await axios.get(`https://jsonplaceholder.typicode.com/users/${userId}`)
            // esto podemos desestructurarlo, pero tendremos el inconveniente de que si ponemos const { data }
            // nos dará error, debido a que poseemos otra variable data => utilizando el operador de : 
            // podemos darle un alias => nos queda { data: dataUser }. De esta manera le estamos indicando que
            // tome 1ro la data que viene de ''https://jsonplaceholder.typicode.com/posts' y en función a eso
            // tomo la data de del nuevo 'https://jsonplaceholder.typicode.com/users'
            // Podemos pasar la información como un template string con el fin de indicarle que tome luego el
            // userId => await axios.get(`https://jsonplaceholder.typicode.com/users/${userId}`)
            // console.log(res)
            console.log(dataUser)
            // console.log(data)
            // así vemos que en consola aparece solamente el nº de id de nuestro objeto
            console.log(userId)


            // almacenamos la información en datos para ello hacemos =>
            this.datos = dataUser;
        }
    }

})