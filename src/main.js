/*
 * @Author: Yong
 * @Date: 2022-06-05 18:34:45
 * @LastEditors: Yong
 * @LastEditTime: 2022-06-05 18:36:15
 * @Description:
 */
import Vue from "vue";
import App from "./App.vue";

Vue.config.productionTip = false;
import VueLuckyCanvas from "@lucky-canvas/vue";
Vue.use(VueLuckyCanvas);

new Vue({
	render: (h) => h(App),
}).$mount("#app");
