import Vue from 'vue'
import App from './main.vue'
import VueRouter from 'vue-router'
import './img/favicon.ico'
import './img/share.png'

import index from './component/index.vue'
import rule from './component/rule.vue'
import award from './component/award.vue'

Vue.use(VueRouter)

const routes = [
    { path: '*', component: index },
    { path: '/index', name: 'index', component: index },
    { path: '/rule', name: 'rule', component: rule },
    { path: '/award', name: 'award', component: award }
]

const router = new VueRouter({
    routes,
    scrollBehavior (to, from, savedPosition) {
      return { x: 0, y: 0 }
    }
})

new Vue({
    el: '#app',
    router,
    render: h => h(App)
});