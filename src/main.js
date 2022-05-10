import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import VueRouter from 'vue-router'

import Home from './views/HomeComp.vue';
import About from './views/AboutComp.vue';
import Contact from './views/ContactComp.vue';
import NotFound from './views/NotFound.vue';

Vue.use(VueRouter)

import './scss/main.scss';

const router = new VueRouter({
  mode:'history',
  routes: [
    { path: '/', component: Home },
    { path: '/about', component: About },
    { path: '/contact', component: Contact },
    { path: '*', component: NotFound }
  ]
})
Vue.config.productionTip = false
new Vue({
  router:router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
