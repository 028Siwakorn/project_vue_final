<template>
  <section class="article-details">
    <div class="article-container">
      <img :src="article.image" alt="Article Image" class="article-image" />
      <div class="article-content">
        <h1>{{ article.title }}</h1>
        <p class="author">By {{ article.author }}</p>
        <div class="article-body">
          <p>{{ article.content }}</p>
        </div>
      </div>
    </div>
    <router-link to="/" class="back-to-home">Back to Home</router-link>
  </section>
</template>

<script>
export default {
  data() {
    return {
      article: {
        title: 'Loading...',
        author: 'Loading...',
        content: 'Loading...',
        image: '' // Default image
      }
    };
  },
  mounted() {
    const articleId = this.$route.params.id;
    this.fetchArticleDetails(articleId);
  },
  methods: {
    fetchArticleDetails(id) {
      // Simulating article details fetching based on the `id`
      const articles = [
        {
          id: '1',
          title: 'Ultimate ChatGPT cheatsheet for UX UI Designers',
          author: 'John Doe',
          content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
          image: 'https://blog.ttt-website.com/wp-content/uploads/2023/08/ChatGPT.jpg'
        },
        {
          id: '2',
          title: 'The Future of AI in Web Design',
          author: 'Jane Doe',
          content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
          image: 'https://via.placeholder.com/600x400'
        }
      ];
      
      const article = articles.find(a => a.id === id);
      if (article) {
        this.article = article;
      }
    }
  }
};
</script>

<style scoped>
.article-details {
  padding: 2rem;
  background-color: #f9f9f9;
}

.article-container {
  display: flex;
  gap: 2rem;
  max-width: 900px;
  margin: 0 auto;
}

.article-image {
  width: 300px;
  height: 200px;
  object-fit: cover;
  border-radius: 8px;
}

.article-content {
  flex: 1;
}

.article-content h1 {
  font-size: 2rem;
  color: #333;
}

.author {
  font-size: 1rem;
  color: #555;
}

.article-body {
  margin-top: 1rem;
}

.article-body p {
  font-size: 1.1rem;
  color: #333;
  line-height: 1.6;
}

.back-to-home {
  display: inline-block;
  margin-top: 2rem;
  background-color: #b30226;
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 5px;
  text-decoration: none;
  font-weight: bold;
}

.back-to-home:hover {
  background-color: #a10223;
}
</style>
