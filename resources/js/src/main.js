import Vue from "vue";
import App from "./App.vue";
import * as VeeValidate from "vee-validate";
import VueRouter from "vue-router";
import router from "./routes";

Vue.use(VueRouter);
Vue.use(VeeValidate, { inject: false });

Vue.filter("capitalize", function(value) {
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
    render: h => h(App)
});
