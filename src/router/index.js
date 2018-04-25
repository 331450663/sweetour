import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import home from '@/page/home/home'
import destination from '@/page/destination/destination'
import notesList from '@/page/travelNotes/notesList'
import member from '@/page/member/member'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/', redirect: '/home',
    },{
      path: '/home',
      component: home
    },{
      path: '/destination',
      component: destination
    },{
      path: '/notesList',
      component: notesList
    },{
      path: '/member',
      component: member
    }
  ]
})
