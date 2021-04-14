import Vue from 'vue'
import App from './App'
import "./common/iconfont/iconfont.css"
Vue.config.productionTip = false

import uView from 'uview-ui';
Vue.use(uView);

App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()
