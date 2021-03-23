import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import HomePage from "../views/HomePage";
import About from "../views/About";
import App from "../App";
import After from "../views/After";
import TrendingSpam from "../components/TrendingSpam";
import FormSpam from "../components/FormSpam";
import Footer from "../components/Footer";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: App
  },
  {
    path: '/after',
    name: 'after',
    component: After
  },
  {
    path: '/formSpam',
    name: 'Form Spam',
    component: FormSpam
  },
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/trending',
    name: 'Trending Spam',
    component: TrendingSpam
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/footer',
    name: 'footer',
    component: Footer
  },
]

const router = new VueRouter({
  mode: 'history',
})

export default router
