import Vue from 'vue'
import App from './App.vue'
import './assets/sass/index.scss'
import "@fortawesome/fontawesome-free/css/all.css"
import "bulma/css/bulma.css"
import co2okInfoCard from '../co2ok-info-lib'

Vue.use(co2okInfoCard)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
