<!-- src/App.vue -->
<template>
  <div id="app">
    <Navbar />
    <router-view />
    <Footer />
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue';
import Footer from './components/Footer.vue';

export default {
  components: {
    Navbar,
    Footer
  }
};
</script>

<style>
#app {
  font-family: Arial, sans-serif;
  background-color: #ffffff;
  color: #333;
}
</style>
