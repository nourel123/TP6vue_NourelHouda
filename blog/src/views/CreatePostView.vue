<template>
    <div>
      <h1>Add a New Post</h1>
      <form @submit.prevent="addPost">
        <label for="title">Title:</label>
        <input type="text" id="title" v-model="newPost.title" required />
  
        <label for="author">Author:</label>
        <input type="text" id="author" v-model="newPost.author" required />
  
        <label for="body">Body:</label>
        <textarea id="body" v-model="newPost.body" required></textarea>
  
        <label for="tags">Tags (comma-separated):</label>
        <input type="text" id="tags" v-model="tagsInput" />
  
        <button type="submit">Add Post</button>
      </form>
      <router-link to="/">Back to Posts</router-link>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        newPost: {
          title: '',
          author: '',
          body: '',
          tags: []
        },
        tagsInput: '' // Separate input for tags
      };
    },
    methods: {
      addPost() {
        // Convert tagsInput (string) into an array of tags
        this.newPost.tags = this.tagsInput.split(',').map(tag => tag.trim());
  
        fetch('http://localhost:3000/posts', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(this.newPost)
        })
          .then(response => response.json())
          .then(() => {
            alert('Post added successfully!');
            this.$router.push('/'); // Redirect to post list
          })
          .catch(error => {
            console.error('Error adding post:', error);
          });
      }
    }
  };
  </script>
  
  <style scoped>
  /* Optional: Add some basic styling */
  form {
    max-width: 500px;
    margin: 0 auto;
    padding: 1rem;
    border: 1px solid #ddd;
    border-radius: 5px;
  }
  
  label {
    display: block;
    margin-top: 1rem;
  }
  
  input,
  textarea {
    width: 100%;
    padding: 0.5rem;
    margin-top: 0.5rem;
  }
  
  button {
    margin-top: 1rem;
    padding: 0.5rem 1rem;
    background-color: #42b983;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }
  
  button:hover {
    background-color: #369f6e;
  }
  </style>