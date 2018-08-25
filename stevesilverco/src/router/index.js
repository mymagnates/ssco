import Vue from 'vue'
import Router from 'vue-router'
import directory from '../components/directory'
import contact from '../components/contact'
import about from '../components/about'
import products from '../components/products'
import singleproduct from '../components/singleproduct'

Vue.use(Router)

export default new Router({
  routes: [


    {
      path: '/about',
      name: 'about',
      component: about
    },
    {
      path: '/contact',
      name: 'contact',
      component: contact
    },
    {
      path: '/products',
      name: 'products',
      component: products
    },
    {
      path: '/products/:id',
      name: 'singleproduct',
      component: singleproduct
    },
     {
        path: '/',
        name: 'directory',
        component: directory
      }
  ]
})
