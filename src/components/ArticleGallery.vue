<template>
  <div class="article-gallery">
    <div class="gallery-item" v-for="n in 6" :key="n">
      <img
        :src="`https://media.wired.com/photos/66425c483aeee12d6ca99835/1:1/w_1800,h_1800,c_limit/New-ChatGPT-Tier-Gear-GettyImages-2151457871.jpg`"
        alt="Article Image"
        class="gallery-image"
      />
    </div>
  </div>
</template>

<style scoped>
.article-gallery {
  display: flex;
  gap: 1.5rem;
  overflow-x: scroll;
  padding: 1.5rem 2rem;
  background-color: #f8f8f8;
  border-radius: 10px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.gallery-item {
  flex: 0 0 auto;
  width: 300px;
  height: 300px;
  position: relative;
  border-radius: 10px;
  overflow: hidden;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.gallery-item:hover {
  transform: scale(1.05);
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.2);
}

.gallery-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 10px;
  transition: transform 0.3s ease;
}

.gallery-item:hover .gallery-image {
  transform: scale(1.05);
}

.article-gallery::-webkit-scrollbar {
  height: 8px;
}

.article-gallery::-webkit-scrollbar-thumb {
  background-color: #ccc;
  border-radius: 4px;
}

.article-gallery::-webkit-scrollbar-thumb:hover {
  background-color: #999;
}
</style>
