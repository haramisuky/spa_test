import Vue from 'vue'
import Router from 'vue-router'
import Home from '../pages/Home.vue' //追記
import About from '../pages/About.vue' //追記

Vue.use(Router)

export default new Router({
  mode: 'history',  // 追記 URLに#が入るのを防止
  base: 'test/vue-router-test', //追記 ベースURL 今回はサーバー内のサブディレクトリに保存したいため
  routes: [
    {
      path: '/',
      name: 'home', //追記
      component: Home //pagesフォルダ内のコンポーネント名
    },
    {
      path: '/about', //追記
      name: 'about', //追記
      component: About //追記 こちらのpagesフォルダ内のコンポーネント名
    }
  ]
})