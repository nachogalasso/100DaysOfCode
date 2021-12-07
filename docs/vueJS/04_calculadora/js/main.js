const app = Vue.createApp({
    data: () => ({
            title: 'Calculadora VUE',
            n1: 0,
            n2: 0,
    }),
    computed: {
        sum() {
            return this.n1 + this.n2
        },
        sub() {
            return this.n1 - this.n2
        },
        multy() {
            return this.n1 * this.n2
        },
        div() {
            return this.n1 / this.n2

            // podemos agregar una operación ternaria para obtener otro tipo de resultado, en vez de que aparezca infnity o NaN y para ello hacemos =>
            // 1ro creamos una constante => const res = this.n1 / this.n2
            // 2do creamos en el return el operador ternario => 
            // return res === infinity || res === -infinity ? "Error - No Calculable" : res;
        }
    }
});