<template>
  <v-app>
    <toolbar></toolbar>
    <v-main>
      <router-view></router-view>
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
