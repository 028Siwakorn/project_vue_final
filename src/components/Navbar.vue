<template>
  <nav class="navbar">
    <div class="logo">BLOG</div>
    <ul class="nav-links">
      <li><router-link to="/">Popular articles</router-link></li>
      <li><router-link to="/">NPRU articles</router-link></li>
      <li><router-link to="/">New articles Write</router-link></li>
    </ul>
    <div class="auth-buttons">
      <router-link to="/login" class="login">LOGIN</router-link>
      <router-link to="/get-started" class="get-started">GET STARTED</router-link>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Navbar"
};
</script>

<style scoped>
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background-color: white;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.logo {
  font-weight: bold;
  font-size: 1.5rem;
  color: #b30226;
}

.nav-links {
  display: flex;
  list-style: none;
  gap: 1.5rem;
}

.nav-links a {
  color: #333;
  text-decoration: none;
}

.auth-buttons {
  display: flex;
  gap: 1rem;
}

.login {
  color: #b30226;
  text-decoration: none;
  padding: 0.5rem 1rem;
  border: 2px solid #b30226;
  border-radius: 5px;
  font-weight: 600;
  transition: background-color 0.3s ease, color 0.3s ease;
}

.login:hover {
  background-color: #b30226;
  color: white;
}

.get-started {
  background-color: #b30226;
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  text-decoration: none;
  font-weight: bold;
  transition: background-color 0.3s ease, transform 0.2s ease;
}

.get-started:hover {
  background-color: #a10223;
  transform: translateY(-2px);
}
</style>
