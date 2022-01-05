<template>
  <main id="container" class="container">
      <h2 class="title">Contenido</h2>
      <section class="section">
          <p class="text">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis magni repellendus hic dignissimos. Porro eius consectetur nulla incidunt amet? Cupiditate dignissimos nostrum consectetur minus in unde delectus aut qui quis?</p>
          <section class="card-container">
              <Card></Card>
              <Card></Card>
              <Card></Card>
              <Card></Card>
              <Card></Card>
              <Card></Card>
              <Card></Card>
              <Card></Card>
              <Card></Card>
          </section>
      </section>
  </main>
</template>

<!-- veremos que dentro de nuestro contenedor podremos importar otros tipos de archivos .vue ellos tenemos que colocarlos dentro de nuestra etiqueta 'script' y en export default, identificarlo como 'component'. No olvidar que también tenemos que colocar el 'import' y colocar nuestra etiqueta Card dentro del <template></template> => -->

<script>
import Card from "./Card";

export default {
    components: {
        Card,
    }
}
</script>

<style scoped>

.container {
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color:beige;
    padding: 1rem 3rem;
    overflow: hidden;
}

.title {
    font-size: 3rem;
    font-variant: small-caps;
}

.section {
    margin: 2rem 0;
    padding: 3rem 2rem;
    border-radius: 2rem;
    box-shadow: .1rem .1rem 1rem black;
}

.text {
    padding-bottom: 1rem;
    font-size: 1.2rem;
}

.card-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 1rem;
}

</style>