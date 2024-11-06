<template>
  <section class="login-section">
    <h2>Login</h2>
    <form @submit.prevent="handleLogin" class="login-form">
      <div class="input-group">
        <label for="username">Username or Email</label>
        <input
          type="text"
          id="username"
          v-model="username"
          placeholder="Enter your username or email"
          required
        />
      </div>
      <div class="input-group">
        <label for="password">Password</label>
        <input
          type="password"
          id="password"
          v-model="password"
          placeholder="Enter your password"
          required
        />
      </div>
      <button type="submit" class="login-btn">Login</button>
      <div class="auth-links">
        <router-link to="/get-started" class="get-started">Create an account</router-link>
        <router-link to="/forgot-password" class="forgot-password">Forgot Password?</router-link>
      </div>
    </form>
  </section>
</template>

<script>
export default {
  data() {
    return {
      username: '',
      password: ''
    };
  },
  methods: {
    handleLogin() {
      // Handle login logic here
      console.log('Logging in with:', this.username, this.password);
      // You can implement your login logic with API calls here
    }
  }
};
</script>

<style scoped>
.login-section {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f2f2f2;
  padding: 2rem;
}

.login-form {
  background-color: white;
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 400px;
}

.login-form h2 {
  font-size: 2rem;
  margin-bottom: 1.5rem;
  color: #333;
}

.input-group {
  margin-bottom: 1.5rem;
}

.input-group label {
  display: block;
  font-size: 1rem;
  color: #333;
  margin-bottom: 0.5rem;
}

.input-group input {
  width: 100%;
  padding: 0.75rem;
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 5px;
}

.input-group input:focus {
  outline: none;
  border-color: #f39c12;
}

.login-btn {
  width: 100%;
  padding: 0.75rem;
  background-color: #f39c12;
  border: none;
  color: white;
  font-weight: bold;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.login-btn:hover {
  background-color: #e67e22;
}

.auth-links {
  display: flex;
  justify-content: space-between;
  margin-top: 1rem;
}

.auth-links a {
  color: #333;
  text-decoration: none;
}

.auth-links .get-started {
  color: #f39c12;
}

.auth-links .forgot-password {
  color: #999;
}

.auth-links a:hover {
  text-decoration: underline;
}
</style>
