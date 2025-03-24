<template>
    <div>
      <h1>Posts with Tag: {{ tag }}</h1>
      <ul>
        <li v-for="post in filteredPosts" :key="post.id">
          <router-link :to="`/posts/${post.id}`">{{ post.title }}</router-link>
        </li>
      </ul>
      <router-link to="/">Back to Home</router-link>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        tag: this.$route.params.tag,
        posts: [],
        filteredPosts: []
      };
    },
    created() {
      this.fetchPosts();
    },
    methods: {
      async fetchPosts() {
        try {
          const response = await fetch('http://localhost:3000/posts');
          if (!response.ok) {
            throw new Error('Failed to fetch posts');
          }
          this.posts = await response.json();
          console.log('All posts:', this.posts); // Debugging
          this.filterPostsByTag();
        } catch (error) {
          console.error('Error fetching posts:', error);
        }
      },
      filterPostsByTag() {
        console.log('Filtering posts by tag:', this.tag); // Debugging
        this.filteredPosts = this.posts.filter(post =>
          post.tags.map(tag => tag.trim().toLowerCase()).includes(this.tag.trim().toLowerCase())
        );
        console.log('Filtered posts:', this.filteredPosts); // Debugging
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
    margin: 1rem 0;
  }
  
  a {
    text-decoration: none;
    color: #42b983;
  }
  
  a:hover {
    text-decoration: underline;
  }
  </style>