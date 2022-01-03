// componentes, veremos que es una función que utiliza 2 parámetros => f (name, component).
// Tenemos que recordar que tenemos que llamar a nuestro archivo luego en nuestro index.html dentro de una etiqueta
// <script></script>
// para ver si nuestro componente funciona => console.log('work')
// recordar que nuestro function componente tiene 2 parámetros: 'name' y 'component' =>
// app.component('name', 'component')

// Podemos llamar a nuestro componente desde el archivo main y eliminar la data que haya en el mismo al colocar
// solamente const app = Vue.createApp({})
// PODEMOS CREAR TAMBIÉN COMPONENTES DE MANERA DINÁMICA

app.component('main-header', {
    // como vemos creamos nuestro 1er componente, el nombre que le colocamos es el que nos servirá para luego
    // identificarlo en nuestro HTML, el cual tendremos que colocar dentro de nuestro contenedor app de la siguiente
    // forma <div id='app'><main-header></main-header></div>
    // ahora creamos el template que es lo que tendrá dentro nuestro componente, recordar que tenemos que tratarlo
    // como un template string `` =>
    template: `
        <header>
            <h1> {{title}} </h1>
        </header>
    `,
    // Para colocar entonces nuestro 'title' en el componente, lo que tenemos que hacer entonces es crear el objeto
    // data dentro de nuestro archivo componente =>
    data: () => ({
        title: 'Componente con data desde el archivo Header.js',
        // pais: 'Argentina'
    })
})