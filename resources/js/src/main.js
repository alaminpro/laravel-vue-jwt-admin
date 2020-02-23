import Vue from "vue";
import App from "./App.vue";
import * as VeeValidate from "vee-validate";
import { extend } from 'vee-validate';
import { required, min } from 'vee-validate/dist/rules';
import VueRouter from "vue-router";
import router from "./routes";
import store from './store'

Vue.use(VueRouter);
Vue.use(VeeValidate, { inject: false });


extend('required', {
    ...required,
    message: 'This field is required'
});
extend('min', {
    ...min,
    message: 'This field must be {length} characters long'
});

Vue.filter("capitalize", function (value) {
    if (!value) return "";
    value = value.toString();
    return value.charAt(0).toUpperCase() + value.slice(1);
});

Vue.config.productionTip = false;

Vue.prototype.router = router;
Vue.prototype.goBack = () => {
    router.go(-1);
};
new Vue({
    el: "#app",
    router,
    store,
    render: h => h(App)
});
