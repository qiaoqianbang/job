import Vue from 'vue';
import App from './App.vue';
import router from './router';
import request from '../src/utils/request';
import { Button, Field, Col, Row, RadioGroup, Radio, Toast } from 'vant';
Vue.use(Col);
Vue.use(Row);
Vue.use(Button);
Vue.use(Field);
Vue.use(Radio);
Vue.use(RadioGroup);
Vue.use(Toast);

Vue.config.productionTip = false;
Vue.prototype.$axios = request;
new Vue({
    router,
    render: h => h(App),
}).$mount('#app');