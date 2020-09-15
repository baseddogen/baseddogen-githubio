import Vue from 'vue'
import Router from 'vue-router'
import Generator from '@/components/Generator'
import Hello from '@/components/Hello'
import ViewTag from '@/components/ViewTag'
import ViewTagByDate from '@/components/ViewTagByDate'
import ViewPostByDateIndex from '@/components/ViewPostByDateIndex'
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(VueAxios, axios)
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/new',
      name: 'Generator',
      component: Generator
    },
    {
      path: '/tag/:id',
      name: 'ViewTag',
      component: ViewTag
    },
    {
      path: '/tag/:id/date/:date',
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
