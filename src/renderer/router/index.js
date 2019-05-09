import Vue from 'vue'
import Router from 'vue-router'
import  VideoPlayer from '@/components/VideoPlayer.vue';
Vue.use(Router);



export default new Router({
  routes: [
    {
      path: '/',
      name: 'main-page',
      component: require('@/components/MainPage').default
    },
    {
        path: '/videoplayer',
        name: 'videoplayer',
        component:VideoPlayer
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})
