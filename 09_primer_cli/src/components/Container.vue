<template>
  <main id="container" class="container">
      <figure class="card-container">
          <img src="https://avatars.githubusercontent.com/u/79938021?v=4" alt="Mi github avatar" loading="lazy">
      </figure>
      <h2 class="title">Contenido</h2>
      <section class="section">
          <p class="text">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis magni repellendus hic dignissimos. Porro eius consectetur nulla incidunt amet? Cupiditate dignissimos nostrum consectetur minus in unde delectus aut qui quis?</p>
          <loading v-if="load"></loading>
          <section class="card-container" v-for="project in projects" :key="project.id">
              <Card 
                :name="project.name"
                :description="project.description"
                :author="project.owner.login"
                :url="project.html_url"
                :homepage="project.homepage">
              </Card>
          </section>
      </section>
  </main>
</template>

<!-- veremos que dentro de nuestro contenedor podremos importar otros tipos de archivos .vue ellos tenemos que colocarlos dentro de nuestra etiqueta 'script' y en export default, identificarlo como 'component'. No olvidar que también tenemos que colocar el 'import' y colocar nuestra etiqueta Card dentro del <template></template> => -->

<script>
import Card from "./Card";
import Loading from "./Loading";
import UrlButton from './UrlButton.vue';

export default {
    data: () => ({
        projects: null,
        load: false,
    }),

    components: {
        Card,
        Loading,
        UrlButton,
    },

    mounted() {
        this.getProjects();
    },

    methods: {
        async getProjects() {
            this.load = true;
            const res = await fetch('https://api.github.com/users/nachogalasso/repos');

            const data = await res.json();

            this.load = false;
            this.projects = data;
            console.log(this.projects);
        } 
    }
}
</script>

<style scoped>
img {
    display: block;
    width: 100%;
    height: auto;
    border-radius: 50%;
}


.container {
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color:beige;
    padding: 1rem 3rem;
    overflow: hidden;
}

.card-container {
    width: 30rem;
}

.title {
    font-size: 3rem;
    font-variant: small-caps;
}

.section {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 2rem 0;
    padding: 3rem 2rem;
    border-radius: 2rem;
    box-shadow: .1rem .1rem 1rem black;
    width: 30rem;
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