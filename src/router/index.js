import Vue from 'vue'
import Router from 'vue-router'
import MainView from '@/components/MainView'
import Presenter from '@/components/Presenter'
import List from '@/components/List'
Vue.use(Router)




export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: MainView,
      children: [
        {
          path: '',
          name: 'List',
          component: List
        },
        {
          path: ':id',
          name: 'Presenter',
          component: Presenter
        }
      ]
    },
  ]
})
