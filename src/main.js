import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'


Vue.config.productionTip = false


// Setup da dos módulos http do Vue para chamadas em API
Vue.prototype.$http = axios;

// Carrega um token do storage local
const token = localStorage.getItem("token");

// Se houver token, carrega o cabeçalho padrão de autorização do axios
if(token){
  Vue.prototype.$http.defaults.headers.common['Authorization'] = token;
}

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
