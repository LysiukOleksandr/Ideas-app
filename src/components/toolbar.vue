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
      dark
      overlay-opacity="0.7"
    >
      <v-list>
        <v-list-item-group v-model="elem">
          <v-list-item
            v-for="(item, index) in items"
            :key="index"
            router
            :to="item.route"
          >
            <v-list-item-icon>
              <v-icon v-text="item.icon" color="orange lighten-3"></v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title>{{ item.text }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
  </v-card>
</template>

<script>
export default {
  name: "toolbar",
  data() {
    return {
      drawer: false,
      elem: 1,
      items: [
        { text: "Home", icon: "mdi-home", route: "/" },
        { text: "About", icon: "mdi-information", route: "/about" }
      ]
    };
  }
};
</script>
