<template>
  <a :href="url" target="_blank"  :class="setColor">{{ title }}</a>
</template>

<script>
export default {
    props: {
        color: String,
        url: String,
        title: {
            type: String,
            default: 'Github',
        }
    },
    computed: {
        setColor() {
            return this.color == 'red' ? "btn btn-red" : "btn btn-green";
        }
    }
}
</script>

<style scoped>

.btn {
    margin: 1rem 2rem;
    text-decoration: none;
    padding: 1rem 1.5rem;
    border-radius: 2rem;
    color: #fff;
    font-weight: 700;
}

.btn-green {
    background-color: rgb(28, 110, 8);
    outline: .2rem solid rgb(28, 110, 8);
    outline-offset: .2rem;
}

.btn-red {
    background-color: rgb(110, 8, 8);
    outline: .2rem solid rgb(110, 8, 8);
    outline-offset: .2rem;
}

</style>