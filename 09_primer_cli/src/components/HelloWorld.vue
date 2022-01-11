<!-- Vamos a ver que podemos compilar toda nuestra aplicación dentro de un sólo archivo .vue, aquí podremos diagramar nuestra web dentro de la etiqueta <template></template>. Luego podemos agregar los scripts dentro de la etiqueta <script></script> y por último nuestros estilos de CSS dentro de la etiqueta <style></style> -->
<!-- Recordar que para los comentarios lo tengo que hacer de acuerdo al lenguaje, para HTML = <!-- - ->, para el caso del CSS /* */ y para el caso de JS // -->

<!-- veremos que al colocar la etiqueta <script></script> nos surgirán 2 palabras nuevas que son 'export' y 'default'
nos permite exportar por defecto toda la información que le coloquemos, como en el caso de data =>
export default {
  data: () => ({
    title: "Hello"
  })
} -->

<!-- Tenemos que tener en cuenta que la etiqueta <style></style> funciona igual que el CSS y lo que hace es el efecto cascada, eso quiere decir que aplica para todos los elementos, para evitar que esto nos suceda tenemos que usar 'scope' => nos queda <style scope></style> -->

<!-- Veremos que si creamos un nuevo componente y lo cargamos en nuestra app colocando luego la etiqueta que contiene su nombre, observaremos que no sucede nada 
<template>
  <Header></Header>
</template>
Lo que debemos hacer es colocar la etiqueta <script></script> en nuestro archivo app.vue y luego dentro utilizaremos el comando 'import' y luego el nombre de nuestro componente -->

<!-- En el caso de que no hayamos utilizado el comando 'export default', especialmente el segundo tendríamos que colocar nuestro objeto dentro de una const =>
export const Header = {
  props: {
    title: String,
  }
}
Para llamar a este objeto desde nuesto app.vue tenemos que usar el comando siguiente =>
import {Header} from "./components/Header" (le tenemos que indicar la ruta donde está nuestro archivo componente). A los archivos .vue o .js no es necesario ponerle la extensión cuando los llamamos en sus rutas -->

<!-- EL SINGLE FILE COMPONENT NOS PERMITE ADMINISTRAR TODO DE MANERA MUY SENCILLA, ADEMÁS DE QUE PODEMOS MAQUETAR NUESTRA WEB DIRECTAMENTE CREANDO SUS COMPONENTES -->

<!-- En el caso de que querramos importar fuentes, tenemos que usar el comando @import de google fonts y colocarlo en el archivo de nuestra app. Luego la propiedad de font-family irá en nuestro componente. -->

<!-- Recordar que para renderizar nuestros components tenemos que hacer el import en nuestro archivo de app -->

<!-- NO OLIVDAR COLOCAR LAS ETIQUETAS EN MAYÚSCULAS DENTRO DEL TEMPLATE DE NUESTRA APP -->

<!-- Cuando trabajomos con APIs las peticiones las tenemos que hacer desde nuestro contenedor, con el fin de lograr que él mismo nos gestione todas las <Card></Card> y así nos evitamos de poner una a una. Para poder trabajar con la API, recordar que tenemos que crear un 'methods: {}' en él es donde colocaremos nuestro FETCH con el async y el await -->

<!-- Recordar convertir la API en una data JSON => tenemos que colocar const data = await res.json() -->

<!-- Para poder visualizar nuestras 'cards' con los proyectos, tenemos que utilizar el 'html_url' -->

<!-- luego en nuestro container tendremos que crear una 'data' que logre incorporar nuestros projectos como un objeto, para ello podemos colocar => data: () => ({ projects: null }). Así obtenemos nuestros projectos como un objeto. Luego tenemos que indicarle a nuestra function getProjects que this.projects = data. Luego dentro de la etiqueta que contiene a nuestras 'cards' es donde mandamos nuestras props (recordar que tenemos que usar el v-for y para recorrer los objetos debemos utilizar el bucle project in projects). Notaremos que nos dá un error, pero eso sucede porque necesita que le coloquemos una key. Veremos que aparecen todos nuestros projectos. Ahora tenemos que ponerle las propiedades a 'card', recordar que las mismas las tenemos que pasar con v-bind o : delante del atributo -->

<!-- Una vez que tenemos ahora tenemos que colocar las "props" de nuestro objeto en el componente de 'card.vue' con el fin de que pueda mostrar los nombres sin problemas. Le indicamos que tipo de dato va a ser y luego lo colocamos en nuestro donde corresponda. La imagen de la sacamos de la propiedad owner, avatar -->


<!-- Podemos agregar una pantalla de 'loading', para ello podemos crear el componente, el cual no es necesario que tenga el script. Una vez que lo tenemos creado, no olvidemos colocar nuestra etiqueta en nuestro componente container y luego indicarle de dónde lo tiene que importar. Veremos que nos queda todo el tiempo cargado, para poder evitar que ello suceda y sea más dinamico para la carga utilizaremos la comprobación v-if="load". Creamos una propiedad en nuestro objeto data, que sea load y con valor será false. Luego le indicamos que haga la comprobación en nuestro method => this.load = true, y cuando finalice de cargar los datos de nuestra API, pasaremos al this.load = false. Con ello veremos la dinámica de que aparece hasta que se cargan los datos y una vez terminado, veremos que desaparece solo. Lo tenemos que colocar dentro de la function, antes del async y luego del await -->

<!-- Para el caso de querer asignar botones dinámicos, usaremos la propiedad 'homepage' de cada uno de nuestros objetos. Podemos incorporar clases dinámicas utilizando el :class="". Luego en nuestro componente de UrlButton tenemos que configurar el 'exporte default' donde agregamos nuestra 'props' y luego el 'computed' que es donde se encontrará nuestra function que ará la verificación por una clase u otra. Al momento de colocar las url dinámicas, tenemos que buscar en las propiedades de nuestro objeto. Luego también tendremos que colocar en nuestra etiqueta <a :href="url"></a> y en nuestras props: url: String. Tenemos que usar la propiedad HTML_url, una vez que lo tenemos creado en UrlButton y en Card, luego cuando vamos a Container tenemos que colocar en nuestro Card de la sig forma => :url=project.html_url. También tenemos que indicarle de cuál 'prop' es que viene la url y ello lo tenemos que colocar en nuestra Card. Al colocar solamente el url, notaremos que todo nos manda al mismo lugar, para ello podemos cambiar los atributos del botón rojo, para ello tendremos que escribir otra prop nueva. Lo que buscamos es que vaya directo a la homepage, para ello colocamos :url="homepage", luego en nuestro Container dentro de Card, colocamos :homepage="project.homepage". Para los que no tengan HOMEPAGE (o sea que su valor sea 'null') podemos hacer que su renderización sea dinámica. Para ello utilizamos v-if="homepage !== null" preguntamos si es distinto de null -->