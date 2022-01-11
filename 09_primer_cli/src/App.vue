

<template>
  <div id="app">
    
    <Header title="GH Portfolio"></Header>

    <Container></Container>

    <Footer></Footer>
  </div>  
</template>



<script>
import Header from "./components/Header";
import Footer from "./components/Footer";
import Container from "./components/Container";

export default {
  components: {
    Header,
    Footer,
    Container,
  }
}

</script>


<style>
@import url('https://fonts.googleapis.com/css2?family=Lato:wght@300;700&display=swap');

  * {
    margin: 0;
    padding: 0;
    font-size: 62.5%;
    font-family: 'Lato', Arial, Helvetica, sans-serif;
  }
  
</style>