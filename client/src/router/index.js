import Vue from 'vue'
import Router from 'vue-router'
import Client from '@/components/Client'
import CreateClient from '@/components/CreateClient'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Client',
      component: Client
    },
    {
      path: '/createclient',
      name: 'CreateClient',
      component: CreateClient
    }
  ]
})
