<template>
  <div>
    <h1>Blog Posts</h1>
    <ul>
      <li v-for="post in posts" :key="post.id">
        <router-link :to="`/posts/${post.id}`">{{ post.title }} by {{ post.author }}</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      posts: []
    };
  },
  created() {
    fetch('http://localhost:3000/posts')
      .then(response => response.json())
      .then(data => {
        this.posts = data;
      });
  }
};
</script>