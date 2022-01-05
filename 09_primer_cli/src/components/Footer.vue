<template>
  <div class="footer">
    <footer>
        <p>&copy; Nakio Galasso - {{ year }}</p>
    </footer>
  </div>
</template>

<script>
export default {
    computed: {
        year() {
            return new Date().getFullYear();
        }
    }
}
</script>

<style scoped>
    p {
        padding: 0.5rem 0 1rem;
        font-size: 1.2rem;
        color: black;
        text-align: center;
        background-color: rgba(255, 0, 0, 0.5);
    }
</style>