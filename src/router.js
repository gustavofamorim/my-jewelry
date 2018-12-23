import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/jewel-filter',
      name: 'JewelsFilter',
      component: () => import(/* webpackChunkName: "filters" */ './views/Filter.vue')
    },
    {
      path: '/my-sells',
      name: 'my-sells',
      component: () => import(/* webpackChunkName: "my-sells" */ './views/MySells.vue')
    },
    {
      path: '/new',
      name: 'New',
      component: () => import(/* webpackChunkName: "new" */ './views/New/index.vue'),
      children: [
        {
          path: 'jewel',
          name: 'NewJewel',
          component: () => import(/* webpackChunkName: "new" */ './views/New/NewJewel.vue')
        },
        {
          path: 'seller',
          name: 'NewSeller',
          component: () => import(/* webpackChunkName: "new" */ './views/New/NewSeller.vue')
        },
        {
          path: 'category',
          name: 'NewCategory',
          component: () => import(/* webpackChunkName: "new" */ './views/New/NewCategory.vue')
        },
        {
          path: 'sale/:uuid',
          name: 'NewSale',
          component: () => import(/* webpackChunkName: "new" */ './views/New/NewSale.vue')
        }
      ]
    },
    {
      path: '/analytics',
      name: 'analytics',
      component: () => import(/* webpackChunkName: "analytics" */ './views/Analytics.vue')
    },
    {
      path: '/config',
      name: 'config',
      component: () => import(/* webpackChunkName: "config" */ './views/Configs.vue')
    }
  ]
})
