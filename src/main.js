import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import App from './App.vue'
import locale from 'element-ui/lib/locale/lang/ja' //追加
import router from './router'


Vue.use(ElementUI, { locale }) //変更

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})

new Vue({
    router,
    render: h => h(App),
}).$mount('#app')