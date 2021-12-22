const app = Vue.createApp({
    data: () => ({
        title: 'VUE Gradients Generator',
        fcolor: '#000000',
        scolor: '#ffffff',
        orientation: 0,
        fstop: 0,
        sstop: 0,
        picked: [],
        propHidden: 'hide'
    }),
    // generamos las propiedades computadas que nos permitan realizar el degradado y ver los colores en una caja.
    // para ello creamos un arrow function () => (), recordar que siempre tienen que retornar algo
    // Para probar nuestras funciones podemos pasarlas a una etiqueta <p></p> de nuestra app
    computed: {
        // No conviene usar funciones flechas cuando usamos el 'this'

        setColor() {
            if(this.picked === 'linear') {

                return `background: ${this.picked}-gradient(${this.orientation}deg, ${this.fcolor} ${this.fstop}%, ${this.scolor} ${this.sstop}%)`;

            }else{

                return `background: ${this.picked}-gradient(${this.fcolor} ${this.fstop}%, ${this.scolor} ${this.sstop}%)`;
                
            }

        }    
    },
    
})