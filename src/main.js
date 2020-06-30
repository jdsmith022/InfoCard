import Vue from 'vue'
import App from './App.vue'
import './assets/sass/index.scss'
import "@fortawesome/fontawesome-free/css/all.css"
import "bulma/css/bulma.css"


Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
