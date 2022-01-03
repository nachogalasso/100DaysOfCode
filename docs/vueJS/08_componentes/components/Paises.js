app.component('country-list', {
    // si no quiero el array completo es válido colocar {{country[0]}}, puedo colocarlos por separado
    template: `
        <ol>
            <li v-for="(country, index) in country" :key="index"> {{country}} </li>
        </ol>
    `,
    // data: () => ({
    //     country: 'Argentina'
    // })
    // en el template, podemos colocar por separado lo siguiente:
    // <li> {{country[0]}} </li>
    // <li> {{country[1]}} </li>
    // <li> {{country[2]}} </li>
    // <li> {{country[3]}} </li>
    // <li> {{country[4]}} </li>
    // ó podemos crear un v-for="(country, index) in countries" :key="index" dentro del <li></li>
    props: {
        country: Array,
    }
})


// Con las PROPS podemos capturar información de otro lado y poder renderizarlas en nuestros componentes
// Para ello lo tendremos que llamar como un atributo en nuestra etiqueta del componente => si tenemos la lista de
// países en nuestro main.js dentro de data, para poder llamar a esa información tendremos que hacer lo sig => 
// <country-list country="countries"></country-list>
// Los PROPS se escriben igual que data, son un objeto que recibe las propiedades, donde 1ro colocamos el nombre 
// con el cual llamamos el atributo en el HTML y luego colocamos el String o Array =>
// en el HTML es country: String
// si el atributo tiene igual nombre que la propiedad entonces lo puedo omitir y solamente colocar el nombre del
// atributo y al ser un array podemos utilizar v-bind para recorrerlo => :country

