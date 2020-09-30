<template>
  <v-app>
    <toolbar></toolbar>
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
