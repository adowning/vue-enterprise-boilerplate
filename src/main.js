import Vue from 'vue'
import App from './app'
import provide from './apollo'
import router from '@router'
import store from '@state/store'
import '@components/globals'

// Don't warn about using the dev version of Vue in development
Vue.config.productionTip = process.env.NODE_ENV === 'production'

new Vue({
  router,
  store,
  provide,
  render: h => h(App),
}).$mount('#app')
