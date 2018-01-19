import Vue from 'vue'
import Router from 'vue-router'
import Auth from '@/components/Auth'
import Posts from '@/components/Posts'
import Article from '@/components/Article'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Authorization',
      component: Auth
    },
    {
      path: '/posts/',
      redirect: '/posts/1'
    },
    {
      path: '/posts/:page',
      name: 'Posts',
      component: Posts
    },
    {
      path: '/article/:id',
      name: 'Article',
      component: Article
    }
  ]
})
