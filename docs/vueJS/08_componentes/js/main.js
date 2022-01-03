const app = Vue.createApp({
    data: () => ({
        title: 'Componentes',
        countries: ['Argentina', 'España', 'USA', 'Inglaterra', 'Brasil', 'Alemania']
    }),
})


// const info = Vue  - Con ello podemos ver el objeto que compone a todo VUE, cuando le damos el console.log(info)
// console.log(info) - pero si le cambiamos por de const app, veremos ol objeto que de nuestro Vue.createApp =>
// console.log(app) - aquí encontraremos nuestros "components" y ella es la que utilizamos para crear nuestros 
// componentes, veremos que es una función que utiliza 2 parámetros => f (name, component).