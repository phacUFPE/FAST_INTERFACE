import Vue from 'vue'

import App from '@/App.vue'
import font from '@/plugins/font-awesome'
import '@mdi/font/css/materialdesignicons.css'
import vuetify from '@/plugins/vuetify'

Vue.config.productionTip = false

new Vue({
  font,
  vuetify,
  render: h => h(App)
}).$mount('#app')
