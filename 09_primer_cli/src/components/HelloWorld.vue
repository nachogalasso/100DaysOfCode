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
