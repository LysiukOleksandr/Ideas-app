<template>
  <v-card height="85px" flat tile>
    <v-toolbar class="primary" dark>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

      <v-toolbar-title>Ideas App</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn
        text
        color="white"
        class="mr-5"
        router
        to="/login"
        v-if="!checkUser"
      >
        Войти
      </v-btn>
      <v-btn text color="white" class="mr-5" v-else @click="logOut">
        Log out
      </v-btn>
      <h4 class="toolbar-email">{{ getEmail }}</h4>
    </v-toolbar>
    <v-navigation-drawer
      v-model="drawer"
      app
      class="primary"
      temporary
      dark
      overlay-opacity="0.7"
    >
      <div class="text-center">
        <v-avatar color="white" size="60" class="mt-2">VJ</v-avatar>
        <h4 class="mt-2">{{ getUserDetails.userEmail }}</h4>
        <p class="mt-2 mb-2">{{ getUserDetails.role }}</p>
      </div>
      <v-list>
        <v-list-item-group v-model="elem">
          <v-list-item
            v-for="(item, index) in items"
            :key="index"
            router
            :to="item.route"
          >
            <v-list-item-icon>
              <v-icon v-text="item.icon" color="orange darken-1"></v-icon>
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
        { text: "Главная", icon: "mdi-home", route: "/" },
        { text: "О проекте", icon: "mdi-information", route: "/about" }
      ]
    };
  },
  methods: {
    logOut() {
      const confirmLogOut = confirm(
        "Вы действительно хотите покинуть приложение?"
      );
      if (confirmLogOut) {
        this.$store.dispatch("signOut");
        this.$router.push("/login");
      }
    }
  },
  computed: {
    getEmail() {
      return this.$store.getters.getEmail;
    },
    checkUser() {
      return this.$store.getters.checkUser;
    },
    getUserDetails() {
      return this.$store.getters.getUserDetails;
    }
  }
};
</script>

<style lang="scss">
.toolbar-email {
  @media screen and(max-width:600px) {
    display: none;
  }
}
</style>
