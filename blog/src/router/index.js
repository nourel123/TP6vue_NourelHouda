import { createRouter, createWebHistory } from 'vue-router'
import PostList from '../views/PostList.vue';
import PostDetail from '../views/PostDetail.vue';
import CreatePostView from '@/views/CreatePostView.vue';
import Tags from '@/views/tagList.vue';
import tagDetail from '@/views/tagDetail.vue';
const routes = [
  {
    path: '/',
    name: 'PostList',
    component: PostList
  },
  {
    path: '/posts/:id',
    name: 'PostDetail',
    component:PostDetail
  },
  {
    path: '/addpost',
    name: 'CreatePost',
    component:CreatePostView
  },
  {
    path:"/tags",
    name:"Tags",
    component:Tags
  },
  {
    path:"/tags/:id",
    name:"tagDetail",
    component:tagDetail
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
