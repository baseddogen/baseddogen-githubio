import Vue from 'vue'
import Router from 'vue-router'
import Generator from '@/components/Generator'
import Home from '@/components/Home'
import ViewTag from '@/components/ViewTag'
import ViewTagByDate from '@/components/ViewTagByDate'
import ViewPostByDateIndex from '@/components/ViewPostByDateIndex'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/new',
      name: 'Generator',
      component: Generator
    },
    {
      path: '/tag/:tag',
      name: 'ViewTag',
      component: ViewTag
    },
    {
      path: '/tag/:tag/date/:date',
      name: 'ViewTagByDate',
      component: ViewTagByDate
    },
    {
      path: '/tag/:tag/date/:date/:index',
      name: 'ViewPostByDateIndex',
      component: ViewPostByDateIndex
    }
  ]
})
