import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import signup from '@/components/signup'
import Outing from '@/components/outing'
import Outpass from '@/components/outpass'
import amiclean from '@/components/amiclean'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/signup',
      name: 'signup',
      component: signup
    },
    {
      path: '/outpass',
      name: 'outpass',
      component: Outpass
    },
    {
      path: '/outing',
      name: 'outing',
      component: Outing
    },
    {
      path: '/amiclean',
      name: 'amiclean',
      component: amiclean
    }
    
  ]
})
