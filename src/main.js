/*
入口JS
*/
import Vue from 'vue'
import { Button } from 'mint-ui'
import VueLazyload from 'vue-lazyload'
import App from './App.vue'
import router from './router'
import store from './store'

import './mock/mockServer'
import loading from './common/imgs/loading.gif'
import './fiters'
// import './fiters' // 加载过滤器

Vue.component(Button.name, Button)
Vue.use(VueLazyload, { // 内部自定义一个指令lazy
    loading
})

new Vue({
    el: '#app',
    render: h => h(App),
    router,
    store,
})