<!-- src/components/AddArticle.vue -->
<template>
  <div class="add-article">
    <h2>Add New Article</h2>
    <form @submit.prevent="submitArticle">
      <div class="form-group">
        <label for="title">Title</label>
        <input type="text" id="title" v-model="title" placeholder="Enter article title" required />
      </div>
      <div class="form-group">
        <label for="content">Content</label>
        <textarea id="content" v-model="content" placeholder="Enter article content" rows="8" required></textarea>
      </div>
      <button type="submit" class="submit-btn">Add Article</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: '',
      content: ''
    };
  },
  methods: {
    submitArticle() {
      // ทำการจัดเก็บข้อมูลบทความที่ได้จากฟอร์ม
      const newArticle = {
        title: this.title,
        content: this.content
      };

      // ทำการแสดงข้อมูลใน console หรือส่งไปยัง server
      console.log('New Article:', newArticle);

      // หลังจากส่งข้อมูลเสร็จ เคลียร์ฟิลด์ของฟอร์ม
      this.title = '';
      this.content = '';

      // แสดงข้อความยืนยันการเพิ่มบทความ
      alert('Article added successfully!');
    }
  }
};
</script>

<style scoped>
.add-article {
  max-width: 600px;
  margin: 2rem auto;
  padding: 2rem;
  border: 1px solid #ddd;
  border-radius: 8px;
  background-color: #ffffff;
}

h2 {
  color: #b30226;
  text-align: center;
  margin-bottom: 1.5rem;
}

.form-group {
  margin-bottom: 1rem;
}

label {
  display: block;
  font-weight: bold;
  margin-bottom: 0.5rem;
  color: #333;
}

input[type="text"],
textarea {
  width: 100%;
  padding: 0.75rem;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 1rem;
}

.submit-btn {
  display: block;
  width: 100%;
  padding: 0.75rem;
  font-size: 1rem;
  background-color: #b30226;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.submit-btn:hover {
  background-color: #a10223;
}
</style>
