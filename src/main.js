import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
// import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import CoreuiVue from '@coreui/vue';


createApp(App).use(store).use(router).use(VueAxios, axios).use(CoreuiVue).mount("#app");


