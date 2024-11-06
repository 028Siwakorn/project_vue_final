<template>
  <section class="hero">
    <h1>Stay curious.</h1>
    <p>Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit.</p>
    <button class="start-reading-btn">START READING</button>
  </section>
</template>

<style scoped>
.hero {
  text-align: center;
  padding: 3rem;
  background-color: #f4f4f4;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.hero h1 {
  font-size: 3rem;
  color: #b30226;
  margin-bottom: 1rem;
  font-weight: 700;
  letter-spacing: 2px;
}

.hero p {
  font-size: 1.2rem;
  color: #555;
  margin-bottom: 2rem;
  line-height: 1.6;
}

.start-reading-btn {
  background-color: #b30226;
  color: white;
  padding: 0.75rem 2rem;
  border-radius: 5px;
  font-size: 1rem;
  text-transform: uppercase;
  cursor: pointer;
  border: none;
  transition: background-color 0.3s ease, transform 0.2s ease;
}

.start-reading-btn:hover {
  background-color: #9c0221;
  transform: translateY(-2px);
}

.start-reading-btn:focus {
  outline: none;
  box-shadow: 0 0 0 2px rgba(179, 2, 38, 0.5);
}
</style>
