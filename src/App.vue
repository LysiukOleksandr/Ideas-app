<template>
  <v-app>
    <toolbar></toolbar>
    <v-main>
      <transition
        mode="out-in"
        name="fade"
        enter-active-class="animate__animated animate__zoomIn"
        leave-active-class="animate__animated animate__zoomOut"
        :duration="1000"
      >
        <router-view></router-view>
      </transition>
    </v-main>
  </v-app>
</template>

<script>
import Toolbar from "./components/toolbar";
export default {
  name: "App",
  components: {
    toolbar: Toolbar
  }
};
</script>
