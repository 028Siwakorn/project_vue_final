<template>
  <section class="popular-articles">
    <h2>Popular articles</h2>
    <div class="article-card" v-for="n in 4" :key="n">
      <router-link :to="{ name: 'ArticleDetails', params: { id: n } }" class="article-link">
        <div class="image-container">
          <img
            :src="`https://blog.ttt-website.com/wp-content/uploads/2023/08/ChatGPT.jpg`"
            alt="Article Image"
            class="article-image"
          />
        </div>
        <div class="content">
          <h3>Ultimate ChatGPT cheatsheet for UX UI Designers</h3>
          <p>Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet.</p>
        </div>
      </router-link>
    </div>
    <button class="view-all-btn">View all</button>
  </section>
</template>

<style scoped>
.popular-articles {
  text-align: center;
  padding: 2rem;
  background-color: #f9f9f9;
}

.popular-articles h2 {
  font-size: 2rem;
  font-weight: bold;
  color: #333;
  margin-bottom: 2rem;
}

.article-card {
  display: flex;
  align-items: center;
  gap: 1.5rem;
  margin-bottom: 1.5rem;
  border: 1px solid #ccc;
  border-radius: 10px;
  padding: 1rem;
  max-width: 600px;
  margin: 0 auto;
  background-color: white;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.article-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.article-link {
  display: flex;
  text-decoration: none;
  color: inherit;
  width: 100%;
}

.image-container {
  flex: 0 0 auto;
  width: 150px;
  height: 150px;
  margin-right: 1rem; /* Added spacing between image and content */
}

.article-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 5px;
}

.content {
  flex: 1;
}

.content h3 {
  font-size: 1.2rem;
  color: #333;
  margin-bottom: 0.5rem;
  font-weight: bold;
}

.content p {
  color: #666;
  font-size: 1rem;
  line-height: 1.5;
}

.view-all-btn {
  background-color: #f39c12;
  padding: 0.75rem 1.5rem;
  border-radius: 5px;
  color: white;
  border: none;
  cursor: pointer;
  font-weight: bold;
  transition: background-color 0.3s ease;
  display: block;
  margin: 2rem auto;
}

.view-all-btn:hover {
  background-color: #e67e22;
}
</style>
