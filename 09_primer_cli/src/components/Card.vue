<template>
  <section id="card" class="card">
      <h4>Name Project</h4>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reiciendis labore dolores et dolorem, eligendi quasi odit, fuga voluptates consectetur quam, illum voluptatibus rerum sunt totam. Ullam a laboriosam ducimus commodi!</p>
  </section>
</template>

<script>
export default {

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

.card p {
    font-size: 1.2rem
}


</style>