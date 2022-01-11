<template>
  <section id="card" class="card">
      <h4>{{ name }}</h4>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reiciendis labore dolores et dolorem, eligendi quasi odit, fuga voluptates consectetur quam, illum voluptatibus rerum sunt totam. Ullam a laboriosam ducimus commodi!</p>
      <p>{{ description }}</p>
      <p>Autor: {{author}}</p>
      <div class="buttons">
          <url-button :url="url"></url-button>
          <url-button color="red" :url="homepage" v-if="homepage != null" title="Deploy"></url-button>
      </div>
  </section>
</template>

<script>
import UrlButton from "./UrlButton.vue"

export default {
    props: {
        name: String,
        description: String,
        author: String,
        url: String,
        homepage: String,
    },
    components: {
        UrlButton,
    }
}
</script>

<style scoped>
.card {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 30rem;
    border: .2rem solid rgb(151, 150, 150);
    border-radius: 1rem;
    padding: .5rem 1rem;
}

.card h4 {
    font-size: 1.8rem;
    font-variant: small-caps;
    font-weight: 700;
}

.card p,
.btn {
    font-size: 1.5rem
}

.card p:nth-child(4) {
    font-weight: 700;
    font-variant: small-caps;
    color: cadetblue;
}

.buttons {
    display: flex;
    gap: 1rem;
    /* width: 100%; */
    /* align-items: center; */
}

</style>