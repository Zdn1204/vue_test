import Vue from 'vue'
import App from './App.vue'

// 引入store
import store from './store/index'

Vue.config.productionTip = false;



new Vue({
    el:'#app',
    render:h => h(App),
    store,//根组件注入store
    // 全局事件总线安装
    beforeCreate() {
        Vue.prototype.$bus = this;
    }
})

