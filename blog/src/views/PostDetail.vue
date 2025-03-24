<template>
  <div>
    <h1>{{ post.title }}</h1>
    <h2>By {{ post.author }}</h2>
    <p>{{ post.body }}</p>
    <li v-for ="tag in post.tags" :key="tag"> <router-link :to="`/tags/${tag}`">{{ tag }}</router-link></li>
    <router-link to="/">Back to Post List</router-link>
  </div>
</template>

<script>
export default {
  data() {
    return {
      post: {}
    };
  },
  created() {
    const postId = this.$route.params.id;
    fetch(`http://localhost:3000/posts/${postId}`)
      .then(response => response.json())
      .then(data => {
        this.post = data;
      });
  }
};
</script>