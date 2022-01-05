<template>
    <header>
        <h1> {{title}} </h1>
    </header>
</template>



<script>

export default {
  props: {
      title: String,
  }
}

</script>


<style scoped>
  h1 {
    background-color: rgba(255, 188, 150, 0.6);
    color: rgb(24, 1, 1);
    padding: .5rem;
    font-size: 4rem;
    text-align: center;
    font-family: 'Lato', Arial, Helvetica, sans-serif;
  }
</style>