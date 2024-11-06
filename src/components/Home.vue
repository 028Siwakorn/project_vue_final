<!-- src/components/Home.vue -->
<template>
  <div class="home">
    <Hero />
    <ArticleGallery />
    <PopularArticles />
  </div>
</template>

<script>
import Hero from './Hero.vue';
import ArticleGallery from './ArticleGallery.vue';
import PopularArticles from './PopularArticles.vue';

export default {
  components: {
    Hero,
    ArticleGallery,
    PopularArticles
  }
};
</script>

<style scoped>
.home {
  padding: 1rem 0;
}
</style>
