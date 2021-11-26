const app = Vue.createApp({
    data(){
        return {
            title: 'Contador App - VUE',
            count: 0,
        }
    },
    // Aquí en el JSON es donde cargamos los eventos de los botones. Recordar que para acceder a las propiedades del objeto JSON usamos 'this' y lo colocomas antes de la propiedad => 'this.count' y así modificamos 'count'
    methods: {
        // Con los parámetros le podemos poner límites donde termina de contar => modCount(instruction = "add"), no olvidar que tenemos que definir nuestra 'instruction', ellos le tenemos que definir en el el html
        // si a (instruction = 'add' le agrego un 'limit' y luego lo reemplazo en el this.count le estoy indicando cómo quiero que suba o baje de valor => (instruction = 'add', limit = 1)
        modCount(instruction = "add") {
            if(instruction === "dis") {
                this.count -= 1;
            }else{
                this.count += 1;
            }
        },

        rstCount() {
            this.count = 0;
        },

        
        // decCount(){
        //     console.log('down');
        //     this.count -= 1;
        // },
        // incCount(){
        //     console.log('up');
        //     this.count += 1;
        // }
    }
})