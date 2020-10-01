import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";
import Vuelidate from "vuelidate";

import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

Vue.use(Vuelidate);

Vue.config.productionTip = false;

firebase.initializeApp({
  apiKey: "AIzaSyAXgNZkgW9VaHNaXmMpgviw2r2GKTULu2s",
  authDomain: "ideas-app-9541d.firebaseapp.com",
  databaseURL: "https://ideas-app-9541d.firebaseio.com",
  projectId: "ideas-app-9541d",
  storageBucket: "ideas-app-9541d.appspot.com",
  messagingSenderId: "703222182249",
  appId: "1:703222182249:web:155e2d47ebd8ba632e4df8"
});

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount("#app");
