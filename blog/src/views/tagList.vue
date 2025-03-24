<template>
    <div>
      <h2>Tags</h2>
      <ul>
        <li v-for="tag in uniqueTags" :key="tag">
          <router-link :to="`/tags/${tag}`">{{ tag }}</router-link>
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        posts: [],
        uniqueTags: []
      };
    },
    created() {
      this.fetchPosts();
    },
    methods: {
      async fetchPosts() {
        try {
          const response = await fetch('http://localhost:3000/posts');
          this.posts = await response.json();
          this.extractUniqueTags();
        } catch (error) {
          console.error('Error fetching posts:', error);
        }
      },
      extractUniqueTags() {
        // Extract all tags and remove duplicates
        const allTags = this.posts.flatMap(post => post.tags);
        this.uniqueTags = [...new Set(allTags)];
      }
    }
  };
  </script>
  
  <style scoped>
  ul {
    list-style-type: none;
    padding: 0;
  }
  
  li {
    margin: 0.5rem 0;
  }
  
  a {
    text-decoration: none;
    color: #42b983;
  }
  
  a:hover {
    text-decoration: underline;
  }
  </style>