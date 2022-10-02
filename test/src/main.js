// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import Vuelidate from 'vuelidate'
import store from './store/store'
import styles from './assets/styles/main.scss'

Vue.config.productionTip = false

Vue.use(Vuelidate)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  components: { App },
  template: '<App/>'
})
