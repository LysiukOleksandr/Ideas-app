<template>
  <v-card height="85px" flat tile>
    <v-toolbar class="deep-purple darken-2" dark>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

      <v-toolbar-title>Ideas App</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn text color="white" class="mr-10" router to="/login">
        Login
      </v-btn>
      <!-- <v-btn icon class="mr-10" >
        Log out
      </v-btn> -->
    </v-toolbar>
    <v-navigation-drawer
      v-model="drawer"
      app
      class="deep-purple darken-2"
      temporary
      overlay-opacity="0.7"
    >
    </v-navigation-drawer>
  </v-card>
</template>

<script>
export default {
  name: "toolbar",
  data: () => {
    return {
      drawer: false
    };
  }
};
</script>
