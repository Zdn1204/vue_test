import Vue from 'vue';
import App from './App.vue';

Vue.config.productionTip = false;
// 全局引入
// 引入ElementUI的组件库
// import ElementUI from 'element-ui'
// 引入ElementUI全部样式
// import 'element-ui/lib/theme-chalk/index.css'

// 按需引入
import { Button,Row,DatePicker } from 'element-ui';

Vue.component('zdn-button',Button);
Vue.component('zdn-row',Row);
Vue.component('zdn-date-picker',DatePicker);
// Vue.use(Button);
// Vue.use(Row);
// Vue.use(DatePicker);

// 应用插件
// Vue.use(ElementUI);



new Vue({
    el:'#app',
    render:h => h(App),
})

