import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

const routes = [
  {
    path: '/home',
    name: 'Home',
    component: () => import('../views/Home.vue')
  },
  {
    path: '/blogs',
    name: 'Blogs',
    component: () => import('../views/Blogs.vue')
  },
  {
    path: '/addblog',
    name: 'AddBlog',
    component: () => import('../views/AddBlog.vue')
  },
]

const router = new VueRouter({
  routes
})

export default router
