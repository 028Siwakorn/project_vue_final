import { createRouter, createWebHistory } from 'vue-router';
import Home from '../components/Home.vue';
import AddArticle from '../components/AddArticle.vue';
import Login from '../components/Login.vue';
import ArticleDetails from '../components/ArticleDetails.vue'; // Import the ArticleDetails component

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/add-article', name: 'AddArticle', component: AddArticle },
  { path: '/login', name: 'Login', component: Login },
  { path: '/article-details/:id', name: 'ArticleDetails', component: ArticleDetails } // Dynamic ID for ArticleDetails
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
